# 使用 Nginx 作为基础镜像
FROM nginx:latest

# 将静态文件复制到 Nginx 的默认静态文件目录
COPY . /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]