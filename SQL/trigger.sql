CREATE TRIGGER my_trigger_send_email
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION my_send_registration_email();