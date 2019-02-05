define("userflxSegSpeakerRootController", {
    //Type your controller code here 
});
define("flxSegSpeakerRootControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSegSpeakerRootController", ["userflxSegSpeakerRootController", "flxSegSpeakerRootControllerActions"], function() {
    var controller = require("userflxSegSpeakerRootController");
    var controllerActions = ["flxSegSpeakerRootControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
