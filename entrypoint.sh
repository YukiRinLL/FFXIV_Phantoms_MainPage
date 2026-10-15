#!/bin/bash
# Docker 入口脚本：用环境变量替换 config.js 中的值

CONFIG_FILE="/usr/share/nginx/html/assets/js/config.js"

# 默认值（与 config.js 中的硬编码值保持一致）
DEFAULT_SUPABASE_URL="https://dshmbsawwrbuycnivcjs.supabase.co"
DEFAULT_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzaG1ic2F3d3JidXljbml2Y2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5Mjg2OTAsImV4cCI6MjA2OTUwNDY5MH0.fwRJD-WuST7mCbJf9h2i2Xk0z6mtCMCeV--JGUecC6A"

# 使用环境变量，若未设置则使用默认值
URL="${SUPABASE_URL:-$DEFAULT_SUPABASE_URL}"
KEY="${ANON_KEY:-$DEFAULT_ANON_KEY}"

# 替换 config.js 中的值
# 使用 | 作为 sed 分隔符，避免 JWT 中的 / 等字符问题
sed -i "s|SUPABASE_URL: '[^']*'|SUPABASE_URL: '${URL}'|" "$CONFIG_FILE"
sed -i "s|ANON_KEY: '[^']*'|ANON_KEY: '${KEY}'|" "$CONFIG_FILE"

# 启动 Nginx（前台运行）
exec nginx -g "daemon off;"