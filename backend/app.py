from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# 启用跨域支持
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from the backend!", "status": "success"})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
