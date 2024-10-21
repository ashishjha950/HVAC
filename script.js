function showSidebar() {
  document.querySelector(".sidebarfull").style.display = "block";
  document.querySelector(".sidebarfull").classList.add('slideLeft');
  document.querySelector(".sidebarfull").classList.remove('slideRight');
  document.body.style.overflow = "hidden";
}

function hideSidebar() {
  setTimeout(()=>{
    document.querySelector(".sidebarfull").style.display = "none";
  },1500);
  document.body.style.overflow = "scroll";
  document.body.style.overflowX = "hidden";
  document.querySelector(".sidebarfull").classList.remove('slideLeft');
  document.querySelector(".sidebarfull").classList.add('slideRight');
}

document.querySelector('.mob-btn-dropdown').addEventListener('click',()=>{
  document.querySelector('.mob-dropdown').classList.toggle('text-grow');
});

let form = document.querySelectorAll(".hero-form-car-input input[type=text]");
function extendpaddbuy() {
  document.querySelector("#carBuy").style.paddingBottom = "20px";
  document.querySelector("#carRental").style.paddingBottom = "10px";
  document.querySelector(".hero-form-car-head h2").innerHTML =
    "Buy Your Dream Car";
  form.forEach((value) => {
    value.value = "";
  });
}
function extendpaddrent() {
  document.querySelector("#carRental").style.paddingBottom = "20px";
  document.querySelector("#carBuy").style.paddingBottom = "10px";
  document.querySelector(".hero-form-car-head h2").innerHTML =
    "Find Your Dream Car";
  form.forEach((value) => {
    value.value = "";
  });
}

function validateHeroForm(){
  form.forEach((value) => {
    if(value.value === ''){
      value.placeholder = 'Input cannot be blanked';
    }
    if(isNaN(value.value) || isNaN(value.value)){
      alert('Invalid Input');
    }
  });
  
}

function validateContactForm(){

  if(!isNaN(document.querySelector('.detail1').childNodes[1].value)){
    alert('Invalid Input');
    document.querySelector('.detail1').childNodes[1].value = '';
  }

  ValidateEmail(document.querySelector('.detail1').childNodes[3].value);

}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

document.querySelector('.pg-pages').addEventListener('mouseover',()=>{
  document.querySelector('.dropDown').classList.add('slowblur');
});

function aboutOpen(){
  window.open("about.html")
}
function carOpen(){
  window.open("cars.html")
  
}
function blogOpen(){
  window.open("blog.html")

}

let sale = document.querySelectorAll(".blog-car-list li");
sale[1].addEventListener("click", () => {
  sale[0].classList.remove("highlight");
  sale[1].classList.add("highlight");
});
sale[0].addEventListener("click", () => {
  sale[1].classList.remove("highlight");
  sale[0].classList.add("highlight");
});

// let num = document.getElementsByClassName('num');
// console.log(num.data);
