# 使用 Nginx 作为基础镜像
FROM nginx:latest

# 将静态文件复制到 Nginx 的默认静态文件目录
COPY . /usr/share/nginx/html

# 复制入口脚本并设置执行权限
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# 暴露 80 端口
EXPOSE 80

# 使用入口脚本启动（支持环境变量注入）
ENTRYPOINT ["/entrypoint.sh"]