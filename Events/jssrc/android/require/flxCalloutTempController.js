define("userflxCalloutTempController", {
    //Type your controller code here 
});
define("flxCalloutTempControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxCalloutTempController", ["userflxCalloutTempController", "flxCalloutTempControllerActions"], function() {
    var controller = require("userflxCalloutTempController");
    var controllerActions = ["flxCalloutTempControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
