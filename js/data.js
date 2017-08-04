/*
 * data.js
**/

var Data = function() {
  this.base_url = 'https://api.discogs.com/users/davidTrussler/collection';
  this.token = 'whKeouEYlyPpfzmYshRvfbFYlwqBtflZYLziIWyl';
};

Data.prototype.getCategories = function() {
  var url = this.base_url + '/folders?token=' + this.token;

  $.get(url, function(response) {
    console.log(response.folders);

    // error handling etc.
  });
}
