// recuperation du contener div pour afficher le resultat
let resultDiv = document.getElementById('result-input');
let input = document.getElementById('input-bunker');
let b5 = {
  name:"Bunker 1",
  position:"B5",
  code:'87624851'
}
let b7 = {
  name:"Bunker 2",
  position: "B7",
  code:'97264138'
}
let f8 = {
  name:"Bunker 3",
  position: "F8",
  code:'60274513'
}
let f4 = {
  name:"Cabane 1",
  position:'F4',
  code:'27495810'
}
let h8 = {
  name:"Cabane 2",
  position: "H8",
  code:'72948531'
}
let h6 = {
  name:'Chambre',
  position: "H6",
  code:'49285463'
}
let array = [
  b5,
  b7,
  f8,
  f4,
  h8,
  h6
]



let emplacementB5 = document.getElementById('B5');
let emplacementB7 = document.getElementById('B7');
let emplacementF8 = document.getElementById('F8');
let emplacementF4 = document.getElementById('F4');
let emplacementH8 = document.getElementById('H8');
let emplacementH6 = document.getElementById('H6');
let emplacement = document.getElementsByClassName('emplacement');

function code(p){
  if (p == 0){
    emplacementB5.innerHTML = '<li id="B5" class="emplacement" onmouseover="code(0)" onmouseout="noCode(0)">' + array[p].code + '</li>';
  } else if (p == 1){
    emplacementB7.innerHTML = '<li id="B7" class="emplacement" onmouseover="code(1)" onmouseout="noCode(1)">' + array[p].code + '</li>';
  }else if (p == 2){
    emplacementF8.innerHTML = '<li id="F8" class="emplacement" onmouseover="code(2)" onmouseout="noCode(2)">' + array[p].code + '</li>';
  }else if (p == 3){
    emplacementF4.innerHTML = '<li id="F4" class="emplacement" onmouseover="code(3)" onmouseout="noCode(3)">' + array[p].code + '</li>';
  }else if (p == 4){
    emplacementH8.innerHTML = '<li id="H8" class="emplacement" onmouseover="code(4)" onmouseout="noCode(4)">' + array[p].code + '</li>';
  }else if (p == 5){
    emplacementH6.innerHTML = '<li id="H6" class="emplacement" onmouseover="code(5)" onmouseout="noCode(5)">' + array[p].code + '</li>';
  }
}
function noCode(p){
  if (p == 0){
    emplacementB5.innerHTML = '<li id="B5" class="emplacement" onmouseover="code(0)" onmouseout="noCode(0)">' + array[p].name + " <span class='position'> &nbsp; placé en " + array[p].position + ' </span></li>';
  } else if (p == 1){
    emplacementB7.innerHTML = '<li id="B7" class="emplacement onmouseover="code(1)" onmouseout="noCode(1)"">' + array[p].name + " <span class='position'> &nbsp; placé en " + array[p].position + ' </span></li>';
  }else if (p == 2){
    emplacementF8.innerHTML = '<li id="F8" class="emplacement" onmouseover="code(2)" onmouseout="noCode(2)">' + array[p].name + " <span class='position'> &nbsp; placé en " + array[p].position + ' </span></li>';
  }else if (p == 3){
    emplacementF4.innerHTML = '<li id="F4" class="emplacement" onmouseover="code(3)" onmouseout="noCode(3)">' + array[p].name + " <span class='position'> &nbsp; placé en " + array[p].position + ' </span></li>';
  }else if (p == 4){
    emplacementH8.innerHTML = '<li id="H8" class="emplacement" onmouseover="code(4)" onmouseout="noCode(4)">' + array[p].name + " <span class='position'> &nbsp; placé en " + array[p].position + ' </span></li>';
  }else if (p == 5){
    emplacementH6.innerHTML = '<li id="H6" class="emplacement" onmouseover="code(5)" onmouseout="noCode(5)">' + array[p].name + " <span class='position'> &nbsp; placé en " + array[p].position + ' </span></li>';
  }
}