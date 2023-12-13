const navbar = document.getElementById('navbar');
window.onscroll=function () {
   navFuction()
}
function navFuction() {
    var scrollTop = window.scrollY
     if (scrollTop>20) {
        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')
    }
}




const scrollRevealOps={
    distance:'50px',
    origin:'bottom',
    duration:1000
}
const scrollRevealTrans={
    distance: '0px',
    opacity: 0,
    duration:1000
}
ScrollReveal().reveal('.logo-link',{...scrollRevealTrans,delay:500});

ScrollReveal().reveal('.home h1',scrollRevealOps);
ScrollReveal().reveal('.home .home-btns',{...scrollRevealOps,delay:500});


ScrollReveal().reveal('.image',{...scrollRevealTrans,delay:500});
ScrollReveal().reveal('.heading .subtitle',{...scrollRevealOps,delay:500});
ScrollReveal().reveal('.heading .title',{...scrollRevealOps,delay:1000});
ScrollReveal().reveal('section p',{...scrollRevealOps,delay:1500});

ScrollReveal().reveal('section .item',{...scrollRevealTrans,delay:200});
ScrollReveal().reveal('section .card',{...scrollRevealTrans,delay:500});
ScrollReveal().reveal('section .user',{...scrollRevealTrans,delay:500});
ScrollReveal().reveal('section input',{...scrollRevealOps,delay:1000});
ScrollReveal().reveal('section textarea',{...scrollRevealOps,delay:1000});
ScrollReveal().reveal('section button',{...scrollRevealOps,delay:1500});
ScrollReveal().reveal('.icon ',{...scrollRevealOps,delay:1500});
ScrollReveal().reveal('i ',{...scrollRevealOps,delay:500});
