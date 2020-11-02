window.onscroll = function(){
  myFunction()
}
document.getElementById('abt').addEventListener('click', ()=>{
document.getElementById("abt").style.borderBottom = "2px solid green";
document.getElementById("home").style.borderBottom = "none";
document.getElementById("cont").style.borderBottom = "none";


})

function myFunction(){
  let sticky = document.getElementById('main').offsetTop
  if(window.pageYOffset > sticky){
    document.getElementById('main').classList.add('sticky')
  }
  else{
    document.getElementById('main').classList.remove('sticky')
  }
}
window.addEventListener('load', showBorder)
function showBorder(){
document.getElementById('home').style.borderBottom ="2px solid green"
}

document.getElementById('cont').addEventListener('click', showAbt)
function showAbt(e){
document.getElementById("cont").style.borderBottom = "2px solid green";
document.getElementById("home").style.borderBottom = "none";

document.getElementById('home').addEventListener('click', () =>{
document.getElementById("home").style.borderBottom = "2px solid green";
document.getElementById("home").style.transition = "all 0.3s ease-in";

document.getElementById("cont").style.borderBottom = "none";

})

}