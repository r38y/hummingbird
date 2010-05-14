if(!Hummingbird) { var Hummingbird = {}; }

Hummingbird.siteGraphs = {};

Hummingbird.getSites = function() {
	var sites = ['inquizzitor', 'pollvault', 'winit', 'editorial'];
	$.each(sites, function() {
		var name = this;

		var siteDiv = $("<div id='site_" + name + "' data-id='" + name + "' class='site'></div>");
		siteDiv.append("<h2>" + name + "</h2>");

		var graph = $("<div class='hummingbird_graph'></div>");
		graph.append("<div class='req_s'><span class='value'>0</span> pages/sec</div>");

		var canvas = $("<canvas width='185' height='70'></canvas>");
		graph.append(canvas);
		siteDiv.append(graph);
		$("#sites").append(siteDiv);
		var siteGraph = new Hummingbird.Graph(graph, { ratePerSecond: 2, initialScope: 200, showBackgroundBars: false });
		Hummingbird.siteGraphs[name] = siteGraph;
	});

	var canvasWidth = $("#log canvas").width() - 8;
	var magsPerRow = Math.floor(canvasWidth / 190);
	var extraSpace = canvasWidth % 190;
	var extraSpacePerSale = (extraSpace + 10) / (magsPerRow - 1);

	$("#sites div.site").css({marginRight: extraSpacePerSale + 10});
	$("body").css({minWidth: $("#log").width()});
};