-- =============================================
-- memfireDB schema changes begin here
-- =============================================

--不可用已废弃
--CREATE TRIGGER my_trigger_send_email
--AFTER INSERT ON auth.users
--FOR EACH ROW
--EXECUTE FUNCTION my_send_registration_email();


CREATE TRIGGER my_trigger_after_auth_users_insert
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION my_insert_user();

--没有权限从auth中获取数据，已经去除
--CREATE TRIGGER my_trigger_before_users_insert
--BEFORE INSERT ON users
--FOR EACH ROW
--EXECUTE FUNCTION my_get_user_id_from_auth_users();

-- =============================================
-- memfireDB schema changes end here
-- =============================================


-- =============================================
-- supabase schema changes begin here
-- =============================================

CREATE TRIGGER trigger_update_legacy_user_id_and_uploaded_by
BEFORE INSERT ON images
FOR EACH ROW
EXECUTE FUNCTION update_legacy_user_id_and_uploaded_by();



CREATE TRIGGER password_insert_trigger
AFTER INSERT ON public.users
FOR EACH ROW
EXECUTE FUNCTION handle_password_insert();



CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_system_config_timestamp
    BEFORE UPDATE ON system_config
    FOR EACH ROW
    EXECUTE FUNCTION update_timestamp();