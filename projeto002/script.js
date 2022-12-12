function ver() {
  var ano_de_nasc = document.querySelector("input#txt_ano").value;
  var res = document.querySelector("div#resultado");
  var data = new Date();
  var ano_atual = data.getFullYear();

  if (ano_de_nasc == 0 || ano_de_nasc > ano_atual) {
    alert("ERRO! Verifique as respostas e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano_atual - ano_de_nasc;
    var sexo = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      sexo = "masculino";
      if (idade <= 12) {
        img.setAttribute("src", "imagens/criança_m.jpg");
      } else if (idade <= 17) {
        img.setAttribute("src", "imagens/adolescente_m.jpg");
      } else if (idade <= 59) {
        img.setAttribute("src", "imagens/adulto_m.jpg");
      } else {
        img.setAttribute("src", "imagens/idoso_m.jpg");
      }
    } else if (fsex[1].checked) {
      sexo = "feminino";
      if (idade <= 12) {
        img.setAttribute("src", "imagens/criança_f.jpg");
      } else if (idade <= 17) {
        img.setAttribute("src", "imagens/adolescente_f.jpg");
      } else if (idade <= 59) {
        img.setAttribute("src", "imagens/adulto_f.jpg");
      } else {
        img.setAttribute("src", "imagens/idoso_f.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML =
      "Você tem " + idade + " anos e é do sexo " + sexo + ". <br>";
    res.appendChild(img);
    img.style.maxWidth = "10em";
    img.style.maxHeight = "10em";
    img.style.paddingTop = "1em";
    img.style.borderRadius = "50%";
  }
}
