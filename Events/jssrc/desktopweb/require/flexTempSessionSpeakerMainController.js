define('userflexTempSessionSpeakerMainController',{
    //Type your controller code here 
});
define('flexTempSessionSpeakerMainControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flexDel **/
    AS_FlexContainer_gbc0a1a83c6f457498c362d7ecb36483: function AS_FlexContainer_gbc0a1a83c6f457498c362d7ecb36483(eventobject, context) {
        var self = this;
        this.executeOnParent("onClickDel", context);
    },
    /** onClick defined for flexAdd **/
    AS_FlexContainer_caa9d31600934b5ea70d407e3069dc3e: function AS_FlexContainer_caa9d31600934b5ea70d407e3069dc3e(eventobject, context) {
        var self = this;
        this.executeOnParent("onClickAdd", context);
    }
});



define('flexTempSessionSpeakerMainController',["userflexTempSessionSpeakerMainController","flexTempSessionSpeakerMainControllerActions"],
		function(){
			var controller = require("userflexTempSessionSpeakerMainController");
			var controllerActions = ["flexTempSessionSpeakerMainControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});
