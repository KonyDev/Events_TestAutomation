define("userfrmProfileController", {
    /**
     * @function onNavigate
     * @description This function is used to populate the data to the widget while navigating to this form.
     * @private
     */
    onNavigate: function() {
        try {
            var profileData = JSON.parse(kony.store.getItem("profile"));
            this.view.lblFName.text = profileData.first_name;
            this.view.lblLName.text = profileData.last_name;
            this.view.lblEmail.text = profileData.mail;
            this.view.lblName.text = profileData.first_name + " " + profileData.last_name;
            if (profileData.profile !== undefined) {
                this.view.imgProfile.src = profileData.profile;
            } else {
                this.view.imgProfile.src = "profile.png";
            }
        } catch (err) {
            kony.print("Frm Profile Controller" + JSON.stringify(err));
        }
    }
});
define("frmProfileControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flexSearch **/
    AS_FlexContainer_b35cf790d7e24ac682d237ff4755f751: function AS_FlexContainer_b35cf790d7e24ac682d237ff4755f751(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSearch");
        ntf.navigate();
    },
    /** onClick defined for btnBack **/
    AS_Button_b6755a6f7e2146dba820dea7c44133d5: function AS_Button_b6755a6f7e2146dba820dea7c44133d5(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmEventsLanding");
        ntf.navigate({
            "origin": "profile"
        });
    },
    /** onClick defined for flexBack **/
    AS_FlexContainer_b8357bb55e274a478a4721776c8d142c: function AS_FlexContainer_b8357bb55e274a478a4721776c8d142c(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmEventsLanding");
        ntf.navigate({
            "origin": "profile"
        });
    }
});
define("frmProfileController", ["userfrmProfileController", "frmProfileControllerActions"], function() {
    var controller = require("userfrmProfileController");
    var controllerActions = ["frmProfileControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
