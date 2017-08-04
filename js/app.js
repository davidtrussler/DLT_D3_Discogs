/*
 * app.js
**/

var App = function() {};

App.prototype._init = function() {
  this._setUpLinks();
}

App.prototype._setUpLinks = function() {
  console.log('_setUpLinks!');

  var $links = $(document).find('a');
  var data = new Data();

  $links.each(function() {
    var action = this.href.split('/')[this.href.split('/').length - 1];

    $(this).click(function(e) {
      e.preventDefault();

      data.getData(action);
    });
  });
}

$(document).ready(function() {
  var app = new App();
  app._init();
});
