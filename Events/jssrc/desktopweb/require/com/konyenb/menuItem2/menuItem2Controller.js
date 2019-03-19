define('com/konyenb/menuItem2/usermenuItem2Controller',[],function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._selectedFlex = this.view.flexAllNewEvent;
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        setSelectedFlex: function(selectedId) {
            try {
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
                        this._selectedFlex = this.view.flxManageUser;
                        break;
                    default:
                        kony.print("Not Valid");
                }
            } catch (error) {
                kony.print("Menu Item Controller" + JSON.stringify(error));
            }
        },
        onMenuClick: function() {
            try {
                var selectedRowIndex = this.view.SegOptions.selectedRowIndex;
                alert(selectedRowIndex);
            } catch (error) {
                kony.print("Menu Item Controller" + JSON.stringify(error));
            }
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
define('com/konyenb/menuItem2/menuItem2ControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flexAllNewEvent **/
    AS_FlexContainer_g3c2f295ce5f45d6837adb74d3322a13: function AS_FlexContainer_g3c2f295ce5f45d6837adb74d3322a13(eventobject) {
        var self = this;
        this.getEvents();
    },
    /** onClick defined for flxCreateNewEvent **/
    AS_FlexContainer_c90d67ceb09b4c5091b773a1d7546c45: function AS_FlexContainer_c90d67ceb09b4c5091b773a1d7546c45(eventobject) {
        var self = this;
        this.createEvent();
    },
    /** onClick defined for flxManageUser **/
    AS_FlexContainer_d1a8395238fa405c8a9382c15d37ba29: function AS_FlexContainer_d1a8395238fa405c8a9382c15d37ba29(eventobject) {
        var self = this;
        this.manageUser();
    },
    /** onClick defined for flxNotification **/
    AS_FlexContainer_j64fb94c3192439485d659218f96b214: function AS_FlexContainer_j64fb94c3192439485d659218f96b214(eventobject) {
        var self = this;
        this.getNotification();
    },
    /** onClick defined for flxMyCalendar **/
    AS_FlexContainer_b18cd7c715a0419fa5def15528eb3f51: function AS_FlexContainer_b18cd7c715a0419fa5def15528eb3f51(eventobject) {
        var self = this;
        this.getMyCalendar();
    },
    /** onClick defined for flxSetting **/
    AS_FlexContainer_i147b740346b4812948872c3910b1502: function AS_FlexContainer_i147b740346b4812948872c3910b1502(eventobject) {
        var self = this;
        this.getSettings();
    }
});
define('com/konyenb/menuItem2/menuItem2Controller',["com/konyenb/menuItem2/usermenuItem2Controller", "com/konyenb/menuItem2/menuItem2ControllerActions"], function() {
    var controller = require("com/konyenb/menuItem2/usermenuItem2Controller");
    var actions = require("com/konyenb/menuItem2/menuItem2ControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "option1Image", function(val) {
            this.view.imgAllNewEvent.isVisible = val;
        });
        defineGetter(this, "option1Image", function() {
            return this.view.imgAllNewEvent.isVisible;
        });
        defineSetter(this, "option1Text", function(val) {
            this.view.lblAllEvent.text = val;
        });
        defineGetter(this, "option1Text", function() {
            return this.view.lblAllEvent.text;
        });
        defineSetter(this, "option2Image", function(val) {
            this.view.imgCreateNewEvent.isVisible = val;
        });
        defineGetter(this, "option2Image", function() {
            return this.view.imgCreateNewEvent.isVisible;
        });
        defineSetter(this, "option2Text", function(val) {
            this.view.lblCreateNewEvent.text = val;
        });
        defineGetter(this, "option2Text", function() {
            return this.view.lblCreateNewEvent.text;
        });
        defineSetter(this, "option3Image", function(val) {
            this.view.imgManageUser.isVisible = val;
        });
        defineGetter(this, "option3Image", function() {
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
