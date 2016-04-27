$(document).ready(function() {
  window.dancers = [];
  window.solidDancers = [];
  window.playing = null;

  // var sky = new DynamicBG();
  //$('body').append(sky.$node);

  var numAudio = '0';
  // var audioTag = '<audio>'+
  //   '<source src=\"http://www.jewelbeat.com/free/free-sound-effects/musical%20effects/'+
  //   'Synth%20Choir%20-%2'+ numAudio +'.mp3\"></source></audio>';
  for (var i = 1; i < 9; i++){
    numAudio = '0' + i.toString();
    var audioTag = '<audio class=\"sounds\">'+
    '<source src=\"http://www.jewelbeat.com/free/free-sound-effects/musical%20effects/'+
    'Synth%20Choir%20-%2'+ numAudio +'.mp3\"></source></audio>';
    var audioNode = $(audioTag);
    $('body').append(audioNode);
  }

  var conductor = new ConductorDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 50
    );
    window.dancers.push(conductor);
    $('body').append(conductor.$node);


  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 50
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    // line up 
    var horizPos = $("body").width() / window.dancers.length;
    var mid = $("body").height()/2;
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      dancer.setPosition(mid, i * horizPos);
    }
  });


});

