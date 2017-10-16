var fb = require("fbScripts.js");

$("#loginButton").click(function() {
    fb.login();
    console.log("trying to log on")
});
