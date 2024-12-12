# 使用 Node.js 官方镜像作为基础镜像
FROM node:16-alpine

# 设置工作目录
WORKDIR /app

# 拷贝前端代码到镜像
COPY ./ ./

# 安装依赖
RUN npm install

# 构建前端应用
RUN npm run build

# 启动前端应用
CMD ["npm", "start"]

# 暴露端口
EXPOSE 3000
