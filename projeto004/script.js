let res = document.querySelector("div#res");
let ligado = true;
function inserir(p) {
  if (ligado == false) {
    alert("A CALCULADORA ESTÁ DESLIGADA!!");
  } else {
    res.innerHTML += p;
  }
}

function limpar() {
  if (ligado == false) {
    alert("A CALCULADORA ESTÁ DESLIGADA!!");
  } else {
    res.innerHTML = "";
  }
}

function on_off() {
  if (ligado == true) {
    res.style.background = "darkgreen";
    res.innerHTML = "";
    ligado = false;
  } else {
    res.style.background = "rgb(5, 168, 5";
    res.innerHTML = "";
    ligado = true;
  }
}

function resultado() {
  let resultado = document.getElementById("res").innerHTML;
  if (res.innerHTML.length == 0) {
    alert("INFORME VALORES PARA CONTINUAR!!!");
    res.innerHTML = "";
  } else {
    if (ligado == true) {
      res.innerHTML = eval(resultado);
    } else {
      alert("A CALCULADORA ESTÁ DESLIGADA!!");
    }
  }
}
