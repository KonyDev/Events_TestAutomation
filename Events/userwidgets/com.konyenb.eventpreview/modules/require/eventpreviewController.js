//To Do - Work in progress
define(function () {

  return {
    constructor: function (baseConfig, layoutConfig, pspConfig) {},
    //Logic for getters/setters of custom properties
    initGettersSetters: function () {},
    /**
		 * @function setTitle
		 * @description - This function is used to set title of the event
         * @param {String - title}
		 */
    setTitle: function (title) {
      try{
        this.view.lblEventTitlePrev.text = title;
      }catch(err){
        kony.print("eventsPreview Controller"+JSON.stringify(err));
      }
    },
    /**
		 * @function setSubTitle
		 * @description - This function is used to set sub  of the event
		 */
    setSubTitle: function (subTitle) {
      try{
        this.view.lblEventCategoryPrev.text = subTitle;
      }catch(err){
        kony.print("eventsPreview Controller"+JSON.stringify(err));
      }
    },
    /**
		 * @function setBannerImage
		 * @description - This function is used to set banner image  of the event
		 */
    setBannerImage: function (bannerImage) {
      try{
        this.view.imageBanner.src = bannerImage
      }catch(err){
        kony.print("eventsPreview Controller"+JSON.stringify(err));
      }
    },

    /**
		 * @function setGalleryImage
		 * @description - This function is used to set gallery image  of the event
		 */
    setGalleryImage: function (data) {
      try {
        this.eventImages = [];
        this.eventImages = data;
        if (!data.length) {
          this.view.flxGalleryCompConatiner.isVisible = false;
          return;
        }
        this.view.flxGalleryCompConatiner.isVisible = true;
        for (var i = 0; i < data.length; i++) {
          if (i <= 5) {
            this.view["flexItem" + i].isVisible = true;
            this.view["imgItem" + i].src = data[i].image_url;
          } else {
            this.view["flexRemainingImageCount"].isVisible = true;
            this.view.lblRemaingImageCount.text = "+" + ((data.length) - 6).toFixed();
            break;
          }
        }
      } catch (error) {
        kony.print("Events Preview Controller" + JSON.stringify(error));
      }
    },

    /**
	 * @function resetImageData
	 * @description Function to set the visibility of image widget to false.
	 * @private
	 */
    resetImageData: function () {
      try {
        this.view["flexRemainingImageCount"].isVisible = false;
        for (var i = 0; i < 6; i++) {
          this.view["flexItem" + i].isVisible = false;
        }
      } catch (error) {
        kony.print("frm Event Details Controller" + JSON.stringify(error));
      }
    },
    /**
		 * @function setDescription
		 * @description - This function is used to set description  for the event
		 */

    setDescription: function (desc) {
      try{
        if(desc!==undefined){
          this.view.lblDesc.isVisible = true;
          this.view.lblDesc.text = desc;
        }else{
          this.view.lblDesc.isVisible = false;
        }
      }catch(err){
        kony.print("Events Preview Controller"+JSON.stringify(err));
      }
    },
    /**
		 * @function setDateRangeOnBanner
		 * @description - This function is used to set dateRange in banner
		 */
    setDateRangeOnBanner: function (dateRange) {
      try{
        this.view.lblDateRange.text = dateRange;
      }catch(err){
        kony.print("Events Preview Controller"+JSON.stringify(err));
      }
    },

    /**
		 * @function setDateRangeOnBanner
		 * @description - This function is used to set dateRange  in details
		 */
    setDateRangeOnDetails: function (dateRange) {
      try{
        this.view.lblDateValuePrev.text = dateRange;
      }catch(err){
        kony.print("Events Preview Controller"+JSON.stringify(err));
      }
    },
    /**
		 * @function setLocation
		 * @description - This function is used to set location
		 */
    setLocation: function (location) {
      try{
        this.view.lblLocationValuePrev.text = location;
      }catch(err){
        kony.print("Events Preview Controller"+JSON.stringify(err));
      }
    },
    setShowMore : function(text,isVisible){
      try{
        this.view.btnShowMore.text = text;
        this.view.btnShowMore.isVisible = isVisible;
      }catch(err){
        kony.print("Events Preview Controller"+JSON.stringify(err));
      }
    },

    showMoreOnClick : function(text){
      try{
        switch(text){
          case "Show more" :
            this.setDescription(desc);
            this.setShowMore("Show Less",true);
            break;
          case "Show less" :
            this.setDescription(desc);
            this.setShowMore("Show More",true);
            break;
        }
      }catch(err){
        kony.print("Events Preview Controller"+JSON.stringify(err));
      }

    },
    /**
		 * @function setLocationOnMap
		 * @description - This function is used to set location on Map
		 */
    setLocationOnMap: function (lat,long) {
      this.view.mapGoogleMap.locationData = [{
        "lat": lat,
        "lon": long,
      }
                                            ];
      this.view.mapGoogleMap.isVisible = true;
    },

    /**
		 * @function setEventDetails
		 * @description - This function is used to set Eventdetails
		 */
    setEventDetails: function (eventDetails) {
      this.eventData = eventDetails;
      this.resetImageData();
      if(eventDetails.name!==undefined){
        this.setTitle(eventDetails.name);
      }else{
        this.setTitle("")
      }

      if(eventDetails.event_category!==undefined){
        this.setSubTitle(eventDetails.event_category);
      }else{
        this.setSubTitle("");
      }

      if(eventDetails.event_date!==undefined){
        this.setDateRangeOnDetails(eventDetails.event_date);
      }else{
        this.setDateRangeOnDetails("");
      }

      if(eventDetails.event_date!==undefined){
        this.setDateRangeOnBanner(eventDetails.event_date);
      }else{
        this.setDateRangeOnBanner("");
      }

      if(eventDetails.event_images!==undefined){
        this.setGalleryImage(eventDetails.event_images);
      }else{
        this.resetImageData();
      }

      if(eventDetails.event_banners!==undefined && eventDetails.event_banners.length>0 && 
         eventDetails.event_banners[0].banner_url!==undefined && eventDetails.event_banners[0].banner_url!==""){
        this.setBannerImage(eventDetails.event_banners[0].banner_url);
      }else{
        this.setBannerImage(EVENT_CONSTANS.IMAGES.EVENTPLACEHOLDERIMAGE);
      }

      if(eventDetails.short_desc!==undefined){
        this.setDescription(eventDetails.short_desc + " " +eventDetails.long_desc);
      }else{
        this.setDescription("");
      }
      if(eventDetails.event_type == 2){
        if(eventDetails.location!==undefined && eventDetails.location[0]!==undefined && eventDetails.location[0].location!==undefined){
          this.setLocation(eventDetails.location[0].location);
          this.view.lblLocationPrev.text = "Event Location";
          this.setLocationOnMap(eventDetails.location[0].latitude,eventDetails.location[0].latitude);
        }else{
          this.view.mapGoogleMap.isVisible = false;
          this.view.lblLocationPrev.text = "Online Event";
          this.setLocation(eventDetails.location[0].location);
        }
      }
      if(eventDetails.event_sessions!==undefined && eventDetails.event_sessions.length){
        var response = {};
        response.records = [{}];
        response.records[0].event_sessions = JSON.parse(JSON.stringify(eventDetails.event_sessions));
        if(eventDetails.presenter!==undefined && eventDetails.presenter.length){
          response.records[0].presenter = JSON.parse(JSON.stringify(eventDetails.presenter));
        }
        this.createSessionAndPresenter(processSessionAndPresenters(response));
      }


    },

    createSessionAndPresenter : function(sessions){
      kony.print(sessions);
      var sessionAndSpeaker = this.groupSessionAndSpeker(sessions);
      this.view.flexSessionsandSpeakers.removeAll();
      for(var i=0;i<sessionAndSpeaker.length;i++){
        this.createSessionPreviewComponentDynamically(i,sessionAndSpeaker[i]);
      }
    },
    createSessionPreviewComponentDynamically : function(id,data){
      var sessionPreview = new com.konyenb.sessionpreview({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "compSessionPreview"+id,
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "sknFlexBorderDesk00a0dd",
        "top": "15dp",
        "width": "100%"
      }, {
        "containerWeight": 0
      }, {});
      sessionPreview.setData(data);
      this.view.flexSessionsandSpeakers.add(sessionPreview);
    },

    /**
	 * @function groupSessionAndSpeker
	 * @description -this function will group session and related speakers and store in sesssionDataFromBK
	 * @param {array JSON} - response from the backend
	 **/
    groupSessionAndSpeker: function (response) {
      try{
        var currentSessionId = null;
        var sessionSpeaker = [];
        var i = 0;
        var isSpeakerPresent = false;
        while (i < response.length) {
          var session = {};
          currentSessionId = response[i].event_session_id;
          session.session_name = response[i].session_name;
          if(response[i].session_end_date.indexOf("+")!==-1){
            session.session_end_date = response[i].session_end_date.split("+")[0];
            session.session_start_date = response[i].session_start_date.split("+")[0];
          }else{
            session.session_end_date = response[i].session_end_date
            session.session_start_date = response[i].session_start_date
          }
          session.start_time = response[i].start_time
          session.end_time =  response[i].end_time
          session.Day = response[i].Day
          session.year =  response[i].year
          session.date = response[i].date
          session.month = response[i].month
          session.session_desc = response[i].session_desc;
          session.session_id = response[i].event_session_id;
          var j = i;
          session.speakerDet = [];
          while (response[j] !== undefined && response[j].presenter_id !== undefined && response[j].session_id == currentSessionId) {
            var speaker = {};
            isSpeakerPresent = true;
            speaker.name = response[j].name;
            speaker.designation = response[j].designation;
            if (response[j].linkedin_link !== undefined)
              speaker.linkedin_link = response[j].linkedin_link;
            else
              speaker.linkedin_link = "";
            speaker.presenter_id = response[j].presenter_id;
            session.speakerDet.push(speaker);
            j++;
          }
          if (isSpeakerPresent) {
            i = j - 1;
            isSpeakerPresent = false;
          } else {
            i = j;
          }
          i++;
          sessionSpeaker.push(session);
        }
        var sessionSpeakerByDate = this.groupSessionByDate(sessionSpeaker);
        return sessionSpeakerByDate;
      }catch(error){
        kony.print("Create EventController"+JSON.stringify(error));
      }
    },

    groupSessionByDate : function(session){
      var groupedSession = [];
      var tempSessionArrayforFormatting = [];
      kony.print(session);
      var currentDate = session[0].date;
      for(var i=0; i<session.length; i++){
        if(session[i].date == currentDate){
          tempSessionArrayforFormatting.push(session[i]);
        }else{
          groupedSession.push(tempSessionArrayforFormatting);
          currentDate = session[i].date;
          tempSessionArrayforFormatting = [];
          tempSessionArrayforFormatting.push(session[i]);
        }
        if(i == session.length-1){
          groupedSession.push(tempSessionArrayforFormatting);
        }
      }
      return groupedSession;
    }
  };
});