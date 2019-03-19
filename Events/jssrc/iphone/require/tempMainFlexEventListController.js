define("usertempMainFlexEventListController", {
    //Type your controller code here 
    shareEvent: function(widget, context) {
        var data = context.widgetInfo.selectedRowItems[0];
        this.executeOnParent("shareEvent", data);
    }
});
define("tempMainFlexEventListControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnShare **/
    AS_Button_f62d301f917e4a19985ea1fced722ff3: function AS_Button_f62d301f917e4a19985ea1fced722ff3(eventobject, context) {
        var self = this;
        this.shareEvent(eventobject, context)
    }
});
define("tempMainFlexEventListController", ["usertempMainFlexEventListController", "tempMainFlexEventListControllerActions"], function() {
    var controller = require("usertempMainFlexEventListController");
    var controllerActions = ["tempMainFlexEventListControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
