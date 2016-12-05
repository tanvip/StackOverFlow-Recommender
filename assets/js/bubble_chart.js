
function bubble_chart_init(tagName)
{
  var fileName;
  if(root.name == tagName)
  {
      fileName = "android";
  }
  else {
      fileName = getFileFromTag(root,tagName);
  }
  if(fileName.length < 1){alert("could not file keywords for specified tag");}
  d3new.select("#keyword-wordcloud").select('svg').remove();
  var svg = d3new.select("#keyword-wordcloud")
                  .append('svg')
                  .attr('width',960)
                  .attr('height',880);
  var  width = +svg.attr("width");
  var format = d3new.format(",d");
  var color = d3new.scaleOrdinal(d3new.schemeCategory20c);
  var pack = d3new.pack()
      .size([width, width])
      .padding(1.5);
      d3new.csv("DV_keywords_resut/" + fileName + "/4.txt", function(d) {
        d.value = +d.value;
        if (d.value) return d;
      }, function(error, classes) {
        if (error) throw error;

        var root = d3new.hierarchy({children: classes})
            .sum(function(d) { return d.value; })
            .each(function(d) {
              if (id = d.data.id) {
                var id, i = id.lastIndexOf(".");
                d.id = id;
                d.package = id.slice(0, i);
                d.class = id.slice(i + 1);
              }
            });

        var node = svg.selectAll(".node")
          .data(pack(root).leaves())
          .enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

        node.append("circle")
            .attr("id", function(d) { return d.id; })
            .attr("r", function(d) { return d.r; })
            .attr("globalAlpha", 0.5)
            .style("fill", function(d) { return color('#a0c1f7'); });

        node.append("clipPath")
            .attr("id", function(d) { return "clip-" + d.id; })
          .append("use")
            .attr("xlink:href", function(d) { return "#" + d.id; });

        node.append("text")
            .attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"; })
          .selectAll("tspan")
          .data(function(d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
          .enter().append("tspan")
            .attr("x", -10)
            .attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
            .text(function(d) { return d; });

        node.append("title")
            .text(function(d) { return d.id + "\n" + format(d.value); });
      });
}
