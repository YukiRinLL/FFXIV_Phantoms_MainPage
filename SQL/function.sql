-- =============================================
-- memfireDB schema changes begin here
-- =============================================
CREATE OR REPLACE FUNCTION my_send_registration_email()
RETURNS TRIGGER AS $$
BEGIN
    -- 调用外部Node.js服务发送邮件
    PERFORM pg_background_job('node /path/to/sendEmail.js ' || NEW.email);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION my_reversibleHash4to6(str VARCHAR(255))
RETURNS VARCHAR AS $$
DECLARE
    primeMultiplier INT := 7;
    hashOffset INT := 100000;
    num INT;
    hashValue INT;
BEGIN
    num := str::INT;
    hashValue := (num * primeMultiplier + hashOffset) % 1000000;
    RETURN hashValue::VARCHAR;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION my_reversibleHash6to4(hashStr VARCHAR(255))
RETURNS VARCHAR AS $$
DECLARE
    primeMultiplier INT := 7;
    hashOffset INT := 100000;
    hash INT;
    original INT;
BEGIN
    hash := hashStr::INT;
    original := ((hash - hashOffset) / primeMultiplier);
    RETURN original::VARCHAR;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION my_insert_user()
RETURNS TRIGGER AS $$
BEGIN
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION my_get_user_id_from_auth_users()
RETURNS TRIGGER AS $$
DECLARE
    user_id_from_auth uuid;
BEGIN
    -- 从auth.users表中根据NEW.email获取user_id
    SELECT id INTO user_id_from_auth FROM auth.users WHERE email = NEW.email LIMIT 1;
    IF FOUND THEN
        NEW.user_id := user_id_from_auth;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- =============================================
-- memfireDB schema changes end here
-- =============================================


-- =============================================
-- supabase schema changes begin here
-- =============================================

CREATE OR REPLACE FUNCTION update_legacy_user_id_and_uploaded_by()
RETURNS TRIGGER AS $$
BEGIN
    -- 从 users 表中查询对应的 id 和 username
SELECT id, username
INTO NEW.legacy_user_id, NEW.uploaded_by
FROM users
WHERE user_id = NEW.user_id;

-- 如果没有找到对应的用户记录，可以选择抛出错误或设置默认值
IF NOT FOUND THEN
        RAISE EXCEPTION 'User with user_id % not found', NEW.user_id;
END IF;

    -- 返回新记录
RETURN NEW;
END;
$$ LANGUAGE plpgsql;





CREATE OR REPLACE FUNCTION handle_password_insert()
RETURNS TRIGGER AS $$
BEGIN
    -- 将密码插入到 passwords 表中
    INSERT INTO passwords (user_id, legacy_user_id, password)
    VALUES (NEW.user_id, NEW.id, NEW.password);

    -- 将原表中的 password 字段设置为 "masked"
    UPDATE public.users
    SET password = 'masked'
    WHERE id = NEW.id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;