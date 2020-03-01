document.onload = getName();
function getName() {
  var txt;
  var person = window.sessionStorage.getItem("person");
  if(!person){
    var person = prompt("Seja bem-vindo(a)! Qual seu nome?");
  }
  if (person == null || person == "") {
    window.sessionStorage.setItem("person", "Visitante");
  } else {
    window.sessionStorage.setItem("person", person);
  }
  txt = "Olá, " + window.sessionStorage.getItem("person") + "!";
  document.getElementById("usernameJS").innerHTML = txt;
}

function quitSession(){
  window.sessionStorage.removeItem("person");
  window.sessionStorage.clear();
  window.location.href = "../";
}

function calcConcMagr(){
  var volumeConc = document.getElementById("volumeConc").value;
  //volume = volume de concreto * ( 1 / volume por saco de cimento) * traço
  var latas_areia = volumeConc*1/0.25*8;
  var latas_brita = volumeConc*1/0.25*11.5;
  var sacos_cimento = volumeConc*1/0.25*1;
  var latas_agua = volumeConc*1/0.25*2;
  var rendimento = volumeConc*1/0.25*14;

  document.getElementById("resDiv").style.display = "unset";
  document.getElementById("resDiv").innerHTML = "<div class='alert alert-primary alert-dismissible alertar-media-screen' role='alert'> <h4 class='sub-title'>Quantidades necessárias:</h4> <button type='button' class='close' data-dismiss='alert' aria-label='Fechar'> <span aria-hidden='true'>&times;</span> </button> <p id='res'></p>";
  document.getElementById("res").innerHTML = sacos_cimento + " sacos de cimento<br/>" + latas_areia + " latas de areia <br/>" + latas_brita + " latas de brita <br/>" + latas_agua + " latas de água<br/><br/> Rende aproximadamente: " + rendimento + " latas de concreto";

}

function calcConcFund(){
  var volumeConc = document.getElementById("volumeConc").value;
  //volume = volume de concreto * ( 1 / volume por saco de cimento) * traço
  var latas_areia = volumeConc*1/0.16*5;
  var latas_brita = volumeConc*1/0.16*6.5;
  var sacos_cimento = volumeConc*1/0.16*1;
  var latas_agua = volumeConc*1/0.16*1.5;  
  var rendimento = volumeConc*1/0.16*9;

  document.getElementById("resDiv").style.display = "unset";
  document.getElementById("resDiv").innerHTML = "<div class='alert alert-primary alert-dismissible alertar-media-screen' role='alert'> <h4 class='sub-title'>Quantidades necessárias:</h4> <button type='button' class='close' data-dismiss='alert' aria-label='Fechar'> <span aria-hidden='true'>&times;</span> </button> <p id='res'></p>";
  document.getElementById("res").innerHTML = sacos_cimento + " sacos de cimento<br/>" + latas_areia + " latas de areia <br/>" + latas_brita + " latas de brita <br/>" + latas_agua + " latas de água<br/><br/> Rende aproximadamente: " + rendimento + " latas de concreto";

}

function calcConcPiso(){
  var volumeConc = document.getElementById("volumeConc").value;
  //volume = volume de concreto * ( 1 / volume por saco de cimento) * traço
  var latas_areia = volumeConc*1/0.14*4;
  var latas_brita = volumeConc*1/0.14*6;
  var sacos_cimento = volumeConc*1/0.14*1;
  var latas_agua = volumeConc*1/0.14*1.5;
  var rendimento = volumeConc*1/0.14*8;

  document.getElementById("resDiv").style.display = "unset";
  document.getElementById("resDiv").innerHTML = "<div class='alert alert-primary alert-dismissible alertar-media-screen' role='alert'> <h4 class='sub-title'>Quantidades necessárias:</h4> <button type='button' class='close' data-dismiss='alert' aria-label='Fechar'> <span aria-hidden='true'>&times;</span> </button> <p id='res'></p>";
  document.getElementById("res").innerHTML = sacos_cimento + " sacos de cimento<br/>" + latas_areia + " latas de areia <br/>" + latas_brita + " latas de brita <br/>" + latas_agua + " latas de água<br/><br/> Rende aproximadamente: " + rendimento + " latas de concreto";

}

function calcConcSupe(){
  var volumeConc = document.getElementById("volumeConc").value;
  //volume = volume de concreto * ( 1 / volume por saco de cimento) * traço
  var latas_areia = volumeConc*1/0.14*4;
  var latas_brita = volumeConc*1/0.14*5.5;
  var sacos_cimento = volumeConc*1/0.14*1;
  var latas_agua = volumeConc*1/0.14*1.25;
  var rendimento = volumeConc*1/0.14*8;

  document.getElementById("resDiv").style.display = "unset";
  document.getElementById("resDiv").innerHTML = "<div class='alert alert-primary alert-dismissible alertar-media-screen' role='alert'> <h4 class='sub-title'>Quantidades necessárias:</h4> <button type='button' class='close' data-dismiss='alert' aria-label='Fechar'> <span aria-hidden='true'>&times;</span> </button> <p id='res'></p>";
  document.getElementById("res").innerHTML = sacos_cimento + " sacos de cimento<br/>" + latas_areia + " latas de areia <br/>" + latas_brita + " latas de brita <br/>" + latas_agua + " latas de água<br/><br/> Rende aproximadamente: " + rendimento + " latas de concreto";

}