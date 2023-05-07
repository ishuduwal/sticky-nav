window.addEventListener('scroll', function(){
    const navbar = document.getElementById('navbar');
    if(this.window.pageYOffset >= 651){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
})