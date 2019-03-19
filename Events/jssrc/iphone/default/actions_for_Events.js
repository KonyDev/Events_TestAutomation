//actions.js file 
function AS_Button_ae1ced44a04e45db98e67a006c9c9c2e(eventobject) {
    this.onEditHandler();
}

function AS_Button_bf08bde0fa654bd59134393f1561a2f7(eventobject) {}

function AS_Button_cdb25ed7935b4398948c269e15e17292(eventobject) {
    this.showMoreOnClick(eventobject.text);
}

function AS_Button_db489fe3076e48b18181594034fd9a5e(eventobject) {
    this.uploadFile();
}

function AS_Button_e8511783358d433ea6e7134d952de286(eventobject) {
    this.disableTimeLine();
}

function AS_Button_e873b0b9e6ee4f2e95d34b1fd1d69980(eventobject) {
    this.onRemoveHandler();
}

function AS_Button_g3d9f51e16f4455e8961f39d233ce4a2(eventobject) {
    var client = kony.sdk.getCurrentInstance();
    var auth_client = client.getIdentityService("likedInIdentityService");
    auth_client.logout(function(res) {
        alert("success" + JSON.stringify(res));
    }, function(err) {
        alert("failure" + JSON.stringify(err));
    })
}

function AS_Button_g8287edbec6a42cf8fc8758726949121(eventobject) {
    this.showMoreOnClick(eventobject.text);
}

function AS_Button_gd70cf67cf5746c08aab3a9cfe2564e6(eventobject) {
    this.selectFile();
}

function AS_Button_jd849cc0c27f429486a5152ba4bb2d0e(eventobject) {
    this.onDeviceClickFormForm();
}

function AS_Calendar_fb57ad91230144619dda879dd81dd82b(eventobject, isValidDateSelected) {
    this.view.calSessionStartDate.skin = "skncalNormal";
}

function AS_Calendar_feb4edb8166040d2a04edecc815a44fc(eventobject, isValidDateSelected) {
    var self = this;
    this.view.calSessionStartDate.skin = "skncalNormal";
}

function AS_FlexContainer_6e618c481f6b4ebfa0baef71fae7c499(eventobject) {
    //this.hideSlidingMenu();
}

function AS_FlexContainer_7d4d911ce6f64e1f934158f6da3fc2df(eventobject) {
    if (this._hamburgerDirection == "Left") {
        this.view.flxMainSlidingMenu.isVisible = true;
        this.view.flxMainSlidingMenu.left = "-20%";
        this.view.flxHamParent.left = "67.5%";
        this.view.imgHamIcon.setVisibility(false);
        this.view.flxCover.isVisible = true;
        this.view.forceLayout();
    } else {
        this.view.flxMainSlidingMenu.isVisible = true;
        this.view.flxMainSlidingMenu.left = "0%";
        this.view.flxHamParent.left = "20%";
        this.view.imgHamIcon.setVisibility(false);
        this.view.flxCover.isVisible = true;
        this.view.forceLayout();
    }
}

function AS_FlexContainer_9a3fece2bafd4a439c3fd58edc1c7a13(eventobject) {
    this.showSlidingMenu();
}

function AS_FlexContainer_a1a0d82e65634036a2174cadbe39072a(eventobject) {
    //this.createSegment();
    this.view.Segment0jba735b1ef5047.doLayout = this.checkLayoutAndChange;
}

function AS_FlexContainer_a237ac1180fc4fdda27e5c7af5432d1b(eventobject) {
    this.manageUser();
}

function AS_FlexContainer_a3996bf43d7a425f93a843c8033ed54d(eventobject) {
    return self.getImages.call(this, null);
}

function AS_FlexContainer_a4789d0f1afd4db3b78ca5700f95f4aa(eventobject, x, y) {}

function AS_FlexContainer_a4b570c61fb5470b98c85ffd2786832a(eventobject) {
    this.getEvents();
}

function AS_FlexContainer_a5d80420be0a4ac78ffdb604f35f47de(eventobject) {
    this.getMyCalendar();
}

function AS_FlexContainer_a964f16d13004f3f8ef33edfc758059b(eventobject) {
    this.manageUser();
}

function AS_FlexContainer_b18cd7c715a0419fa5def15528eb3f51(eventobject) {
    this.getMyCalendar();
}

function AS_FlexContainer_b3cec970c40b4c9ca1ebe3173cf80490(eventobject) {
    this.onViewHandler();
}

function AS_FlexContainer_b54f494869b6436da08f121c9b966947(eventobject) {
    this.getNotification();
}

function AS_FlexContainer_b70c6ced81c74b73a8760fb4a941a5b3(eventobject) {
    this.getEvents();
}

function AS_FlexContainer_bb11ab78a646477da8e50ddc9bd5c520(eventobject) {}

function AS_FlexContainer_c051a9d2c48e4ca28722835199deec66(eventobject) {
    var t = '';
}

function AS_FlexContainer_c3c21e25b0f3481dab88c4c5c310c858(eventobject) {
    this.getEvents();
}

function AS_FlexContainer_c5e2e2eb601945679f17e06acd24debb(eventobject, context) {}

function AS_FlexContainer_c6e8a61598c0470b8ca88d5d672255ab(eventobject) {
    this.getSettings();
}

function AS_FlexContainer_c90d67ceb09b4c5091b773a1d7546c45(eventobject) {
    this.createEvent();
}

function AS_FlexContainer_caccfc41878d41edb99ad5315af8d7b8(eventobject) {
    this.onViewHandler();
}

function AS_FlexContainer_caed9c9f6e1d43409b7073edd5fa9c90(eventobject) {
    //this.view.FlexMainImageSet.isVisible = false;
    this.onClickChange();
}

function AS_FlexContainer_cba92899426240fbb342915ff555afef(eventobject) {
    this.getNotification();
}

function AS_FlexContainer_d067207d3fe74c6eac76724a64170a27(eventobject) {
    this.setData();
}

function AS_FlexContainer_d1a8395238fa405c8a9382c15d37ba29(eventobject) {
    this.manageUser();
}

function AS_FlexContainer_d289d96113154f688aa577d1279a407c(eventobject) {
    this.setTimeListUI();
}

function AS_FlexContainer_d4a85f9cf0d74f14aee26745699ac597(eventobject) {
    this.createEvent();
}

function AS_FlexContainer_da8b622bc77544e6868db44d5528a8c2(eventobject) {
    this.createSegment();
}

function AS_FlexContainer_da9694a4fc4140489bc01ce66b63d941(eventobject, x, y) {}

function AS_FlexContainer_daaf8378dc624fb5ba8f274ecdc698dd(eventobject) {
    this.setData();
}

function AS_FlexContainer_de0ea69aaf7f4b769d193472cfd00a75(eventobject) {
    this.setTimeListUI();
}

function AS_FlexContainer_dfc085c89ad2463a95577ed737bff289(eventobject) {
    this.onViewHandler();
}

function AS_FlexContainer_e03a6b839a6e4fc989650b6cc3a71285(eventobject) {
    this.createEvent();
}

function AS_FlexContainer_e15a4e3c2d904ebd836e10ddf27526bf(eventobject) {
    this.setTimePicker();
}

function AS_FlexContainer_e548f090bfee4e749196015b2c6e300d(eventobject) {
    this.manageUser();
}

function AS_FlexContainer_e60bbff67fbf41e8817979daa6fc0d6c(eventobject) {
    this.getSettings();
}

function AS_FlexContainer_e6f8437a41dc409aaf7e748090dce974(eventobject) {
    this.getEvents();
}

function AS_FlexContainer_e9685becdf5741d6b94db0aaf48a27b1(eventobject) {
    this.setTimePicker();
}

function AS_FlexContainer_eb09808c6760487f8a96f25b1a582ec5(eventobject) {
    this.onClickAdd({
        "rowIndex": 1
    });
}

function AS_FlexContainer_ebdfac7a238d4155960ebea12303ebf9(eventobject) {
    this.setTimePicker();
}

function AS_FlexContainer_ec11c5d2e56d487ab0b9c35b6eade2d6(eventobject) {
    this.getMyCalendar();
}

function AS_FlexContainer_f438600b9f654d2c8dec64709b33c05e(eventobject) {
    this.setTimeListUI();
}

function AS_FlexContainer_f455404b2bfb473786300da0084ab8f7(eventobject) {
    this.manageUser();
}

function AS_FlexContainer_f46b8282a0b54da0a4ba8c50c48691be(eventobject) {
    this.getSettings();
}

function AS_FlexContainer_f77703059019443c9b2ba841b14ce64f(eventobject) {
    this.setTimeListUI();
}

function AS_FlexContainer_f7ca6bdb06f846119766e4e8c0643f22(eventobject) {
    this.getEvents();
}

function AS_FlexContainer_f8b5a3329c17466393c23ed3f0625d4c(eventobject) {
    this.createEvent();
}

function AS_FlexContainer_fa11dc763958474b8f16769d311d8b44(eventobject) {
    this.getNotification();
}

function AS_FlexContainer_fa7c1077ef1149eca8587345b94c706d(eventobject) {
    this.createNewEvent();
}

function AS_FlexContainer_fada2523119d4d58afc350b2b6806b09(eventobject, x, y) {
    this.onClickOfUp();
}

function AS_FlexContainer_fb4d4a906f1643dcaaeae163a6dbb764(eventobject) {
    this.getMyCalendar();
}

function AS_FlexContainer_fce8573e698744969f4aaeced4609038(eventobject) {
    this.getSettings();
}

function AS_FlexContainer_fee932881cb1474c9e19401be35ba55d(eventobject) {
    this.getNotification();
}

function AS_FlexContainer_g33b3b940cff4a7cafccfcbc8fce5868(eventobject, x, y) {
    this.createNewEvent();
}

function AS_FlexContainer_g3c2f295ce5f45d6837adb74d3322a13(eventobject) {
    this.getEvents();
}

function AS_FlexContainer_gcc56184a8e64b6db39e4d165184c87c(eventobject) {
    this.view.Segment0h79ffc45921049.doLayout = function() {
        alert(this.view.Segment0h79ffc45921049.frame["height"]);
    }.bind(this)
}

function AS_FlexContainer_h200f6358f0b4a24b3527f2591da77fb(eventobject, x, y) {
    this.onClickOfDown();
}

function AS_FlexContainer_h279a49476064771b8b8c16fb99bad5a(eventobject) {
    this.manageUser();
}

function AS_FlexContainer_i147b740346b4812948872c3910b1502(eventobject) {
    this.getSettings();
}

function AS_FlexContainer_i71bc799fbc74169ac328784044fad4c(eventobject) {}

function AS_FlexContainer_i8cfb56a4ab74162ad1e3ed76336b05e(eventobject) {
    this.testFunction1();
}

function AS_FlexContainer_ibbcc442aaa54ccab12d0a2fbba26387(eventobject) {}

function AS_FlexContainer_j3afb4a96be34388abbb05a4015dcfe8(eventobject) {
    this.view.Segment0h79ffc45921049.doLayout = this.checkLayoutAndChange;
}

function AS_FlexContainer_j4f84eb08775495aafc1255f0c3321e3(eventobject) {}

function AS_FlexContainer_j64fb94c3192439485d659218f96b214(eventobject) {
    this.getNotification();
}

function AS_FlexContainer_j66f1161819542118d560b20d0711cfd(eventobject) {
    this.createEvent();
}

function AS_FlexContainer_ja21b81511854a608b376fd3c3ac3e71(eventobject) {
    this.createEvent();
}

function AS_FlexContainer_jf56ff5781bf453cb8be381e324df6db(eventobject) {
    // this.view.FlexMainImageSet.addGestureRecognizer(2, {
    //             "fingers": 1
    //         }, this.swipeCallback); 
    // var data = {};
    // data.title = this._eventTitle;
    // data.timeLineList = this._masterData.data;
    // kony.print("in component postshow"+JSON.stringify(data));
    // this.setData(data);
    this.setDefault();
}

function AS_FlexContainer_jfaeed75b98349c4bf8728c43e74f051(eventobject) {
    this.getMyCalendar();
}

function AS_FlexScrollContainer_a3dfd44e386f4fb0a7feafd7358e7b3e(eventobject) {
    this.setData();
}

function AS_Image_f234df138ac14cf8832b2b4b4358ec0e(eventobject, x, y) {
    this.checkDeviceInfo();
}

function AS_Segment_ade71abaef944d1684c7397098a54f7d(eventobject, sectionNumber, rowNumber) {
    this.onMenuClick();
}

function AS_Segment_b747445654914a4b9c10a01886d6d232(eventobject, sectionNumber, rowNumber) {
    this.onSelection();
}

function AS_Segment_bfd0b9cccb994624beae1bf610275e73(eventobject, sectionNumber, rowNumber) {
    this.onClickOfTimeline();
}

function AS_Segment_c5d96ac974b744dfb2fd5b686292f1b0(eventobject, sectionNumber, rowNumber) {
    this.onSelection();
}

function AS_Segment_c91531eb600c4195827a163f09c1d173(eventobject, sectionNumber, rowNumber) {
    this.onSelection();
}

function AS_Segment_f1aecdb5b480448eb5d88e2e08325447(eventobject, sectionNumber, rowNumber) {
    this.onMenuClick();
}

function AS_Segment_f68ae74da9f04189acaaff18e285b19f(seguiWidget, sectionIndex, rowIndex) {
    this.currentRowIndex = rowIndex;
}

function AS_Segment_h12975ebb8e04648afd904a7ab1af93e(eventobject, sectionNumber, rowNumber) {
    this.onSelectionOfTimeSlot();
}

function AS_Segment_ia339d08622a4519ac9bdb3a05572eed(eventobject, sectionNumber, rowNumber) {}

function AS_TextField_c0104b3841ca478ab7f52af03605aaf4(eventobject, changedtext) {
    this.validateStartTime(this.view.txtSessionStartTime.text);
}

function AS_TextField_c7dde1660bab4412aa2e3da97b8cf4e5(eventobject, changedtext) {
    this.validateStartTime(this.view.txtSessionStartTime.text);
}

function AS_TextField_d909259ff1334eb0b88cf2a762c8dcfc(eventobject, changedtext) {
    var self = this;
    this.validateEndTime(this.view.txtSessionEndTime.text);
}

function AS_TextField_eabf55c667504a56b9fd03ccdd2d1185(eventobject, changedtext) {
    var self = this;
    this.validateStartTime(this.view.txtSessionStartTime.text);
}

function AS_TextField_f37f83e3ec68420086885d7aaf301dc9(eventobject, changedtext) {
    this.validateEndTime(this.view.txtSessionEndTime.text);
}

function AS_TextField_ff2dc6a6c5374599b906ec073a0a177b(eventobject, changedtext) {
    this.validateEndTime(this.view.txtSessionEndTime.text);
}