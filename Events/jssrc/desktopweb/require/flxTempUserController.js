define('userflxTempUserController',{
    //Type your controller code here 
    editUser: function(widget, context) {
        alert("Edit user!");
    },
    removeUser: function(widget, context) {
        var selectedItem = context.widgetInfo.selecteditems[0];
        selectedItem["rowIndex"] = context.rowIndex;
        this.askForConfirmation("Do you want to remove user " + selectedItem.lblUserName + " ?", "Are you Sure?", selectedItem);
        //this.executeOnParent("deRegisterUser",selectedItem);
    },
    onEditDone: function(widget, context) {
        alert("Edit done!");
    },
    askForConfirmation: function(message, title, selectedItem) {
        var pspConfig = {
            "iconPosition": constants.ALERT_CONTENT_ALIGN_CENTER,
            "contentAlignment": constants.ALERT_ICON_POSITION_LEFT
        };
        var alert = kony.ui.Alert({
            "message": message,
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "alertTitle": title,
            "yesLabel": "Yes",
            "noLabel": "No",
            "alertIcon": "",
            "alertHandler": handleAlert.bind(this)
        }, pspConfig);

        function handleAlert(response) {
            if (response) {
                //this.onEditDone(null, null);
                this.executeOnParent("deRegisterUser", selectedItem);
            }
        }
    },
});
define('flxTempUserControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnEdit **/
    AS_Button_f0fc76de33c84e839ed74b08ca97a9a7: function AS_Button_f0fc76de33c84e839ed74b08ca97a9a7(eventobject, context) {
        var self = this;
        this.editUser(eventobject, context);
    },
    /** onClick defined for btnDone **/
    AS_Button_ca94ea74b3b34aa3b6319520a23bfc8a: function AS_Button_ca94ea74b3b34aa3b6319520a23bfc8a(eventobject, context) {
        var self = this;
        this.onEditDone(eventobject, context);
    },
    /** onClick defined for flxRemove **/
    AS_FlexContainer_aceac85945784738a5b9088c1897439b: function AS_FlexContainer_aceac85945784738a5b9088c1897439b(eventobject, context) {
        var self = this;
        this.removeUser(eventobject, context);
    }
});



define('flxTempUserController',["userflxTempUserController","flxTempUserControllerActions"],
		function(){
			var controller = require("userflxTempUserController");
			var controllerActions = ["flxTempUserControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});
