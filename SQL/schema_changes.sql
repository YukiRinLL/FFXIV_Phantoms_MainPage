CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);
ALTER TABLE users ADD COLUMN email VARCHAR(255) UNIQUE;
ALTER TABLE users ADD COLUMN user_id UUID;
ALTER TABLE users ADD CONSTRAINT users_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    user_id INT,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
ALTER TABLE messages RENAME COLUMN user_id TO legacy_user_id;
ALTER TABLE messages ADD COLUMN user_id UUID;
ALTER TABLE messages DROP CONSTRAINT messages_user_id_fkey;
ALTER TABLE messages ADD CONSTRAINT messages_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id);
ALTER TABLE messages ADD CONSTRAINT messages_legacy_user_id_fkey FOREIGN KEY (legacy_user_id) REFERENCES users(id);


CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    data TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    uploaded_by VARCHAR(255)
);


CREATE TABLE user_profile (
    id SERIAL PRIMARY KEY,
    user_id INT,
    name VARCHAR(255) NOT NULL,
    data TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    uploaded_by VARCHAR(255)
);
ALTER TABLE user_profile RENAME COLUMN user_id TO legacy_user_id;
ALTER TABLE user_profile ADD COLUMN user_id UUID;
ALTER TABLE user_profile ADD CONSTRAINT user_profile_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id);
ALTER TABLE user_profile ADD CONSTRAINT user_profile_legacy_user_id_fkey FOREIGN KEY (legacy_user_id) REFERENCES users(id);





