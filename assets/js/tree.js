var margin = {top: 20, right: 120, bottom: 20, left: 120},
    width = 960 - margin.right - margin.left,
    height = 800 - margin.top - margin.bottom;

var i = 0,
    duration = 750,
    root,
    arr,
    defaultPathColor = "#ccc"
    highlightColor = "red";

var tree = d3.layout.tree()
    .size([height, width]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });
var svg = d3.select("#nav-tree").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("json/flare.json", function(error, flare) {
  if (error) throw error;

  root = flare;
  root.x0 = height / 2;
  root.y0 = 0;
  refresh();
});

d3.select(self.frameElement).style("height", "800px");

function update(source) {
  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
      links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 60});

  // Update the nodes…
  var node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = d.name); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("id",function(d){return d.name;})
      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on("click", click);

  nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.append("text")
      .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
      .attr("r", function(d){ return d.val ? d.val : 4.5})
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text")
      .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("id",function(d){
        return "link-" + d.source.id + "-" + d.target.id;
      })//id of the link
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      });

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}
// Toggle children on click.
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update(d);
  selectNode(d.name);
}

// If the node is not open it will open it
function activate(d) {
  if (d.children) {

  } else {
    d.children = d._children;
    d._children = null;
  }
  update(d);
}

//If the node is open it will close it
function deactivate(d)
{
  if (d.children) {
    console.log("d.children");
    d._children = d.children;
    d.children = null;
  }
  update(d);
}

//refreshes the layout to the initial state
//closes all nodes except the initial node and clears all highlightings
function refresh()
{
    var collapse = function(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }
    d3.selectAll("path").style("stroke", "#ccc");//reset the color for all links
    root.children.forEach(collapse);
    update(root);
}

//highlights the path to the tag
function highlightTag(tag)
{
    arr = new Array();
    highlightPath(root,tag,true);
    arr.forEach(function(d){d3.selectAll(d).style("stroke", highlightColor);})
}

function clearTag(tag)
{
    arr = new Array();
    highlightPath(root,tag,false);
    arr.forEach(function(d){d3.selectAll(d).style("stroke", defaultPathColor);})
}

// TODO: handle deletion of tags
// dfs search to search the tag in the tree
//isHighLight->true : opens all closed nodes which lie in the path to the tag
//isHighLight->false : clears the tag in the tree and removes the highlighting
function highlightPath(node,tag,isHighLight) {
    var ret = false;
    if(node.name == tag)
    {
        return true;
    }
    children = node.children ? node.children : node._children;
    if(children)
    {
        children.forEach(function(d){
            var partOfPath = highlightPath(d,tag,isHighLight);//true if node->d is part of tag path
            ret = ret || partOfPath;
            if(partOfPath)
            {
                if(isHighLight)
                {
                    activate(node);
                }
                else
                {
                    deactivate(node);
                }
                arr.push("#link-" + node.name + "-" + d.name);
            }
        });
    }
    return ret;
}
