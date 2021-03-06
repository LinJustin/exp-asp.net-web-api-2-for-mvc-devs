﻿var response = ko.observable("Ready");
var gotError = ko.observable(false);

var sendRequest = function () {
    $.ajax("/api/nrest/custom/dayofweek/1", {
        type: "GET",
        success: function (data) {
            gotError(false);
            response(data);
        },
        error: function (jqXHR) {
            gotError(true);
            response(jqXHR.status + " (" + jqXHR.statusText + ")");
        }
    });
};

$(document).ready(function () {
    ko.applyBindings();
});
