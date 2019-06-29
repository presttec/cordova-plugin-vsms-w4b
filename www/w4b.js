var exec = require('cordova/exec');

var W4b = {
    send: function(send_to, successCB, errorCB) {
        console.warn("Sending w4b : " + send_to);
        exec(successCB, errorCB, "W4b", "send", [send_to]);
    }
};

module.exports = W4b;