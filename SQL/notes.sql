--## db version
SELECT
    pg_catalog.version() AS server_version;


--## list all index
SELECT
    t.relname AS table_name,
    i.relname AS index_name,
    idx.indisunique,
    idx.indisprimary,
    am.amname AS index_type,
    idx.indexprs,
    idx.indpred
FROM
    pg_index idx
JOIN
    pg_class t ON t.oid = idx.indrelid
JOIN
    pg_class i ON i.oid = idx.indexrelid
JOIN
    pg_am am ON am.oid = i.relam
--WHERE i.relname like '%my%'


--## list all SP
SELECT
    proname AS procedure_name,
    pg_get_userbyid(proowner) AS owner_name,
    lanname AS language,
    CASE
        WHEN provolatile = 'i' THEN 'IMMUTABLE'
        WHEN provolatile = 's' THEN 'STABLE'
        WHEN provolatile = 'v' THEN 'VOLATILE'
    END AS volatility,
    pronargs,
    proargnames,
    proargtypes,
    prorettype,
    nspname AS schema_name
FROM
    pg_proc
JOIN
    pg_type ON pg_type.oid = prorettype
JOIN
    pg_language ON pg_language.oid = prolang
JOIN
    pg_namespace ON pg_namespace.oid = pronamespace
WHERE
    pg_namespace.nspname NOT IN ('pg_catalog', 'information_schema');


--## list all trigger
SELECT
    t.tgname AS trigger_name,
    c.relname AS table_name,
    pg_get_triggerdef(t.oid) AS trigger_definition
FROM
    pg_trigger t
JOIN
    pg_class c ON t.tgrelid = c.oid
WHERE
    tgisinternal = FALSE -- 排除系统内部触发器

AND t.tgname like '%my%'


--##查看权限
SELECT
    table_schema,
    table_name,
    privilege_type
FROM
    information_schema.table_privileges
WHERE
    table_name = 'xxxxxx';







DROP TRIGGER IF EXISTS trigger_name ON table_name;