# 使用 Python 基础镜像
FROM python:3.9-slim

# 设置工作目录
WORKDIR /app

# 复制后端代码
COPY app.py requirements.txt ./

# 安装依赖
RUN pip install -r requirements.txt

# 暴露端口
EXPOSE 5000

# 启动后端服务
CMD ["python", "app.py"]
