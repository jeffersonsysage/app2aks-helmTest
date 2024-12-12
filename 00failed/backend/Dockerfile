# 使用 Node.js 官方镜像作为基础镜像
FROM node:16-alpine

# 设置工作目录
WORKDIR /app

# 拷贝后端代码到镜像
COPY ./ ./

# 安装依赖
RUN npm install

# 启动后端应用
CMD ["npm", "start"]

# 暴露端口
EXPOSE 5000
