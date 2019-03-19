define("userflxMainSchedularController", {});
define("flxMainSchedularControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxMainSchedularController", ["userflxMainSchedularController", "flxMainSchedularControllerActions"], function() {
    var controller = require("userflxMainSchedularController");
    var controllerActions = ["flxMainSchedularControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
