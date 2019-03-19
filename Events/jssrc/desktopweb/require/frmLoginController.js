define('userfrmLoginController',{
    /**
     * @function onNavigate
     * @description - This function will call disable error function to disable the error label visibility
     **/
    onNavigate: function() {
        try {
            this.disableError();
        } catch (error) {
            kony.print("FormLogin Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function doUserStoreLogin
     * @description - This function will make userstore identity service call with user name and password
     * @param {String - username} - username entered in username text box
     * @param {String - password} - password entered in password text box
     **/
    doUserStoreLogin: function(username, password) {
        if (username === null || username === "" || password === null || password === "") {
            this.enableError("Username or Password should not be Empty");
            return;
        }
        showLoading(this);
        var sdkInstance = new kony.sdk.getCurrentInstance();
        try {
            auth_client = sdkInstance.getIdentityService("userstore");
            var userCred = {
                "userid": username,
                "password": password
            };
            auth_client.login(userCred, this.userStoreLoginSuccss.bind(this), this.userStoreLoginFailure.bind(this));
        } catch (error) {
            this.enableError("something went wrong please try later");
        }
    },
    /**
     * @function userStoreLoginSuccss
     * @description - This function will get the user attributes after successfull login
     * @param {JSON - response} - success response from the back end
     **/
    userStoreLoginSuccss: function(response) {
        try {
            this.disableError();
            glbIsLoggedIn = true;
            EVENT_CONSTANS.MODE.USERROLE = EVENT_CONSTANS.USERROLE.ADMIN;
            auth_client.getProfile(false, function(result) {
                glbProfile = {};
                kony.application.dismissLoadingScreen();
                glbProfile.first_name = result.profile_attributes.firstname;
                var navToCreateEvent = new kony.mvc.Navigation("frmAllEvents");
                navToCreateEvent.navigate();
            }, function(error) {
                this.enableError("something went wrong please try later");
            });
        } catch (error) {
            kony.print("FormLogin Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function userStoreLoginFailure
     * @description - This function is the failure callback of login
     * this function will call enable error label in UI
     * @param {JSON - error} - error response from the back end
     **/
    userStoreLoginFailure: function(error) {
        try {
            this.enableError("The email and password combination you entered is not valid. Please tyr again.");
        } catch (err) {
            kony.print("FormLogin Controller" + JSON.stringify(err));
        }
    },
    /**
     * @function enableError
     * @description - This function will enable error label in the UI with given message
     * @param {String - msg} - Message to be displayed
     **/
    enableError: function(msg) {
        try {
            kony.application.dismissLoadingScreen();
            this.view.lblError.text = msg;
            this.view.lblError.isVisible = true;
            this.view.forceLayout();
        } catch (error) {
            kony.print("FormLogin Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function disableError
     * @description - This function will make the error label invisible
     **/
    disableError: function() {
        try {
            this.view.lblError.isVisible = false;
            this.view.forceLayout();
        } catch (error) {
            kony.print("FormLogin Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function showPassword
     */
    showPassword: function() {
        try {
            if (this.view.imageShowPassword.src === "eyeiconvisible.png") {
                this.view.imageShowPassword.src = "eyeicon.png";
                this.view.txtPassWord.isVisible = true;
                this.view.txtPasswordShow.isVisible = false;
            } else {
                this.view.imageShowPassword.src = "eyeiconvisible.png";
                this.view.txtPasswordShow.text = this.view.txtPassWord.text;
                this.view.txtPassWord.isVisible = false;
                this.view.txtPasswordShow.isVisible = true;
            }
        } catch (err) {
            kony.print("frmLogin Controller" + JSON.stringify(err));
        }
    },
});
define('frmLoginControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnLinkedInLogin **/
    AS_Button_a80651fce1e64f739c85ba5d18a05842: function AS_Button_a80651fce1e64f739c85ba5d18a05842(eventobject) {
        var self = this;
        Events.consumerLogin.doLinkedInLogin(EVENT_CONSTANS.MODE.LOGIN);
    },
    /** onDone defined for txtPassWord **/
    AS_TextField_e9a76156f7f1447e9dc2972f0c5aee44: function AS_TextField_e9a76156f7f1447e9dc2972f0c5aee44(eventobject, changedtext) {
        var self = this;
        this.doUserStoreLogin(this.view.txtUser.text, this.view.txtPassWord.text);
    },
    /** onClick defined for flexShowHidePass **/
    AS_FlexContainer_b1960b9eb1c24435ab192c6a8fc70925: function AS_FlexContainer_b1960b9eb1c24435ab192c6a8fc70925(eventobject) {
        var self = this;
        this.showPassword();
    },
    /** onClick defined for btnSubmit **/
    AS_Button_gac375ae9f3f437da23efcb0f25b67c4: function AS_Button_gac375ae9f3f437da23efcb0f25b67c4(eventobject) {
        var self = this;
        this.doUserStoreLogin(this.view.txtUser.text, this.view.txtPassWord.text);
    },
    /** onClick defined for btnCancel **/
    AS_Button_c7383094e1434f0e9b8fe1d38e25d41f: function AS_Button_c7383094e1434f0e9b8fe1d38e25d41f(eventobject) {
        var self = this;
        var nav = new kony.mvc.Navigation("frmAllEvents");
        nav.navigate();
    }
});



define('frmLoginController',["userfrmLoginController","frmLoginControllerActions"],
		function(){
			var controller = require("userfrmLoginController");
			var controllerActions = ["frmLoginControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});
