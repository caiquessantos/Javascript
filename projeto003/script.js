let num = document.querySelector("input#num");
let lista = document.querySelector("select#lista");
let res = document.querySelector("div#res");
let vetor = [];

function adicionar() {
  if (
    num.value.length != 0 &&
    isNumero(num.value) &&
    !inLista(num.value, vetor)
  ) {
    vetor.push(Number(num.value));
    let item = document.createElement("option");
    item.text = "Valor adicionado :" + num.value;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("ERRO!!! INFORME O VALOR E TENTE NOVAMENTE!!!");
  }
  num.value = "";
  num.focus();
}

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  for (let c = 0; c <= l.length; c++) {
    if (Number(n) == l[c]) {
      return true;
    }
  }
  return false;
}

function finalizar() {
  if (vetor.length == 0) {
    alert("Adicione valores primeiro!!!");
  } else {
    res.innerHTML = "";
    res.innerHTML += "Ao todo foram cadastrados ";
    res.innerHTML += vetor.length;
    res.innerHTML += " valores <br>";
    res.innerHTML += "O maior valor foi ";
    res.innerHTML += maior_valor(vetor);
    res.innerHTML += "<br>O menor valor foi ";
    res.innerHTML += menor_valor(vetor);
    res.innerHTML += "<br>Somando todos os valores temos ";
    res.innerHTML += soma(vetor);
    res.innerHTML += "<br>A média dos valores é ";
    res.innerHTML += media(vetor);
  }
}

function maior_valor(v) {
  let maior = 0;
  for (let c = 0; c <= v.length; c++) {
    if (v[c] > maior) {
      maior = v[c];
    }
  }
  return maior;
}

function menor_valor(v) {
  let menor = v[0];
  for (let c = 0; c <= v.length; c++) {
    if (v[c] < menor) {
      menor = v[c];
    }
  }
  return menor;
}

function soma(v) {
  let soma = 0;
  for (let pos in v) {
    soma += v[pos];
  }
  return soma;
}

function media(v) {
  let soma = 0;
  for (let pos in v) {
    soma += v[pos];
  }
  return soma / v.length;
}
