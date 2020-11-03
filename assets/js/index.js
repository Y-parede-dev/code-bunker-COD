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
console.log('test')
console.log(array.b7)
console.log(array[0].code)


let emplacementB5 = document.getElementById('B5');
let emplacementB7 = document.getElementById('B7');
let emplacementF8 = document.getElementById('F8');
let emplacementF4 = document.getElementById('F4');
let emplacementH8 = document.getElementById('H8');
let emplacementH6 = document.getElementById('H6');
let emplacement = document.getElementsByClassName('emplacement');

function code(p){
  if (p == 0){
    emplacementB5.innerHTML = '<li id="B5" class="emplacement">' + array[p].code + '</li>';
  } else if (p == 1){
    emplacementB7.innerHTML = '<li id="B7" class="emplacement">' + array[p].code + '</li>';
  }else if (p == 2){
    emplacementF8.innerHTML = '<li id="F8" class="emplacement">' + array[p].code + '</li>';
  }else if (p == 3){
    emplacementF6.innerHTML = '<li id="F6" class="emplacement">' + array[p].code + '</li>';
  }else if (p == 4){
    emplacementH8.innerHTML = '<li id="H8" class="emplacement">' + array[p].code + '</li>';
  }else if (p == 5){
    emplacementH6.innerHTML = '<li id="H6" class="emplacement">' + array[p].code + '</li>';
  }
}
function noCode(p){
  if (p == 0){
    emplacementB5.innerHTML = '<li id="B5" class="emplacement" onmouseover="code(0)" onmouseout="noCode(0)">' + array[p].name + " " + array[p].position + '</li>';
  } else if (p == 1){
    emplacementB7.innerHTML = '<li id="B7" class="emplacement">' + array[p].name + " " + array[p].position + '</li>';
  }else if (p == 2){
    emplacementF8.innerHTML = '<li id="F8" class="emplacement">' + array[p].name + " " + array[p].position + '</li>';
  }else if (p == 3){
    emplacementF6.innerHTML = '<li id="F6" class="emplacement">' + array[p].name + " " + array[p].position + '</li>';
  }else if (p == 4){
    emplacementH8.innerHTML = '<li id="H8" class="emplacement">' + array[p].name + " " + array[p].position + '</li>';
  }else if (p == 5){
    emplacementH6.innerHTML = '<li id="H6" class="emplacement">' + array[p].name + " " + array[p].position + '</li>';
  }
}

input.addEventListener('input', function submit(e){
    e.preventDefault();
    
  if(e.target.value == "b5" || e.target.value == "B5"){
    let result = document.createElement('p');

    result.innerHTML = "<p class='result'>Le code du "+ b5.name +" placé en "+ b5.position+ " est: <span class='span-result'>"+  b5.code+"</span></p>";

    resultDiv.appendChild(result)
    console.log(result)
  }else if(e.target.value == "b7" || e.target.value == "B7"){
    let result = document.createElement('p');
    result.innerHTML = "<p class='result'>Le code du " + b7.name + "placé en " + b7.position+ " est: <span class='span-result'>"+  b7.code+"</span></p>";
    resultDiv.appendChild(result)
    console.log(result)
  }else if(e.target.value == "f8" || e.target.value == "F8"){
    let result = document.createElement('p');
    result.innerHTML = "<p class='result'>Le code du " + f8.name + " placé en " + f8.position+ " est: <span class='span-result'>"+  f8.code+"</span></p>";
    resultDiv.appendChild(result)
    console.log(result)
  }else if(e.target.value == "f4" || e.target.value == "F4"){
    let result = document.createElement('p');
    result.innerHTML = "<p class='result'>Le code de la " + f4.name + " placé en " + f4.position+ " est: <span class='span-result'>"+  f4.code+"</span></p>";
    resultDiv.appendChild(result)
    console.log(result)
  }else if(e.target.value == "h8" || e.target.value == "H8"){
    let result = document.createElement('p');
    result.innerHTML = "<p class='result'>Le code de la " + h8.name + " placé en " + h8.position+ " est: <span class='span-result'>"+  h8.code+"</span></p>";
    resultDiv.appendChild(result)
    console.log(result)
  }else if(e.target.value == "h6" || e.target.value == "H6"){
    let result = document.createElement('p');
    result.innerHTML = "<p class='result'>Le code de la " + h6.name + " placé en " + h6.position+ " est: <span class='span-result'>"+  h6.code+"</span></p>";
    resultDiv.appendChild(result)
    console.log(result)
  }
});