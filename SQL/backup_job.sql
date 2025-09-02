-- 创建备份表
CREATE TABLE recruitments_backup (
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

-- 插入数据到备份表
INSERT INTO recruitments_backup
SELECT * FROM recruitments;

-- 清空原表
TRUNCATE TABLE recruitments;