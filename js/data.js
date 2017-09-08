/*
 * data.js
 * gets the data requested via ajax and passes it on to the required drawing class
**/

var Data = function() {
  this.base_url = 'https://api.discogs.com/users/davidTrussler/collection';
  this.token = 'whKeouEYlyPpfzmYshRvfbFYlwqBtflZYLziIWyl';
};

Data.prototype.getCategories = function() {
  console.log('getCategories!');

  var _this = this;
  var url = this.base_url + '/folders?token=' + this.token;

  /*
  $.get(url, function(response) {
    _this._parseResponse(response);

    // error handling etc.
  });
  */

   // _this._parseResponse();
}

Data.prototype._parseResponse = function(response) {
  // var categories = [];

  /* remove categories: all, uncategorised
  response.folders.forEach(function(folder) {
    if (folder.name !== 'All' && folder.name !== 'Uncategorized') {
      categories.push(folder);
    }
  });
  */

  // var barchart = new Barchart();
  // var piechart = new Piechart();
  var force = new Force();

  console.log('force: ', force);

  // barchart.draw(categories);
  // piechart.draw(categories);
  force.draw();
}
