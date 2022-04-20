window.onload = function() {

   const preloader = document.querySelector('.preloader');
   setTimeout(function(){
      preloader.classList.add('hide');
   },3000);
    
    var menuButton = document.querySelector('.menu-btn');
    var navbar = document.querySelector('.navbar');
    
    menuButton.addEventListener('click', toggleNav);
        
    function toggleNav() {
        navbar.classList.toggle('open');
        menuButton.classList.toggle('translate');
    }

    document.addEventListener('click', function(s) {
        if(s.target.closest('.nav-item')) {
           toggleNav();
        }
    });

    

}
