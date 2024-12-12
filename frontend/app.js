document.getElementById("fetch-data").addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:5000/api/data"); // 修改为后端服务地址
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById("output").textContent = `Error: ${error.message}`;
    }
});
