/*
 * draw.js
 * Takes data and draws various representations of it
**/

var Draw = function() {};

// this renders a basic barchart based on earlier work on "They Work for You"
Draw.prototype.drawBarchart = function(dataset) {
  console.log('drawBarchart!');
  console.log(dataset);

  var xScale =
    d3.scaleLinear()
      .domain([0, 50])
      .range([0, 600]);

  var yScale =
    d3.scaleLinear()
      .domain([0, 50])
      .range([0, 600]);

  var w = 800;
  var h = 640;
  var barPadding = 1;
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
    .attr('x', function(d, i) {
      // return i * (w / dataset.length);
      return xScale(i * (w / dataset.length));
    })
    .attr('y', function(d) {
      // return h - d.count;
      return yScale(h - d.count);
    })
    .attr('width', w / dataset.length - barPadding)
    .attr('height', function(d) {
      return d.count;
    })
    .attr('class', function(d) {
      return d.name
        .toLowerCase()
        .replace(/[^a-z]/g, '')
    });

    // console.log(chart);

  /* text
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
  */
}
