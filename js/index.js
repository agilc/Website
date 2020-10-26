document.addEventListener("DOMContentLoaded", function(event) {

  var app = document.getElementById('root');

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

})