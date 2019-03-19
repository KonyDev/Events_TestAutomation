define("userfrmImageGalleryController", {
    /**
     * @function onNavigate
     * @description This function is used to populate the data to the widget while navigating to this form.
     * @private
     * @param {JSON} data
     */
    onNavigate: function(data) {
        this.imagedata = data;
    },
    /**
     * @function navigateToFormEventDetail
     * @description This function is used to navigate to frmEventDetails.
     * @private
     */
    navigateToFormEventDetail: function() {
        try {
            var navigationObject = new kony.mvc.Navigation("frmEventDetails");
            navigationObject.navigate();
        } catch (e) {
            kony.print(e.message);
            alert(e.message);
        }
    }
});
define("frmImageGalleryControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_j2df2bb65fde4c37940993b4efab5748: function AS_FlexContainer_j2df2bb65fde4c37940993b4efab5748(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmEventDetails");
        ntf.navigate();
    },
    /** onClick defined for flxClose **/
    AS_FlexContainer_c5fd64bf578c471b9670d3fc67fc8031: function AS_FlexContainer_c5fd64bf578c471b9670d3fc67fc8031(eventobject) {
        var self = this;
        return self.navigateToFormEventDetail.call(this);
    },
    /** postShow defined for frmImageGallery **/
    AS_Form_eb8cdf5a728b40e98f102252bf598ec6: function AS_Form_eb8cdf5a728b40e98f102252bf598ec6(eventobject) {
        var self = this;
        this.view.ImageGallery.setImage(this.imagedata);
    }
});
define("frmImageGalleryController", ["userfrmImageGalleryController", "frmImageGalleryControllerActions"], function() {
    var controller = require("userfrmImageGalleryController");
    var controllerActions = ["frmImageGalleryControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
