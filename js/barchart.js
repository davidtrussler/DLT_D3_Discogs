/*
 * barchart.js
 * Takes data and renders a basic barchart
 * based on earlier work on "They Work for You"
**/

var Barchart = function() {};

// this
Barchart.prototype.draw = function(dataset) {
  console.log('draw!');
  console.log(dataset);

  var w = 800;
  var h = 640;
  var min = 0;
  var max = d3.max(dataset, function(d) {return d.count;});

  var xScale =
    d3.scaleLinear()
      .domain([min, max])
      .range([0, w]);

  var svg = d3
    .select('#svg-container')
    .append('svg')
    .attr('width', w)
    .attr('height', h)
    .attr('class', 'barchart');

  // barchart
  var chart = svg
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('y', function(d, i) {
      return i * (h / dataset.length);
    })
    .attr('x', 0)
    .attr('height', (h / dataset.length))
    .attr('width', function(d) {
      return xScale(d.count);
    })
    .attr('class', function(d) {
      return d.name
        .toLowerCase()
        .replace(/[^a-z]/g, '')
    });

  svg
    .selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d) {
      return d.name;
    })
    .attr('x', 0)
    .attr('y', function(d, i) {
      return ((i * (h / dataset.length)) + (h / dataset.length / 1.5));
    })
    .attr('text-anchor', 'left')
    .attr('font-family', 'sans-serif')
    .attr('font-size', '1em');
}
