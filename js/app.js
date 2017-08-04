/*
 * app.js
**/

var App = function() {};

App.prototype._init = function() {
  console.log('init!');

  var _this = this;
  var token = 'whKeouEYlyPpfzmYshRvfbFYlwqBtflZYLziIWyl';
  var base_url = 'https://api.discogs.com/users/davidTrussler/collection';
  var url = base_url + '/folders?token=' + token;

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
