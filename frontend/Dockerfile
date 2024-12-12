# 使用 nginx 作为前端服务
FROM nginx:alpine

# 将前端代码复制到 nginx 容器的默认路径
COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

# 暴露端口
EXPOSE 80
