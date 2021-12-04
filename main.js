//Hamburger Button
const dropdownBtn = document.querySelector('.dropdown');
const topNav = document.querySelector('.topNav');
const about = document.querySelector('.aboutMe');
const test = document.querySelector('.test')

aboutMeShow = false;

let dropdownOpen = false;
dropdownBtn.addEventListener('click', ()=>{
    if (!dropdownOpen){
        dropdownBtn.classList.add('open');
        topNav.classList.add('open');
        dropdownOpen = true;
    } else {
        dropdownBtn.classList.remove('open');
        topNav.classList.remove('open');
        dropdownOpen = false;
    }
})

window.addEventListener('scroll', function(){

    var yVal = window.scrollY;

    if (yVal > 300 && !aboutMeShow){
        about.animate([
            {opacity: 0}, 
            {opacity: 1}
          ], { 
            easing: "ease-in-out",
            duration: 1000,
            iterations: 1

        });
        about.style.opacity = 1;
        aboutMeShow = true;
    }
})