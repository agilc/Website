document.addEventListener("DOMContentLoaded", function(event) {

    var app = document.getElementById('running_text');

    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString('I am Agil C')
      .pauseFor(2500)
      .deleteChars(6)
      .typeString('a Full Stack Engineer!')
      .pauseFor(2500)
      // .deleteChars(7)
      // .typeString('<strong>altered!</strong>')
      // .pauseFor(2500)
      .start();

    $('.scroll-down-arrow').on("click", function(){
        const elmnt = document.getElementById("blogs");
        elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    $('.left-more-icon').on("click", function(e){
        $('.sidebar-wrapper').toggle();
        e.stopPropagation();
    });

    $('.nav-links span').on("click", function(){
        $('.sidebar-wrapper').toggle();
    });

    $('#home').on("click", function(){
        $('.sidebar-wrapper').hide();
    });

})