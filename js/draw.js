/*
 * draw.js
 * Takes data and draws various representations of it
**/

var Draw = function() {};

// this renders a basic barchart based on esarlier work on "They Work for You"
Draw.prototype.drawBarchart = function(dataset) {
  console.log('drawBarchart!');
  console.log(dataset);

  var w = 500;
  var h = 350;
  var barPadding = 1;
  var svg = d3
    .select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

  svg
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', function(d, i) {
      return i * (w / dataset.length);
    })
    .attr('y', function(d) {
      return h - d.count;
    })
    .attr('width', w / dataset.length - barPadding)
    .attr('height', function(d) {
      return d.count;
    })
    .attr('class', function(d) {
      return d.name
              .toLowerCase()
              .replace(/[^a-z]/g, '');
    });

  svg
    .selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d) {
      return d.name;
    })
    .attr('x', function(d, i) {
      return (i * (w / dataset.length)) + ((w / dataset.length - barPadding) / 2);
    })
    .attr('y', function(d) {
      return d.count;
    })
    .attr('text-anchor', 'middle')
    .attr('font-family', 'sans-serif')
    .attr('font-size', '1em');
}
