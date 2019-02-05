define("userflexImageSetController", {
    //     onViewCreated  : function(){
    //       //alert("in OnviewCreated");
    //       this.view.addGestureRecognizer(2, {
    //             "fingers": 1
    //         }, this.swipeChildCallback);  
    //       alert("Gesture success");
    //     },
    //   swipeChildCallback : function(widgetRef, gestureInfo, context){
    //     alert("in Swipe call back");
    //     this.executeOnParent("swipeCallback",gestureInfo);
    //   }
});
define("flexImageSetControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flexImageSetController", ["userflexImageSetController", "flexImageSetControllerActions"], function() {
    var controller = require("userflexImageSetController");
    var controllerActions = ["flexImageSetControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
