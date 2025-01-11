// Fitur Login dan Daftar
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulasi login, periksa username dan password
    if (username === "admin" && password === "adminh12") {
        window.location.href = "dashboard.html"; // Redirect ke halaman admin
    } else if (username && password) {
        alert("Login Berhasil!");
        window.location.href = "chat.html"; // Redirect ke halaman chat untuk user biasa
    } else {
        alert("Username atau Password salah");
    }
});

// Chat System: Mengirim pesan
document.getElementById('send-btn')?.addEventListener('click', function() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value;
    if (message) {
        const chatHistory = document.getElementById('chat-history');
        const newMessage = document.createElement('div');
        newMessage.textContent = `User: ${message}`;
        chatHistory.appendChild(newMessage);
        chatInput.value = ''; // Clear input
        chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll ke bawah
    }
});

// Admin reply system
document.getElementById('send-reply')?.addEventListener('click', function() {
    const replyInput = document.getElementById('admin-reply');
    const replyMessage = replyInput.value;
    if (replyMessage) {
        const messagesDiv = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.textContent = `Admin: ${replyMessage}`;
        messagesDiv.appendChild(newMessage);
        replyInput.value = ''; // Clear input
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll ke bawah
    }
});
          
