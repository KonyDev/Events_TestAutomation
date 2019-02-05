define("com/konyenb/dashboard/userdashboardController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});
define("com/konyenb/dashboard/dashboardControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/konyenb/dashboard/dashboardController", ["com/konyenb/dashboard/userdashboardController", "com/konyenb/dashboard/dashboardControllerActions"], function() {
    var controller = require("com/konyenb/dashboard/userdashboardController");
    var actions = require("com/konyenb/dashboard/dashboardControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "text", function(val) {
            this.view.lblUserName.text = val;
        });
        defineGetter(this, "text", function() {
            return this.view.lblUserName.text;
        });
        defineSetter(this, "iconVisibility", function(val) {
            this.view.flxMenuIcon.isVisible = val;
        });
        defineGetter(this, "iconVisibility", function() {
            return this.view.flxMenuIcon.isVisible;
        });
        defineSetter(this, "Title", function(val) {
            this.view.lblDashboard.text = val;
        });
        defineGetter(this, "Title", function() {
            return this.view.lblDashboard.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
