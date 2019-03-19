define('com/konyenb/SessionFooter/userSessionFooterController',[],function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});
define('com/konyenb/SessionFooter/SessionFooterControllerActions',{
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define('com/konyenb/SessionFooter/SessionFooterController',["com/konyenb/SessionFooter/userSessionFooterController", "com/konyenb/SessionFooter/SessionFooterControllerActions"], function() {
    var controller = require("com/konyenb/SessionFooter/userSessionFooterController");
    var actions = require("com/konyenb/SessionFooter/SessionFooterControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "isEditVisible", function(val) {
            this.view.btnEditSEssion.isVisible = val;
        });
        defineGetter(this, "isEditVisible", function() {
            return this.view.btnEditSEssion.isVisible;
        });
        defineSetter(this, "isAddVisible", function(val) {
            this.view.btnAddSession.isVisible = val;
        });
        defineGetter(this, "isAddVisible", function() {
            return this.view.btnAddSession.isVisible;
        });
        defineSetter(this, "isDelVisible", function(val) {
            this.view.btnDelSession.isVisible = val;
        });
        defineGetter(this, "isDelVisible", function() {
            return this.view.btnDelSession.isVisible;
        });
        defineSetter(this, "skin1", function(val) {
            this.view.flexFooter.skin = val;
        });
        defineGetter(this, "skin1", function() {
            return this.view.flexFooter.skin;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_btnAddOnclick_j98c6a298dc7431394e0173fec192309 = function() {
        if (this.btnAddOnclick) {
            this.btnAddOnclick.apply(this, arguments);
        }
    }
    controller.AS_btnEditOnclick_ifa87cc38e9f47f994889f841a3fa585 = function() {
        if (this.btnEditOnclick) {
            this.btnEditOnclick.apply(this, arguments);
        }
    }
    controller.AS_btnDelOnclick_eb88280b121a4376ae1b36c24ab9afd1 = function() {
        if (this.btnDelOnclick) {
            this.btnDelOnclick.apply(this, arguments);
        }
    }
    return controller;
});
