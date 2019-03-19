define("userflexMainSearchTempController", {
    //Type your controller code here 
});
define("flexMainSearchTempControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flexMainSearchTempController", ["userflexMainSearchTempController", "flexMainSearchTempControllerActions"], function() {
    var controller = require("userflexMainSearchTempController");
    var controllerActions = ["flexMainSearchTempControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
