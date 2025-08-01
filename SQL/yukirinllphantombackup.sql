CREATE TABLE `yukirinllphantombackup`.`users` (
    `id` CHAR(36) NOT NULL,
    `instance_id` CHAR(36) NULL,
    `aud` VARCHAR(255) NULL,
    `role` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `encrypted_password` VARCHAR(255) NULL,
    `email_confirmed_at` DATETIME(6) NULL,
    `invited_at` DATETIME(6) NULL,
    `confirmation_token` VARCHAR(255) NULL,
    `confirmation_sent_at` DATETIME(6) NULL,
    `recovery_token` VARCHAR(255) NULL,
    `recovery_sent_at` DATETIME(6) NULL,
    `email_change_token_new` VARCHAR(255) NULL,
    `email_change` VARCHAR(255) NULL,
    `email_change_sent_at` DATETIME(6) NULL,
    `last_sign_in_at` DATETIME(6) NULL,
    `raw_app_meta_data` JSON NULL,
    `raw_user_meta_data` JSON NULL,
    `is_super_admin` TINYINT(1) NULL,
    `created_at` DATETIME(6) NULL,
    `updated_at` DATETIME(6) NULL,
    `phone` VARCHAR(255) NULL,
    `phone_confirmed_at` DATETIME(6) NULL,
    `phone_change` VARCHAR(255) NULL,
    `phone_change_token` VARCHAR(255) NULL,
    `phone_change_sent_at` DATETIME(6) NULL,
    `confirmed_at` DATETIME(6) NULL,
    `email_change_token_current` VARCHAR(255) NULL,
    `email_change_confirm_status` SMALLINT NULL,
    `banned_until` DATETIME(6) NULL,
    `reauthentication_token` VARCHAR(255) NULL,
    `reauthentication_sent_at` DATETIME(6) NULL,
    `is_sso_user` TINYINT(1) NULL,
    `deleted_at` DATETIME(6) NULL,
    `is_anonymous` TINYINT(1) NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `yukirinllphantombackup`.`images` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `data` TEXT NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `uploaded_by` VARCHAR(255) NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `yukirinllphantombackup`.`messages` (
    `id` CHAR(36) NOT NULL,
    `legacy_user_id` CHAR(36) NULL,
    `user_id` CHAR(36) NULL,
    `message` TEXT NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `yukirinllphantombackup`.`user_profile` (
    `id` CHAR(36) NOT NULL,
    `legacy_user_id` CHAR(36) NULL,
    `user_id` CHAR(36) NULL,
    `name` VARCHAR(255) NOT NULL,
    `data` TEXT NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `uploaded_by` VARCHAR(255) NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `yukirinllphantombackup`.`chat_records` (
    `id` CHAR(36) NOT NULL,
    `message_type` VARCHAR(255) NULL,
    `qq_user_id` BIGINT NULL,
    `qq_group_id` BIGINT NULL,
    `message` TEXT NULL,
    `timestamp` DATETIME(6) NULL,
    `created_at` DATETIME(6) NULL,
    `updated_at` DATETIME(6) NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;