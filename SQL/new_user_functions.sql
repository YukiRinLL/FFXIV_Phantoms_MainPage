CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
    user_data JSON;
BEGIN
    -- Collect all user fields into a JSON object
    user_data := json_build_object(
        'instance_id', NEW.instance_id,
        'id', NEW.id,
        'aud', NEW.aud,
        'role', NEW.role,
        'email', NEW.email,
        'encrypted_password', NEW.encrypted_password,
        'email_confirmed_at', NEW.email_confirmed_at,
        'invited_at', NEW.invited_at,
        'confirmation_token', NEW.confirmation_token,
        'confirmation_sent_at', NEW.confirmation_sent_at,
        'recovery_token', NEW.recovery_token,
        'recovery_sent_at', NEW.recovery_sent_at,
        'email_change_token_new', NEW.email_change_token_new,
        'email_change', NEW.email_change,
        'email_change_sent_at', NEW.email_change_sent_at,
        'last_sign_in_at', NEW.last_sign_in_at,
        'raw_app_meta_data', NEW.raw_app_meta_data,
        'raw_user_meta_data', NEW.raw_user_meta_data,
        'is_super_admin', NEW.is_super_admin,
        'created_at', NEW.created_at,
        'updated_at', NEW.updated_at,
        'phone', NEW.phone,
        'phone_confirmed_at', NEW.phone_confirmed_at,
        'phone_change', NEW.phone_change,
        'phone_change_token', NEW.phone_change_token,
        'phone_change_sent_at', NEW.phone_change_sent_at,
        'confirmed_at', NEW.confirmed_at,
        'email_change_token_current', NEW.email_change_token_current,
        'email_change_confirm_status', NEW.email_change_confirm_status,
        'banned_until', NEW.banned_until,
        'reauthentication_token', NEW.reauthentication_token,
        'reauthentication_sent_at', NEW.reauthentication_sent_at,
        'is_sso_user', NEW.is_sso_user,
        'deleted_at', NEW.deleted_at,
        'is_anonymous', NEW.is_anonymous
    );

    -- Send the JSON data to your external API
    PERFORM shell('curl -X POST https://phantoms-backend.onrender.com/api/email/new-user -H "Content-Type: application/json" -d ''' || user_data || '''');

    RETURN NEW;
END;
$$;

-- Create a trigger to call the function after a new user is inserted
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();