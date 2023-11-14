const socket = io.connect("https://FadeBotList ");

socket.on('userCount', userCount => {
        document.getElementById('connectionCount').innerHTML = userCount;
  })