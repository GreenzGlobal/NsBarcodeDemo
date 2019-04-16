import Vue from "nativescript-vue";
import routes from "./routes";

//import BackendService from "./services/backend-services";
//const backendService = new BackendService();
//Vue.prototype.$backendService = backendService;

var firebase = require("nativescript-plugin-firebase");
firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
})
.then(
    function(instance) {
        console.log("firebase.init done");
    },
    function(error) {
        console.log("firebase.init error: " + error);
    }
);

new Vue({
    render: h => h('frame', [h(routes.list)])     //render: h => h('frame', [h(backendService.isLoggedIn() ? routes.home : routes.home)])
}).$start();
