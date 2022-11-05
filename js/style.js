let navbtn = document.querySelector('.toggle-btn');
let navlinks = document.querySelector('.navlinks');


navbtn.addEventListener('click',function(){
    navlinks.classList.toggle('active');

    
})




$('#slider').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    autoplay:true,
    setTimeout:1000,
    responsive:{
    0:{
       items:1
    },
    600:{
       items:2
    },
    1000:{
       items:4
    }
    }
    })


   //  love color chnag

   let love = document.querySelector('.love');

   love.addEventListener('click',()=>{
     love.classList.toggle('click')
   })