CREATE OR REPLACE FUNCTION my_send_registration_email()
RETURNS TRIGGER AS $$
BEGIN
    -- 调用外部Node.js服务发送邮件
    PERFORM pg_background_job('node /path/to/sendEmail.js ' || NEW.email);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;




