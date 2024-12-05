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