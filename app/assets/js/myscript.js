document.onload = getName();

function getName() {
  var txt;
  var person = window.localStorage.getItem("person");
  if(!person){
    var person = prompt("Seja bem-vindo(a)! Qual seu nome?");
  }
  if (person == null || person == "") {
    window.localStorage.setItem("person", "Visitante");
  } else {
    window.localStorage.setItem("person", person);
  }
  txt = "Olá, " + window.localStorage.getItem("person") + "!";
  document.getElementById("usernameJS").innerHTML = txt;

  //
  var examDataTable = JSON.parse(window.localStorage.getItem("examDataTable"));
  var purchaseDataTable = JSON.parse(window.localStorage.getItem("purchaseDataTable"));
  var crmDataTable = JSON.parse(window.localStorage.getItem("crmDataTable"));
  //console.log(window.location.pathname);

  if(window.location.pathname == "/EngenhariaTecnologica/app/exam_result.html" || window.location.pathname == "/EngenhariaTecnologica/app/exam_delete.html"){
    if(examDataTable != null){
      for(var i=1; i<(JSON.parse(window.localStorage.getItem("examDataTable")).length / 10); i++){
        $(".pagination").append("<li class='page-item'><a class='page-link' href='#"+(i+1)+"'>"+(i+1)+"</a></li>");
        //console.log(i);
      }
    }
  }

  if(window.location.pathname == "/EngenhariaTecnologica/app/compras_add.html" || window.location.pathname == "/EngenhariaTecnologica/app/compras_del.html"){
    if(purchaseDataTable != null){
      for(var i=1; i<(JSON.parse(window.localStorage.getItem("purchaseDataTable")).length / 10); i++){
        $(".pagination").append("<li class='page-item'><a class='page-link' href='#"+(i+1)+"'>"+(i+1)+"</a></li>");
        //console.log(i);
      }
    }
  }

  if(window.location.pathname == "/EngenhariaTecnologica/app/crm_add.html" || window.location.pathname == "/EngenhariaTecnologica/app/crm_del.html"){
    if(crmDataTable != null){
      for(var i=1; i<(JSON.parse(window.localStorage.getItem("crmDataTable")).length / 10); i++){
        $(".pagination").append("<li class='page-item'><a class='page-link' href='#"+(i+1)+"'>"+(i+1)+"</a></li>");
        //console.log(i);
      }
    }
  }

}

function quitSession(){
  window.localStorage.removeItem("person");
  window.localStorage.clear();
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

// Editado em 17-03-20
// Atividade de sistemas de cadastro com localStorage

function recordExam(){
  var dataExam = document.getElementById("dataExam").value;
  var romaneioExam = document.getElementById("romaneioExam").value;
  var resultadoExam = document.getElementById("resultadoExam").value;

  var examDataTable = JSON.parse(window.localStorage.getItem("examDataTable"));
  examDataTable.push([dataExam, romaneioExam, resultadoExam]);
  window.localStorage.setItem("examDataTable", JSON.stringify(examDataTable));

  document.getElementById("resDiv").style.display = "unset";
  document.getElementById("resDiv").innerHTML = "<div class='alert alert-primary alert-dismissible alertar-media-screen' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Fechar'> <span aria-hidden='true'>&times;</span> </button> <p id='res'></p>";
  document.getElementById("res").innerHTML = "Salvo com sucesso!";

  setTimeout(function(){
    window.location.reload(1);
  }, 1000);

}

function deleteExam(){
  var romaneioExam = document.getElementById("romaneioExam").value;
  var examDataTable = JSON.parse(window.localStorage.getItem("examDataTable"));
  //console.log(examDataTable.length);

  for(var i=0; i<examDataTable.length; i++){
    var romaneioDataTable = examDataTable[i];
    if(romaneioExam == romaneioDataTable[1]){
      examDataTable.splice(i, 1);
      window.localStorage.setItem("examDataTable", JSON.stringify(examDataTable));
    }
  }

  document.getElementById("resDiv").style.display = "unset";
  document.getElementById("resDiv").innerHTML = "<div class='alert alert-primary alert-dismissible alertar-media-screen' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Fechar'> <span aria-hidden='true'>&times;</span> </button> <p id='res'></p>";
  document.getElementById("res").innerHTML = "Deletado com sucesso!";

  setTimeout(function(){
    window.location.reload(1);
  }, 1000);
}

function recordPurchase(){
  var idPurchase = Math.floor(Math.random() * 99999999) - 9999;
  var respName = document.getElementById("responsavel").value;
  var descItem = document.getElementById("descricao").value;
  var qtdItem = document.getElementById("quantidade").value;
  var unidMedida = document.getElementById("medida").value;

  var purchaseDataTable = JSON.parse(window.localStorage.getItem("purchaseDataTable"));
  purchaseDataTable.push([idPurchase, respName, descItem, qtdItem, unidMedida]);
  window.localStorage.setItem("purchaseDataTable", JSON.stringify(purchaseDataTable));

  document.getElementById("resDiv").style.display = "unset";
  document.getElementById("resDiv").innerHTML = "<div class='alert alert-primary alert-dismissible alertar-media-screen' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Fechar'> <span aria-hidden='true'>&times;</span> </button> <p id='res'></p>";
  document.getElementById("res").innerHTML = "Salvo com sucesso!";

  setTimeout(function(){
    window.location.reload(1);
  }, 1000);

}

function deletePurchase(){
  var idPurchase = document.getElementById("idPurchase").value;
  var purchaseDataTable = JSON.parse(window.localStorage.getItem("purchaseDataTable"));
  //console.log(purchaseDataTable.length);

  for(var i=0; i<purchaseDataTable.length; i++){
    var idDataTable = purchaseDataTable[i];
    if(idPurchase == idDataTable[0]){
      purchaseDataTable.splice(i, 1);
      window.localStorage.setItem("purchaseDataTable", JSON.stringify(purchaseDataTable));
    }
  }

  document.getElementById("resDiv").style.display = "unset";
  document.getElementById("resDiv").innerHTML = "<div class='alert alert-primary alert-dismissible alertar-media-screen' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Fechar'> <span aria-hidden='true'>&times;</span> </button> <p id='res'></p>";
  document.getElementById("res").innerHTML = "Deletado com sucesso!";

  setTimeout(function(){
    window.location.reload(1);
  }, 1000);
}

function recordCRM(){
  var cpf = document.getElementById("cpf").value;
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;

  var crmDataTable = JSON.parse(window.localStorage.getItem("crmDataTable"));
  crmDataTable.push([cpf, nome, email]);
  window.localStorage.setItem("crmDataTable", JSON.stringify(crmDataTable));

  document.getElementById("resDiv").style.display = "unset";
  document.getElementById("resDiv").innerHTML = "<div class='alert alert-primary alert-dismissible alertar-media-screen' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Fechar'> <span aria-hidden='true'>&times;</span> </button> <p id='res'></p>";
  document.getElementById("res").innerHTML = "Salvo com sucesso!";

  setTimeout(function(){
    window.location.reload(1);
  }, 1000);

}

function deleteCRM(){
  var cpf = document.getElementById("cpf").value;
  var crmDataTable = JSON.parse(window.localStorage.getItem("crmDataTable"));
  //console.log(purchaseDataTable.length);

  for(var i=0; i<crmDataTable.length; i++){
    var cpfDataTable = crmDataTable[i];
    if(cpf == cpfDataTable[0]){
      crmDataTable.splice(i, 1);
      window.localStorage.setItem("crmDataTable", JSON.stringify(crmDataTable));
    }
  }

  document.getElementById("resDiv").style.display = "unset";
  document.getElementById("resDiv").innerHTML = "<div class='alert alert-primary alert-dismissible alertar-media-screen' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Fechar'> <span aria-hidden='true'>&times;</span> </button> <p id='res'></p>";
  document.getElementById("res").innerHTML = "Deletado com sucesso!";

  setTimeout(function(){
    window.location.reload(1);
  }, 1000);
}
// Script para realizar o carregamento de páginas/códigos externas(os)

function loadPage(href) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}

document.onload = document.getElementById('pcoded-wrapper').innerHTML = loadPage('menu.html');