define(function() {
    var controller = require("com/konyenb/menuItem/usermenuItemController");
    var actions = require("com/konyenb/menuItem/menuItemControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "username", function(val) {
            this.view.lblUserName.text = val;
        });
        defineGetter(this, "username", function() {
            return this.view.lblUserName.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});