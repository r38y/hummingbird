if(!Hummingbird) { var Hummingbird = {}; }

Hummingbird.magGraphs = {};

Hummingbird.getMagazines = function() {
  // $.getJSON("/sale_list", function(data) {
    // data.data.active_sales.concat(data.data.upcoming_sales);
		var magazines = [{sld: "j-14", name: "J-14", key: 'j14'}, 
										 {sld: "quizfest", name: "Quizfest", key: 'qf'},
										 {sld: "twistmagazine", name: "Twist Magazine", key: 'twist'},
										 {sld: "mmm-mag", name: "MMM Magazine", key: 'mmm'}];
    $.each(magazines, function() {
      // var editorialImage = "http://www.gilt.com" + this.sale_editorial_image;
			var editorialImage = "";
      var name = this.name;
      // var url = "http://www.gilt.com/s/" + this.url_key;

      var magDiv = $("<div id='mag_" + this.key + "' data-id='" + this.key + "' class='sale'></div>");
      // saleDiv.append("<img class='editorial' src='" + editorialImage + "'/>");
      magDiv.append("<h2>" + name + "</h2>");

      var graph = $("<div class='hummingbird_graph'></div>");
      graph.append("<div class='req_s'><span class='value'>0</span> pages/sec</div>");

      var canvas = $("<canvas width='185' height='70'></canvas>");
      graph.append(canvas);
      magDiv.append(graph);
      $("#sales").append(magDiv);
      var magGraph = new Hummingbird.Graph(graph, { ratePerSecond: 2, initialScope: 200, backgroundImage: editorialImage, showBackgroundBars: false });
      Hummingbird.magGraphs[this.key] = magGraph;
    });

    var canvasWidth = $("#log canvas").width() - 8;
    var magsPerRow = Math.floor(canvasWidth / 190);
    var extraSpace = canvasWidth % 190;
    var extraSpacePerSale = (extraSpace + 10) / (magsPerRow - 1);

    $("#sales div.sale").css({marginRight: extraSpacePerSale + 10});
    $("body").css({minWidth: $("#log").width()});
  // });
};

// Hummingbird.resortSales = function() {
//   var sortedSales = $("div#sales div.sale").sorted({
//     by: function(a) {
//       return parseFloat(a.find('div.hummingbird_graph').attr('data-average')) || -1;
//     }
//   });
// 
//   $.each(sortedSales, function() {
//     $(this).prependTo("div#sales");
//   });
// };