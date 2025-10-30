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
    name TEXT NOT NULL,  -- 名字，非空
    free_start_time TIME,-- 空闲开始时间（时分秒）
    free_end_time TIME,  -- 空闲结束时间（时分秒）
    occupation TEXT,     -- 职业
    notes TEXT,          -- 备注
    volunteer_dungeon TEXT,                         -- 志愿副本
    level INTEGER,       -- 玩家等级
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



-- -- 创建新的去重表
-- CREATE TABLE recruitments_dedup (
--     id BIGINT PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     description TEXT,
--     duty VARCHAR(255),
--     category VARCHAR(100),
--     home_world VARCHAR(100),
--     datacenter VARCHAR(100),
--     -- 添加唯一约束，防止重要字段重复
--     CONSTRAINT uk_important_fields UNIQUE (name, description, duty, category, home_world, datacenter),
--     -- 保留其他字段但不作为重要字段
--     created_world VARCHAR(100),
--     created_world_id INTEGER,
--     home_world_id INTEGER,
--     category_id INTEGER,
--     min_item_level INTEGER DEFAULT 0,
--     slots_filled INTEGER DEFAULT 0,
--     slots_available INTEGER DEFAULT 1,
--     time_left DOUBLE PRECISION,
--     updated_at TIMESTAMP,
--     is_cross_world BOOLEAN DEFAULT false
-- );
-- -- 创建索引优化查询性能
-- CREATE INDEX idx_recruitments_dedup_name ON recruitments_dedup(name);
-- CREATE INDEX idx_recruitments_dedup_duty ON recruitments_dedup(duty);
-- CREATE INDEX idx_recruitments_dedup_category ON recruitments_dedup(category);
-- CREATE INDEX idx_recruitments_dedup_home_world ON recruitments_dedup(home_world);
-- CREATE INDEX idx_recruitments_dedup_datacenter ON recruitments_dedup(datacenter);



-- 删除原有表（如果存在）
DROP TABLE IF EXISTS housing_sales;

-- 创建房屋销售表
CREATE TABLE housing_sales (
    id SERIAL PRIMARY KEY,
    server_id VARCHAR(50) NOT NULL,
    area INTEGER NOT NULL CHECK (area BETWEEN 0 AND 4),
    slot INTEGER NOT NULL CHECK (slot >= 0),
    house_id INTEGER NOT NULL CHECK (house_id >= 1),
    price BIGINT NOT NULL CHECK (price >= 0),
    size INTEGER NOT NULL,
    first_seen TIMESTAMP WITH TIME ZONE NOT NULL,
    last_seen TIMESTAMP WITH TIME ZONE NOT NULL,
    purchase_type INTEGER NOT NULL CHECK (purchase_type BETWEEN 0 AND 2),
    region_type INTEGER NOT NULL CHECK (region_type BETWEEN 0 AND 2),  -- 修改为允许0-2
    state INTEGER NOT NULL CHECK (state BETWEEN 0 AND 3),
    participate INTEGER CHECK (participate >= 0),
    winner VARCHAR(100),
    end_time TIMESTAMP WITH TIME ZONE,
    update_time TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    -- 修改唯一约束，去掉 last_seen，只基于房屋标识
    UNIQUE(server_id, area, slot, house_id)
);

-- 创建索引以提高查询性能
CREATE INDEX idx_housing_sales_server ON housing_sales(server_id);
CREATE INDEX idx_housing_sales_area ON housing_sales(area);
CREATE INDEX idx_housing_sales_server_area ON housing_sales(server_id, area);
CREATE INDEX idx_housing_sales_purchase_type ON housing_sales(purchase_type);
CREATE INDEX idx_housing_sales_region_type ON housing_sales(region_type);
CREATE INDEX idx_housing_sales_state ON housing_sales(state);
CREATE INDEX idx_housing_sales_last_seen ON housing_sales(last_seen);
CREATE INDEX idx_housing_sales_end_time ON housing_sales(end_time);
CREATE INDEX idx_housing_sales_created_at ON housing_sales(created_at);

-- 复合索引用于常用查询
CREATE INDEX idx_housing_sales_server_area_slot ON housing_sales(server_id, area, slot);
CREATE INDEX idx_housing_sales_price ON housing_sales(price);
CREATE INDEX idx_housing_sales_purchase_state ON housing_sales(purchase_type, state);

-- 为通知功能创建索引
CREATE INDEX idx_housing_sales_notify ON housing_sales(server_id, area, purchase_type, last_seen);

-- 添加表注释和字段注释
COMMENT ON TABLE housing_sales IS '房屋销售数据表';
COMMENT ON COLUMN housing_sales.server_id IS '服务器ID';
COMMENT ON COLUMN housing_sales.area IS '区域ID：0-海雾村,1-薰衣草苗圃,2-高脚孤丘,3-白银乡,4-穹顶皓天';
COMMENT ON COLUMN housing_sales.slot IS '小区编号，从0开始计算';
COMMENT ON COLUMN housing_sales.house_id IS '房号，从1开始计算';
COMMENT ON COLUMN housing_sales.price IS '当前房屋价格';
COMMENT ON COLUMN housing_sales.size IS '房屋尺寸：0-S,1-M,2-L';
COMMENT ON COLUMN housing_sales.first_seen IS '首次发现时间';
COMMENT ON COLUMN housing_sales.last_seen IS '上次更新时间';
COMMENT ON COLUMN housing_sales.purchase_type IS '购买方式：0-不可购买,1-先到先得,2-抽签';
COMMENT ON COLUMN housing_sales.region_type IS '房屋用途限制：0-无限制,1-仅限部队购买,2-仅限个人购买';
COMMENT ON COLUMN housing_sales.state IS '抽签状态：0-未知,1-可供购买,2-结果公示,3-准备中';
COMMENT ON COLUMN housing_sales.participate IS '抽签参与人数';
COMMENT ON COLUMN housing_sales.winner IS '抽签中选编号';
COMMENT ON COLUMN housing_sales.end_time IS '抽签当前阶段结束时间';
COMMENT ON COLUMN housing_sales.update_time IS '抽签信息更新时间';
COMMENT ON COLUMN housing_sales.created_at IS '记录创建时间';

-- 创建视图用于查询最新数据
CREATE OR REPLACE VIEW latest_housing_sales AS
SELECT DISTINCT ON (server_id, area, slot, house_id) *
FROM housing_sales
ORDER BY server_id, area, slot, house_id, last_seen DESC;

-- 创建视图用于查询可购买房屋
CREATE OR REPLACE VIEW available_housing_sales AS
SELECT *
FROM housing_sales
WHERE purchase_type IN (1, 2)  -- 先到先得或抽签
  AND last_seen > NOW() - INTERVAL '7 days'  -- 最近7天内的数据
ORDER BY server_id, area, slot, house_id, last_seen DESC;


CREATE TABLE area_types (
 id INTEGER PRIMARY KEY,
 name VARCHAR(50) NOT NULL
);

INSERT INTO area_types VALUES
(0, '海雾村'),
(1, '薰衣草苗圃'),
(2, '高脚孤丘'),
(3, '白银乡'),
(4, '穹顶皓天');

CREATE TABLE purchase_types (
     id INTEGER PRIMARY KEY,
     name VARCHAR(50) NOT NULL
);

INSERT INTO purchase_types VALUES
(0, '不可购买'),
(1, '先到先得'),
(2, '抽签');