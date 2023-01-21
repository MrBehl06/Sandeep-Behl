//Header-Texting Start
const contents = ["Developer","Designer", "Programmer" ];
const headerText = document.querySelector('.header-text');
let hamger = document.querySelector('.humger');

let times = document.querySelector('.times');

let mobileNav = document.querySelector('.mobile-nav');


hamger.addEventListener('click',function(){
    mobileNav.classList.add("open");
    document.body.style.overflow ="hidden";
  });
  
  times.addEventListener('click',function(){
      mobileNav.classList.remove("open");
      document.body.style.overflow ="auto";
  });

headerText.addEventListener('mouseover',function(){
   const randomNumber = getrandomNumber();
   headerText.textContent = contents[randomNumber];
   
});
function getrandomNumber(){
    return Math.floor(Math.random()*contents.length);
}
//Header-Texting End


