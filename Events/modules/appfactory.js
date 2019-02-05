/***************************************************************************************************************
*
*  AppFactory's Fabric App Configuration Module
*  --------------------------------------------
*
*  This module is meant to store the configuration of the Fabric app you use during development, but also
*  to allow AppFactory to reconfigure your app during build time in order point it to an environment of
*  your choosing. Use the three (3) variables in section 'Developer' below to hardcode your key, secret and
*  service url for development. AppFactory will take care of the remaining environments.
*  
*  IMPORTANT: You MUST use this module to configure your app if you want it to be compatible with AppFactory.
*  
*  	var sdk = new kony.sdk();
*  	sdk.init(
*  		$fabric.getAppKey(),
*  		$fabric.getAppSecret(),
*  		$fabric.getServiceUrl(),
*  		successCallback,
*  		errorCallback
*  	);
*  
***************************************************************************************************************/

var $fabric = (function(){

	/**********************************************************************************************************
	*  Developer: Set the app key, secret and and service url you got from publishing your Fabric app here.   *
	***********************************************************************************************************/
	var appKey = ''; //E.g.: 20973d1q445be960e5247c6b34629d86
	var appSecret = ''; //E.g.: ca62e711582d3245ce6e06169a78e25a
	var serviceUrl = ''; //E.g.: https://000000000.auth.konycloud.com/appconfig


	/**********************************************************************************************************
	*      AppFactory: This code is reserved for AppFactory. Do NOT modify anything. Leave it as it is.       *
	***********************************************************************************************************/
	function _getAppKey(){
		return typeof $FABRIC_APP_KEY != "undefined" ? $FABRIC_APP_KEY : appKey;
	}

	function _getAppSecret(){
		return typeof $FABRIC_APP_SECRET != "undefined" ? $FABRIC_APP_SECRET : appSecret;
	}

	function _getServiceUrl(){
		return typeof $FABRIC_APP_SERVICE_URL != "undefined" ? $FABRIC_APP_SERVICE_URL : serviceUrl;
	}

	return {
		getAppKey: _getAppKey,
		getAppSecret: _getAppSecret,
		getServiceUrl: _getServiceUrl
	}; 

})();