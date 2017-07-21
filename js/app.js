/*
 * app.js
**/

var App = function() {};

App.prototype._init = function() {
  console.log('init!');

  var _this = this;
  var url = 'https://api.discogs.com/users/davidTrussler/collection/folders/0/releases?per_page=500';

  $.get(url, function(data) {
    _this._doData(data);
  });
}

App.prototype._doData = function(data) {
  console.log('_doData!');
  console.log(data);
}

$(document).ready(function() {
  var app = new App();
  app._init();
});
