-- =============================================
-- Database schema creation script
-- =============================================

-- 创建 users 表
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    user_id UUID DEFAULT auth.uid()
);
ALTER TABLE users ADD CONSTRAINT users_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id);

-- 创建 messages 表
CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    legacy_user_id UUID,
    user_id UUID DEFAULT auth.uid(),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE messages ADD CONSTRAINT messages_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id);
ALTER TABLE messages ADD CONSTRAINT messages_legacy_user_id_fkey FOREIGN KEY (legacy_user_id) REFERENCES users(id);

-- 创建 images 表
CREATE TABLE images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255),
    data TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    uploaded_by VARCHAR(255),
    file_name TEXT,
    description TEXT,
    legacy_user_id UUID,
    user_id UUID DEFAULT auth.uid()
);
ALTER TABLE images ADD CONSTRAINT images_legacy_user_id_fkey FOREIGN KEY (legacy_user_id) REFERENCES users(id);
ALTER TABLE images ADD CONSTRAINT images_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id);

-- 创建 user_profile 表
CREATE TABLE user_profile (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    legacy_user_id UUID,
    user_id UUID DEFAULT auth.uid(),
    name VARCHAR(255) NOT NULL,
    data TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    uploaded_by VARCHAR(255)
);
ALTER TABLE user_profile ADD CONSTRAINT user_profile_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id);
ALTER TABLE user_profile ADD CONSTRAINT user_profile_legacy_user_id_fkey FOREIGN KEY (legacy_user_id) REFERENCES users(id);

-- 创建 SMS_forward 表
CREATE TABLE public.SMS_forward (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    created_at timestamp with time zone DEFAULT now(),
    message text NOT NULL
);
ALTER TABLE public.SMS_forward ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Enable read access for all users"
ON public.SMS_forward
FOR SELECT
    TO anon
    USING (true);

-- 创建 visitor_stats 表
CREATE TABLE visitor_stats (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ip_address TEXT,
    user_agent TEXT,
    country TEXT,
    region TEXT,
    city TEXT,
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION,
    device_type TEXT,
    browser TEXT,
    os TEXT,
    referrer TEXT,
    page_url TEXT
);

-- 确保 images 表的 name 和 description 字段为可为空
ALTER TABLE images ALTER COLUMN name DROP NOT NULL;
ALTER TABLE images ALTER COLUMN description DROP NOT NULL;

-- =============================================
-- End of database schema creation script
-- =============================================


CREATE TABLE passwords (
    user_id UUID NOT NULL,
    legacy_user_id UUID NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (legacy_user_id)
);


CREATE TABLE health_check_log (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMP NOT NULL,
    database_status VARCHAR(10),
    database_details TEXT,
    connection_pool_details TEXT,
    redis_status VARCHAR(10),
    redis_details TEXT,
    leancloud_status VARCHAR(10),
    leancloud_details TEXT,
    system_details TEXT
);


CREATE SCHEMA IF NOT EXISTS onebot;
CREATE TABLE onebot.chat_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- 主键，使用UUID
    message_type TEXT NOT NULL, -- 消息类型，如 'private' 或 'group'
    qq_user_id BIGINT, -- 发送消息的用户ID
    qq_group_id BIGINT, -- 消息所属的群ID，如果适用
    message TEXT NOT NULL, -- 消息内容
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(), -- 消息发送的时间
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), -- 记录创建时间
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW() -- 记录更新时间
);

CREATE INDEX idx_chat_records_user_id ON onebot.chat_records (qq_user_id);
CREATE INDEX idx_chat_records_group_id ON onebot.chat_records (qq_group_id);