 /*
 * piechart.js
 * Takes data and renders a piechart
**/

var Piechart = function() {};

Piechart.prototype.draw = function(dataset) {
  var w = 800;
  var h = 800;

  // applies d3.pie to the data
  // creates an array of objects based on dataset
  // each containing: original data, start/end angles etc.
  var arcs = d3.pie().value(
    function(d) {
      return d.count;
    }
  )(dataset);

  var arc = d3.arc()
    .innerRadius(0)
    .outerRadius(400)
    .startAngle(
      function(d) {
        return d.startAngle;
      }
    )
    .endAngle(
      function(d) {
        return d.endAngle;
      }
    );

  var svg = d3
    .select('#svg-container')
    .append('svg')
    .attr('width', w)
    .attr('height', h)
    .append('g')
    .attr('transform', 'translate(' + w/2 + ', ' + h/2 + ')');

  svg
    // select all paths
    .selectAll('path')
    // pass array of arc objects to each path
    .data(arcs)
    .enter()
    // create a path of each of the arcs
    .append('path')
    // call arc on each of those
    .attr('d', function(d) {
      return arc(d);
    });
}
