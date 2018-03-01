let baseURL = "http://localhost:3000/api";

if (window.cordova) {
  baseURL = "http://192.168.1.6:3000/api";
  // baseURL = "http://nodejs-mongo-persistent-ttads-handball.a3c1.starter-us-west-1.openshiftapps.com/api"
}

export default {
  productionTip: true,
  baseURL
};
