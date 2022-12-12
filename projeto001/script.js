function carregar() {
  var msg = document.querySelector("div#msg");
  var img = document.querySelector("img#imagem");
  var agora = new Date();
  var hora = agora.getHours();
  msg.innerHTML = "Agora são " + hora;
  if (hora > 1) {
    msg.innerHTML += " horas.";
  } else {
    msg.innerHTML += " hora.";
  }
  if (hora >= 5 && hora <= 12) {
    img.src = "image/manhã.jpg";
    document.body.style.background = "bisque";
  } else if (hora > 12 && hora < 18) {
    img.src = "image/tarde.jpg";
    document.body.style.background = " rgb(223, 165, 59)";
  } else {
    img.src = "image/noite.jpg";
    document.body.style.background = "gray";
  }
}
