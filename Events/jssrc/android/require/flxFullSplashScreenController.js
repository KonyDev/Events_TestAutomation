define("userflxFullSplashScreenController", {
    //Type your controller code here 
});
define("flxFullSplashScreenControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSkip **/
    AS_Button_j7b99cd8021441259c1025ed996a2c91: function AS_Button_j7b99cd8021441259c1025ed996a2c91(eventobject, context) {
        var self = this;
        kony.store.setItem("isSplashNeeded", "false");
        var nav = new kony.mvc.Navigation("frmEventsLanding");
        nav.navigate();
    }
});
define("flxFullSplashScreenController", ["userflxFullSplashScreenController", "flxFullSplashScreenControllerActions"], function() {
    var controller = require("userflxFullSplashScreenController");
    var controllerActions = ["flxFullSplashScreenControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
