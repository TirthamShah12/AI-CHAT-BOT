function sendMessage() {
    var userMessage = document.getElementById("userInput").value;
    if (userMessage.trim() === "") return;

    fetch("https://your-api-url/chat", {  // Replace with your actual backend API URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("response").innerText = "AI: " + data.response;
    })
    .catch(error => console.error("Error:", error));
}