let baseURL = "http://localhost:3000";

if (window.cordova) {
  baseURL = 'http://nodejs-mongo-persistent-ttads-tp3-2017.a3c1.starter-us-west-1.openshiftapps.com';
  baseURL = "http://192.168.1.6:3000";
}

export default {
  baseURL
};
