$('#slider1').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav:true,
    dots:false,
    autoplay:true,
    navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>']
    
})
$('#slider2').owlCarousel({
    loop:true,
    margin:25,
    items:3,
    nav:false,
    dots:true
    
})
$('#slider3').owlCarousel({
    loop:true,
    margin:30,
    items:6,
    nav:false,
    dots:false
    
})
$('#slider4').owlCarousel({
    loop:true,
    // margin:20,
    items:3,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    center:true,
    navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>']
    
})