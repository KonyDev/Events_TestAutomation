define(function() {
    var controller = require("com/konyenb/eventpreview/usereventpreviewController");
    var actions = require("com/konyenb/eventpreview/eventpreviewControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onPrevBack_c30194728dc24fd0b83c3685661b3346 = function() {
        if (this.onPrevBack) {
            this.onPrevBack.apply(this, arguments);
        }
    }
    return controller;
});