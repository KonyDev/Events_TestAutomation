define("userfrmLocationController", {
    /**
     * @function onNavigate
     * @description This function is used to populate the data to the widget while navigating to this form.
     * @private
     * @param {JSON} data
     */
    onNavigate: function(data) {
        try {
            var locationList = [];
            var location = {
                "lat": data.lat,
                "lon": data.lon,
                "image": "mapsmallicon.png",
                "name": "current position",
                "desc": " ",
                "showcallout": true
            };
            location["calloutData"] = {
                "lblAdd": data.address
            }
            this.view.lblLoc.text = data.name;
            locationList.push(location);
            this.view.mapEventLoc.locationData = locationList;
        } catch (error) {
            kony.print("frm Event Location Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function navigateBack
     * @description This function is used to navigate to frmEventDetails.
     * @private
     */
    navigateBack: function() {
        try {
            var navigationObject = new kony.mvc.Navigation("frmEventDetails");
            navigationObject.navigate();
        } catch (e) {
            alert(e.message);
            kony.print(e.message);
        }
    }
});
define("frmLocationControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxClose **/
    AS_FlexContainer_ff3e76b3ac474fd88e3f30dde40054e5: function AS_FlexContainer_ff3e76b3ac474fd88e3f30dde40054e5(eventobject) {
        var self = this;
        return self.navigateBack.call(this);
    }
});
define("frmLocationController", ["userfrmLocationController", "frmLocationControllerActions"], function() {
    var controller = require("userfrmLocationController");
    var controllerActions = ["frmLocationControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
