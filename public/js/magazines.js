if(!Hummingbird) { var Hummingbird = {}; }

Hummingbird.magGraphs = {};

Hummingbird.getMagazines = function() {
	var magazines = [{sld: "j-14", name: "J-14", key: 'j14'},
									 {sld: "twistmagazine", name: "Twist Magazine", key: 'twist'},
									 {sld: "mmm-mag", name: "MMM Magazine", key: 'mmm'},
									 {sld: "quizfest", name: "Quizfest", key: 'qf'}];
	$.each(magazines, function() {
		var editorialImage = "public/images/" + this.key + ".png";
		var name = this.name;

		var magDiv = $("<div id='mag_" + this.key + "' data-id='" + this.key + "' class='magazine'></div>");
		magDiv.append("<img class='editorial' src='" + editorialImage + "'/>");
		// magDiv.append("<h2>" + name + "</h2>");

		var graph = $("<div class='hummingbird_graph'></div>");
		graph.append("<div class='req_s'><span class='value'>0</span> pages/sec</div>");

		var canvas = $("<canvas width='185' height='70'></canvas>");
		graph.append(canvas);
		magDiv.append(graph);
		$("#magazines").append(magDiv);
		var magGraph = new Hummingbird.Graph(graph, { ratePerSecond: 2, initialScope: 200, backgroundImage: editorialImage, showBackgroundBars: false });
		Hummingbird.magGraphs[this.key] = magGraph;
	});

	var canvasWidth = $("#log canvas").width() - 8;
	var magsPerRow = Math.floor(canvasWidth / 190);
	var extraSpace = canvasWidth % 190;
	var extraSpacePerSale = (extraSpace + 10) / (magsPerRow - 1);

	$("#magazines div.magazine").css({marginRight: extraSpacePerSale + 10});
	$("body").css({minWidth: $("#log").width()});
};