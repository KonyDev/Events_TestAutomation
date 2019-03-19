define("com/konyenb/EventsHeader/userEventsHeaderController", function() {
    return {};
});
define("com/konyenb/EventsHeader/EventsHeaderControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/konyenb/EventsHeader/EventsHeaderController", ["com/konyenb/EventsHeader/userEventsHeaderController", "com/konyenb/EventsHeader/EventsHeaderControllerActions"], function() {
    var controller = require("com/konyenb/EventsHeader/userEventsHeaderController");
    var actions = require("com/konyenb/EventsHeader/EventsHeaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
