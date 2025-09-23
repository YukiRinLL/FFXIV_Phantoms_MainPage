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


CREATE TABLE onebot.user_messages (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL,
    group_id BIGINT NOT NULL,
    user_agent TEXT,
    app_name TEXT,
    app_version TEXT,
    platform TEXT,
    language TEXT,
    cookies_enabled BOOLEAN,
    do_not_track TEXT,
    java_enabled BOOLEAN,
    on_line BOOLEAN,
    screen_width INT,
    screen_height INT,
    color_depth INT,
    pixel_ratio FLOAT,
    orientation TEXT,
    available_memory INT,
    hardware_concurrency INT,
    connection_type TEXT,
    downlink FLOAT,
    effective_type TEXT,
    rtt FLOAT,
    battery_charging BOOLEAN,
    battery_level FLOAT,
    battery_charging_time FLOAT,
    battery_discharging_time FLOAT,
    time_zone TEXT,
    plugins TEXT[],
    mime_types TEXT[],
    latitude FLOAT,
    longitude FLOAT,
    accuracy FLOAT,
    altitude FLOAT,
    altitude_accuracy FLOAT,
    heading FLOAT,
    speed FLOAT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE recruitments (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_world VARCHAR(255),
    created_world_id INT,
    home_world VARCHAR(255),
    home_world_id INT,
    category VARCHAR(255),
    category_id INT,
    duty VARCHAR(255),
    min_item_level INT,
    slots_filled INT,
    slots_available INT,
    time_left DOUBLE PRECISION,
    updated_at TIMESTAMP(6),
    is_cross_world BOOLEAN,
    datacenter VARCHAR(255)
);

CREATE TABLE expeditionary_team (
    uuid UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- 主键，使用UUID，自动生成
    name TEXT NOT NULL,                             -- 名字，非空
    free_start_time TIME,                           -- 空闲开始时间（时分秒）
    free_end_time TIME,                             -- 空闲结束时间（时分秒）
    occupation TEXT,                                -- 职业
    notes TEXT,                                     -- 备注
    volunteer_dungeon TEXT,                         -- 志愿副本
    level INTEGER,                                  -- 玩家等级
    guild_name TEXT DEFAULT 'Phantom',              -- 所属公会名称，默认为'Phantom'
    online_status BOOLEAN DEFAULT FALSE,            -- 在线状态，默认为离线
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- 记录创建时间
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- 记录更新时间
);


CREATE TABLE system_config (
    key VARCHAR(255) PRIMARY KEY,
    value TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);