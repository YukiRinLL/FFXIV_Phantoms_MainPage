--清理健康日志表中状态全部为UP的记录
delete from health_check_log where database_status = 'UP' and redis_status = 'UP' and leancloud_status = 'UP'

-- --去重备份recruitments表
-- INSERT INTO recruitments_dedup (
--     id, name, description, duty, category, home_world, datacenter,
--     created_world, created_world_id, home_world_id, category_id,
--     min_item_level, slots_filled, slots_available, time_left, updated_at, is_cross_world
-- )
-- SELECT
--     id, name, description, duty, category, home_world, datacenter,
--     created_world, created_world_id, home_world_id, category_id,
--     min_item_level, slots_filled, slots_available, time_left, updated_at, is_cross_world
-- FROM recruitments
--     ON CONFLICT ON CONSTRAINT uk_important_fields DO NOTHING;
-- --清空原表
-- --TRUNCATE TABLE recruitments;


