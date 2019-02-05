define("com/konyenb/createnewevent/usercreateneweventController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        createNewEvent: function() {
            try {
                if (this.onCreateEventClick !== null && this.onCreateEventClick !== undefined) {
                    this.onCreateEventClick();
                }
            } catch (excp) {
                kony.print("excp: " + excp.message);
            }
        },
    };
});
define("com/konyenb/createnewevent/createneweventControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchEnd defined for createnewevent **/
    AS_FlexContainer_g33b3b940cff4a7cafccfcbc8fce5868: function AS_FlexContainer_g33b3b940cff4a7cafccfcbc8fce5868(eventobject, x, y) {
        var self = this;
        this.createNewEvent();
    },
    /** onClick defined for createnewevent **/
    AS_FlexContainer_fa7c1077ef1149eca8587345b94c706d: function AS_FlexContainer_fa7c1077ef1149eca8587345b94c706d(eventobject) {
        var self = this;
        this.createNewEvent();
    }
});
define("com/konyenb/createnewevent/createneweventController", ["com/konyenb/createnewevent/usercreateneweventController", "com/konyenb/createnewevent/createneweventControllerActions"], function() {
    var controller = require("com/konyenb/createnewevent/usercreateneweventController");
    var actions = require("com/konyenb/createnewevent/createneweventControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
