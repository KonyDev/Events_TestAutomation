define("userflexSegSpeakerRootController", {
    //Type your controller code here 
});
define("flexSegSpeakerRootControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flexSegSpeakerRootController", ["userflexSegSpeakerRootController", "flexSegSpeakerRootControllerActions"], function() {
    var controller = require("userflexSegSpeakerRootController");
    var controllerActions = ["flexSegSpeakerRootControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
