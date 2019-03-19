define('com/konyenb/menuItem/usermenuItemController',[],function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._selectedFlex = this.view.flexAllNewEvent;
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        setSelectedFlex: function(selectedId) {
            switch (selectedId) {
                case 1:
                    this._selectedFlex.skin = "slFbox";
                    this.view.flexAllNewEvent.skin = "sknFlxMenuClick";
                    this._selectedFlex = this.view.flexAllNewEvent;
                    break;
                case 2:
                    this._selectedFlex.skin = "slFbox";
                    this.view.flxCreateNewEvent.skin = "sknFlxMenuClick";
                    this._selectedFlex = this.view.flxCreateNewEvent;
                    break;
                case 3:
                    this._selectedFlex.skin = "slFbox";
                    this.view.flxManageUser.skin = "sknFlxMenuClick";
                    this._selectedFlex = this.view.flxCreateNewEvent;
                    break;
                default:
                    kony.print("Not Valid");
            }
        },
        onMenuClick: function() {
            var selectedRowIndex = this.view.SegOptions.selectedRowIndex;
            alert(selectedRowIndex);
        },
        getEvents: function() {
            this._selectedFlex.skin = "slFbox";
            this.view.flexAllNewEvent.skin = "sknFlxMenuClick";
            this._selectedFlex = this.view.flexAllNewEvent;
            try {
                if (this.onAllEventClick !== null && this.onAllEventClick !== undefined) {
                    this.onAllEventClick();
                }
            } catch (excp) {
                kony.print("excp: " + excp.message);
            }
        },
        createEvent: function() {
            this._selectedFlex.skin = "slFbox";
            this.view.flxCreateNewEvent.skin = "sknFlxMenuClick";
            this._selectedFlex = this.view.flxCreateNewEvent;
            try {
                if (this.onCreateEventClick !== null && this.onCreateEventClick !== undefined) {
                    this.onCreateEventClick();
                }
            } catch (excp) {
                kony.print("excp: " + excp.message);
            }
        },
        manageUser: function() {
            this._selectedFlex.skin = "slFbox";
            this.view.flxManageUser.skin = "sknFlxMenuClick";
            this._selectedFlex = this.view.flxManageUser;
            try {
                if (this.onManageUserClick !== null && this.onManageUserClick !== undefined) {
                    this.onManageUserClick();
                }
            } catch (excp) {
                kony.print("excp: " + excp.message);
            }
        },
        getNotification: function() {
            this._selectedFlex.skin = "slFbox";
            this.view.flxNotification.skin = "sknFlxMenuClick";
            this._selectedFlex = this.view.flxNotification;
            try {
                if (this.onGetNotificationClick !== null && this.onGetNotificationClick !== undefined) {
                    this.onGetNotificationClick();
                }
            } catch (excp) {
                kony.print("excp: " + excp.message);
            }
        },
        getMyCalendar: function() {
            this._selectedFlex.skin = "slFbox";
            this.view.flxMyCalendar.skin = "sknFlxMenuClick";
            this._selectedFlex = this.view.flxMyCalendar;
            try {
                if (this.onGetMyCalendar !== null && this.onGetMyCalendar !== undefined) {
                    this.onGetMyCalendar();
                }
            } catch (excp) {
                kony.print("excp: " + excp.message);
            }
        },
        getSettings: function() {
            this._selectedFlex.skin = "slFbox";
            this.view.flxSetting.skin = "sknFlxMenuClick";
            this._selectedFlex = this.view.flxSetting;
            try {
                if (this.onGetSetting !== null && this.onGetSetting !== undefined) {
                    this.onGetSetting();
                }
            } catch (excp) {
                kony.print("excp: " + excp.message);
            }
        }
    };
});
define('com/konyenb/menuItem/menuItemControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flexAllNewEvent **/
    AS_FlexContainer_b70c6ced81c74b73a8760fb4a941a5b3: function AS_FlexContainer_b70c6ced81c74b73a8760fb4a941a5b3(eventobject) {
        var self = this;
        this.getEvents();
    },
    /** onClick defined for flxCreateNewEvent **/
    AS_FlexContainer_e03a6b839a6e4fc989650b6cc3a71285: function AS_FlexContainer_e03a6b839a6e4fc989650b6cc3a71285(eventobject) {
        var self = this;
        this.createEvent();
    },
    /** onClick defined for flxManageUser **/
    AS_FlexContainer_h279a49476064771b8b8c16fb99bad5a: function AS_FlexContainer_h279a49476064771b8b8c16fb99bad5a(eventobject) {
        var self = this;
        this.manageUser();
    },
    /** onClick defined for flxNotification **/
    AS_FlexContainer_fa11dc763958474b8f16769d311d8b44: function AS_FlexContainer_fa11dc763958474b8f16769d311d8b44(eventobject) {
        var self = this;
        this.getNotification();
    },
    /** onClick defined for flxMyCalendar **/
    AS_FlexContainer_fb4d4a906f1643dcaaeae163a6dbb764: function AS_FlexContainer_fb4d4a906f1643dcaaeae163a6dbb764(eventobject) {
        var self = this;
        this.getMyCalendar();
    },
    /** onClick defined for flxSetting **/
    AS_FlexContainer_c6e8a61598c0470b8ca88d5d672255ab: function AS_FlexContainer_c6e8a61598c0470b8ca88d5d672255ab(eventobject) {
        var self = this;
        this.getSettings();
    }
});
define('com/konyenb/menuItem/menuItemController',["com/konyenb/menuItem/usermenuItemController", "com/konyenb/menuItem/menuItemControllerActions"], function() {
    var controller = require("com/konyenb/menuItem/usermenuItemController");
    var actions = require("com/konyenb/menuItem/menuItemControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "option1ImageVisibility", function(val) {
            this.view.imgAllNewEvent.isVisible = val;
        });
        defineGetter(this, "option1ImageVisibility", function() {
            return this.view.imgAllNewEvent.isVisible;
        });
        defineSetter(this, "option1Text", function(val) {
            this.view.lblAllEvent.text = val;
        });
        defineGetter(this, "option1Text", function() {
            return this.view.lblAllEvent.text;
        });
        defineSetter(this, "option2ImageVisibility", function(val) {
            this.view.imgCreateNewEvent.isVisible = val;
        });
        defineGetter(this, "option2ImageVisibility", function() {
            return this.view.imgCreateNewEvent.isVisible;
        });
        defineSetter(this, "option2Text", function(val) {
            this.view.lblCreateNewEvent.text = val;
        });
        defineGetter(this, "option2Text", function() {
            return this.view.lblCreateNewEvent.text;
        });
        defineSetter(this, "option3ImageVisibility", function(val) {
            this.view.imgManageUser.isVisible = val;
        });
        defineGetter(this, "option3ImageVisibility", function() {
            return this.view.imgManageUser.isVisible;
        });
        defineSetter(this, "option3Text", function(val) {
            this.view.lblManageUser.text = val;
        });
        defineGetter(this, "option3Text", function() {
            return this.view.lblManageUser.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
