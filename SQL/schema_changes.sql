-- =============================================
-- memfireDB schema changes begin here
-- =============================================
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);
ALTER TABLE users ADD COLUMN email VARCHAR(255) UNIQUE;
ALTER TABLE users ADD COLUMN user_id UUID;
ALTER TABLE users ADD CONSTRAINT users_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id);
ALTER TABLE users ALTER COLUMN user_id SET DEFAULT auth.uid();

CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
ALTER TABLE messages RENAME COLUMN user_id TO legacy_user_id;
ALTER TABLE messages ADD COLUMN user_id UUID;
ALTER TABLE messages DROP CONSTRAINT messages_user_id_fkey;
ALTER TABLE messages ADD CONSTRAINT messages_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id);
ALTER TABLE messages ADD CONSTRAINT messages_legacy_user_id_fkey FOREIGN KEY (legacy_user_id) REFERENCES users(id);
ALTER TABLE messages ALTER COLUMN user_id SET DEFAULT auth.uid();


CREATE TABLE images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    data TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    uploaded_by VARCHAR(255)
);


CREATE TABLE user_profile (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID,
    name VARCHAR(255) NOT NULL,
    data TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    uploaded_by VARCHAR(255)
);
ALTER TABLE user_profile RENAME COLUMN user_id TO legacy_user_id;
ALTER TABLE user_profile ADD COLUMN user_id UUID;
ALTER TABLE user_profile ADD CONSTRAINT user_profile_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id);
ALTER TABLE user_profile ADD CONSTRAINT user_profile_legacy_user_id_fkey FOREIGN KEY (legacy_user_id) REFERENCES users(id);
ALTER TABLE user_profile ALTER COLUMN user_id SET DEFAULT auth.uid();
-- =============================================
-- memfireDB schema changes end here
-- =============================================


-- =============================================
-- supabase schema changes begin here
-- =============================================
-- users表
ALTER TABLE users ADD COLUMN new_id UUID PRIMARY KEY DEFAULT gen_random_uuid();

-- 更新所有依赖users.id的外键约束，指向新的new_id
ALTER TABLE messages ADD CONSTRAINT messages_new_user_id_fkey FOREIGN KEY (legacy_user_id) REFERENCES users(new_id);
ALTER TABLE user_profile ADD CONSTRAINT user_profile_new_user_id_fkey FOREIGN KEY (legacy_user_id) REFERENCES users(new_id);

-- 删除旧的id列
ALTER TABLE users DROP COLUMN id;

-- 重命名新的id列为id
ALTER TABLE users RENAME COLUMN new_id TO id;

-- =============================================
-- supabase schema changes end here
-- =============================================





