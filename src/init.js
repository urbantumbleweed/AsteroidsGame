$(document).ready(function() {
  window.flyingObjects = [];

  $(".addFlyingObjectButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-flyingObject
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-flyingObject-maker-function-name" attribute of a
     * class="addFlyingObjectButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the flyingObject.
     */

    /* flyingObjectMakerFunctionName is a string which must match
     * one of the flyingObject maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var flyingObjectMakerFunctionName = $(this).data("flying-object-maker-function-name");

    // get the maker function for the kind of flyingObject we're supposed to make
    var flyingObjectMakerFunction = window[flyingObjectMakerFunctionName];

    // make a flyingObject with a random position

    var flyingObject = new flyingObjectMakerFunction(
      $("body").width() * Math.random(),
      -50,
      (150 + Math.random()*100)/1000 // unit conversion to pixel per millisecond
    );

    window.flyingObjects.push(flyingObject);
    $('body').append(flyingObject.$node);

  });

  $(".lineUp").on("click", function(){
    for(var i = 0; i < window.flyingObjects.length; i++){
      window.flyingObjects[i].lineUp(i);

    }
  });

});

