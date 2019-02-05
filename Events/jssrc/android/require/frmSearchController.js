define("userfrmSearchController", {
    onNavigate: function() {
        try {
            this.clearTextBox();
            this.view.btnCross.isVisible = false;
        } catch (err) {
            kony.print("Frm Search Controller" + JSON.stringify(err));
        }
    },
    /**
     * @function searchByEventName
     * @description function to search the event by name.
     * @private
     * @param {string} srchText
     */
    searchByEventName: function(srchText) {
        try {
            if (srchText !== "") {
                this.view.btnCross.isVisible = true;
            } else {
                this.view.btnCross.isVisible = false;
            }
            var suggestions = [];
            if (srchText !== "") {
                suggestions = typeAhead(srchText.toLowerCase());
            }
            var dataToSet = [];
            if (suggestions.length > 0) {
                for (var i = 0; i < suggestions.length; i++) {
                    var data = {};
                    if (suggestions.length == 1 || i == suggestions.length - 1) {
                        data.dummy = {
                            "isVisible": true,
                            "text": "Dummy",
                            "skin": "lblskndummytransparent"
                        };
                    } else {
                        data.dummy = {
                            "isVisible": true,
                            "text": "Dummy",
                            "skin": "sknlblDivf2f2f1"
                        };
                    }
                    data.text = suggestions[i];
                    dataToSet.push(data);
                }
                this.setSuggestedData(dataToSet);
            } else {
                this.view.segSearchResult.isVisible = false;
            }
        } catch (err) {
            kony.print("Frm Search Controller" + JSON.stringify(err));
        }
    },
    /**
     * @function setSuggestedData
     * @description function to populate the search result to the segment.
     * @private
     * @param {string} srchText
     */
    setSuggestedData: function(data) {
        try {
            this.view.segSearchResult.removeAll();
            this.view.segSearchResult.widgetDataMap = {
                "lblResult": "text",
                "lblHorDivider": "dummy"
            };
            this.view.segSearchResult.setData(data);
            this.view.segSearchResult.isVisible = true;
        } catch (err) {
            kony.print("Frm Search Controller" + JSON.stringify(err));
        }
    },
    selectedCatagories: ["training", "workshops", "hackathon", "speaker series", "conference"],
    /**
     * @function getSelectedCatagories
     * @description function to populate the selected category to the form widget.
     * @private
     * @param {string} skin
     * @param {string} text
     * @param {string} id
     */
    getSelectedCatagories: function(skin, text, id) {
        try {
            if (skin === "sknCategorySel") {
                this.view[id].skin = "btnSknCategoryNor";
                this.view[id].focusSkin = "btnSknCategoryNor";
                this.selectedCatagories = this.selectedCatagories.filter(function(e) {
                    return e !== text.toLowerCase();
                });
            } else if (skin === "btnSknCategoryNor") {
                this.view[id].skin = "sknCategorySel";
                this.view[id].focusSkin = "sknCategorySel";
                this.selectedCatagories.push(text.toLowerCase());
            }
            if (this.selectedCatagories.length < 5) {
                this.view.btnSelectAll.isVisible = true;
            } else {
                this.view.btnSelectAll.isVisible = false;
            }
        } catch (err) {
            kony.print("Frm Search Controller" + JSON.stringify(err));
        }
    },
    /**
     * @function onClickSelectAll
     * @description function to select all event category.
     * @private
     */
    onClickSelectAll: function() {
        try {
            var catagories = ["training", "workshops", "hackathon", "speaker series", "conference"];
            for (var i = 0; i < catagories.length; i++) {
                this.view["btnCat" + (i + 1)].skin = "sknCategorySel";
                this.view["btnCat" + (i + 1)].focusSkin = "sknCategorySel";
            }
            this.selectedCatagories = catagories;
            this.view.btnSelectAll.isVisible = false;
        } catch (err) {
            kony.print("Frm Search Controller" + JSON.stringify(err));
        }
    },
    /**
     * @function navigateAndSearch
     * @description function to navigate to frmEventsLanding with the searched data
     * @private
     */
    navigateAndSearch: function() {
        try {
            var searchData = {};
            searchData.searchText = this.view.txtSearch.text;
            searchData.selectedCat = this.selectedCatagories;
            searchData.origin = "search";
            var navToEventLanding = new kony.mvc.Navigation("frmEventsLanding");
            navToEventLanding.navigate(searchData);
        } catch (err) {
            kony.print("Frm Search Controller" + JSON.stringify(err));
        }
    },
    /**
     * @function onSuggestionRowClick
     * @description function to select the suggested item
     * @private
     */
    onSuggestionRowClick: function() {
        try {
            var suggestedItem = this.view.segSearchResult.selectedRowItems[0];
            this.view.txtSearch.text = suggestedItem.text;
            this.view.segSearchResult.isVisible = false;
        } catch (err) {
            kony.print("Frm Search Controller" + JSON.stringify(err));
        }
    },
    /**
     * @function clearTextBox
     * @description function to set the clear button functionality on android
     * @private
     */
    clearTextBox: function() {
        try {
            this.view.txtSearch.text = "";
            this.searchByEventName("");
        } catch (err) {
            kony.print("Frm Search Controller" + JSON.stringify(err));
        }
    }
});
define("frmSearchControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSearchIcon **/
    AS_Button_de524194f00c4fc9ab3275b7e77c1cd4: function AS_Button_de524194f00c4fc9ab3275b7e77c1cd4(eventobject) {
        var self = this;
        this.navigateAndSearch();
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_fd26169aa27a4ee4a8aae7a4d9b1800b: function AS_FlexContainer_fd26169aa27a4ee4a8aae7a4d9b1800b(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmEventsLanding");
        ntf.navigate({
            "origin": "searchback"
        });
    },
    /** onTextChange defined for txtSearch **/
    AS_TextField_f32a139024244acabf5ab1bcd58134d5: function AS_TextField_f32a139024244acabf5ab1bcd58134d5(eventobject, changedtext) {
        var self = this;
        this.searchByEventName(this.view.txtSearch.text);
    },
    /** onClick defined for btnCross **/
    AS_Button_dd3f28cf76c144eebe912d9b12af17a7: function AS_Button_dd3f28cf76c144eebe912d9b12af17a7(eventobject) {
        var self = this;
        this.clearTextBox();
    },
    /** onRowClick defined for segSearchResult **/
    AS_Segment_f95f8e10bc5b4b9ba646159507c5da98: function AS_Segment_f95f8e10bc5b4b9ba646159507c5da98(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onSuggestionRowClick();
    },
    /** onClick defined for btnSelectAll **/
    AS_Button_e2feddb2a7a34c22adf7de57fdd45847: function AS_Button_e2feddb2a7a34c22adf7de57fdd45847(eventobject) {
        var self = this;
        this.onClickSelectAll();
    },
    /** onClick defined for btnCat1 **/
    AS_Button_b5b57559c795471dbb24ae4dd3d91e8f: function AS_Button_b5b57559c795471dbb24ae4dd3d91e8f(eventobject) {
        var self = this;
        this.getSelectedCatagories(eventobject.skin, eventobject.text, eventobject.id);
    },
    /** onClick defined for btnCat2 **/
    AS_Button_e7dc413536d94fe4bc7d93be9a5ac2f1: function AS_Button_e7dc413536d94fe4bc7d93be9a5ac2f1(eventobject) {
        var self = this;
        this.getSelectedCatagories(eventobject.skin, eventobject.text, eventobject.id);
    },
    /** onClick defined for btnCat3 **/
    AS_Button_aaf4f68b9c604677b1b53086b17ba2e0: function AS_Button_aaf4f68b9c604677b1b53086b17ba2e0(eventobject) {
        var self = this;
        this.getSelectedCatagories(eventobject.skin, eventobject.text, eventobject.id);
    },
    /** onClick defined for btnCat4 **/
    AS_Button_jb6ce2013ee94d2592a91811dda72fbb: function AS_Button_jb6ce2013ee94d2592a91811dda72fbb(eventobject) {
        var self = this;
        this.getSelectedCatagories(eventobject.skin, eventobject.text, eventobject.id);
    },
    /** onClick defined for btnCat5 **/
    AS_Button_aab5812f1d794254bc93391b2366e9a3: function AS_Button_aab5812f1d794254bc93391b2366e9a3(eventobject) {
        var self = this;
        this.getSelectedCatagories(eventobject.skin, eventobject.text, eventobject.id);
    }
});
define("frmSearchController", ["userfrmSearchController", "frmSearchControllerActions"], function() {
    var controller = require("userfrmSearchController");
    var controllerActions = ["frmSearchControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
