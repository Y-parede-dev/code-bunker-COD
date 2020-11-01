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
  name:'Cabane',
  position: "H6",
  code:'49285463'
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
    result.innerHTML = "<p class='result'>Le code du " + f4.name + " placé en " + f4.position+ " est: <span class='span-result'>"+  f4.code+"</span></p>";
    resultDiv.appendChild(result)
    console.log(result)
  }else if(e.target.value == "h8" || e.target.value == "H8"){
    let result = document.createElement('p');
    result.innerHTML = "<p class='result'>Le code du " + h8.name + " placé en " + h8.position+ " est: <span class='span-result'>"+  h8.code+"</span></p>";
    resultDiv.appendChild(result)
    console.log(result)
  }else if(e.target.value == "h6" || e.target.value == "H6"){
    let result = document.createElement('p');
    result.innerHTML = "<p class='result'>Le code du " + h6.name + " placé en " + h6.position+ " est: <span class='span-result'>"+  h6.code+"</span></p>";
    resultDiv.appendChild(result)
    console.log(result)
  }
});

//anuler touche entre (code obscur)
