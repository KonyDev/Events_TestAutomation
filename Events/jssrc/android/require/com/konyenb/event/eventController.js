define("com/konyenb/event/usereventController", function() {
    var konyLoggerModule = require('com/konyenb/event/konyLogger');
    var konysa = {};
    konysa.logger = new konyLoggerModule("Event detail Component");
    return {
        /**
         * @function constructor
         * @private
         * @param {Object} baseConfig
         * @param {Object} layoutConfig
         * @param {Object} pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._event = null;
        },
        //Logic for getters/setters of custom properties
        /**
         * @function initGettersSetters
         * @description function to initialize the init getter setter of the component.
         * @private
         */
        initGettersSetters: function() {
            konysa.logger.trace("----------Entering initGettersSetters Function---------", konysa.logger.FUNCTION_ENTRY);
        },
        /**
         * @function setEvent
         * @description function to initialize the init component with the provided event data.
         * @private
         * @param{JSON} event
         */
        setEvent: function(event) {
            try {
                konysa.logger.trace("----------Entering setEvent function---------", konysa.logger.FUNCTION_ENTRY);
                if (event === null || event === undefined) {
                    alert("please provide event detail!");
                    return;
                }
                this._event = event;
                this.view.imgEventLogo.src = event["event_banners"][0]["banner_url"];
                this.view.lblEventTitle.text = event["name"];
                this.view.lblEventDescCategoryText.text = event["event_category"];
                this.view.lblEventDescDateText.text = event["event_date"];
                var location = "Online";
                if (event["location"][0]["addressLine1"] !== undefined && (event["location"][0]["addressLine1"]).trim() !== "") {
                    location = event["location"][0]["addressLine1"];
                    if (event["location"][0]["cityname"] !== undefined && ((event["location"][0]["cityname"]).trim() !== "")) {
                        location = location + ", " + event["location"][0]["cityname"];
                    }
                } else {
                    if (event["location"][0]["cityname"] !== undefined && ((event["location"][0]["cityname"]).trim() !== "")) {
                        location = event["location"][0]["cityname"];
                    }
                }
                this.view.lblEventDescLocationText.text = location;
                this.setImages(event["event_images"]);
                konysa.logger.trace("----------Exiting setEvent function---------", konysa.logger.FUNCTION_ENTRY);
            } catch (error) {
                kony.print("Event Template Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function setImages
         * @description function to add images to the event.
         * @private
         * @param{JSONArray} imageList
         */
        setImages: function(imageList) {
            try {
                this.view.flxScImageGallery.removeAll();
                if (imageList === null || imageList === undefined) {
                    return;
                }
                var imageListLength = imageList.length;
                var flxItem, img;
                for (var i = 0; i < imageListLength; i++) {
                    if (i > 5) {
                        return;
                    }
                    flxItem = new kony.ui.FlexContainer({
                        "autogrowMode": kony.flex.AUTOGROW_NONE,
                        "centerY": "50%",
                        "clipBounds": true,
                        "height": "40dp",
                        "id": "flxItem" + i,
                        "isVisible": true,
                        "layoutType": kony.flex.FREE_FORM,
                        "left": i === 0 ? "0dp" : "5dp",
                        "skin": "sknFlxEventRoot",
                        "top": "0dp",
                        "width": "40dp",
                        "zIndex": 1
                    }, {}, {});
                    flxItem.setDefaultUnit(kony.flex.DP);
                    var img = new kony.ui.Image2({
                        "centerX": "50%",
                        "centerY": "50%",
                        "height": "40dp",
                        "id": "img" + i,
                        "isVisible": true,
                        "skin": "slImage",
                        "src": imageList[i]["image_url"],
                        "width": "40dp",
                        "zIndex": 1
                    }, {
                        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                        "padding": [0, 0, 0, 0],
                        "paddingInPixel": false
                    }, {});
                    flxItem.add(img);
                    this.view.flxScImageGallery.add(flxItem);
                }
            } catch (error) {
                kony.print("Event Template Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function onRemoveHandler
         * @description function to trigger the onRemove event.
         * @private
         */
        onRemoveHandler: function() {
            try {
                if (this.onRemove !== null && this.onRemove !== undefined) {
                    this.onRemove(this._event);
                }
            } catch (error) {
                kony.print("Event Template Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function onEditHandler
         * @description function to trigger the onEdit event.
         * @private
         */
        onEditHandler: function() {
            try {
                if (this.onEdit !== null && this.onEdit !== undefined) {
                    this.onEdit(this._event);
                }
            } catch (error) {
                kony.print("Event Template Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function onViewHandler
         * @description function to trigger the onView event.
         * @private
         */
        onViewHandler: function() {
            try {
                if (this.onView !== null && this.onView !== undefined) {
                    this.onView(this._event);
                }
            } catch (error) {
                kony.print("Event Template Controller" + JSON.stringify(error));
            }
        },
    };
});
define("com/konyenb/event/eventControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBannerContainer **/
    AS_FlexContainer_caccfc41878d41edb99ad5315af8d7b8: function AS_FlexContainer_caccfc41878d41edb99ad5315af8d7b8(eventobject) {
        var self = this;
        this.onViewHandler();
    },
    /** onClick defined for btnRemove **/
    AS_Button_e873b0b9e6ee4f2e95d34b1fd1d69980: function AS_Button_e873b0b9e6ee4f2e95d34b1fd1d69980(eventobject) {
        var self = this;
        this.onRemoveHandler();
    },
    /** onClick defined for btnEdit **/
    AS_Button_ae1ced44a04e45db98e67a006c9c9c2e: function AS_Button_ae1ced44a04e45db98e67a006c9c9c2e(eventobject) {
        var self = this;
        this.onEditHandler();
    }
});
define("com/konyenb/event/eventController", ["com/konyenb/event/usereventController", "com/konyenb/event/eventControllerActions"], function() {
    var controller = require("com/konyenb/event/usereventController");
    var actions = require("com/konyenb/event/eventControllerActions");
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
