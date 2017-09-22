 /*
 * force.js
 * Explores the force layout
**/

var Force = function() {};

Force.prototype.draw = function() {
  console.log('draw!');

  var w = 800;
  var h = 600;
  var nodes = [
    {num: 100},
    {num: 200},
  ];
  // var links = [
  //   {
  //     source: 0,
  //     target: 1
  //   }
  // ];
  var svg = document.createElement('svg');
  var simulation = d3.forceSimulation(nodes)
    .on('tick', ticked);

  svg.style.width = w + 'px';
  svg.style.height = h + 'px';

  document.getElementById('svg-container').appendChild(svg);

  function ticked() {
    // console.log('ticked!');

    var u = d3.select(svg)
      .selectAll('circle')
      .data(nodes);

    u.enter()
      .append('circle')
      .attr('r', 10)
      .merge(u)
      .attr('cx', function(d) {
        return d.num;
      })
      .attr('cy', function(d) {
        return d.num;
      });

    u.exit().remove();
  }
}
