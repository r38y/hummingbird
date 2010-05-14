var sld_key_map = {"j-14": "j14", "quizfest": "qf", "twistmagazine": "twist", "mmm-mag": "mmm"}

var MagazinesMetric = {

  name: 'magazines',

  initialData: { magazines: {} },

  interval: 500, // ms
	
	
  incrementCallback: function(view) {
    if(view.env.sld) {
			var key = sld_key_map[view.env.sld];
      this.data.magazines[key] = (this.data.magazines[key] || 0) + 1;
      this.minuteData["magazines."+key] = (this.minuteData["magazines."+key] || 0) + 1;
    }
  }

  // aggregateCallback: function(item) {
  //   item.tmpSales = item.sales;
  //   item.sales = [];
  //   for(sale in item.tmpSales) {
  //     if(item.tmpSales[sale] > 10) {
  //       item.sales.push({ url_key: sale,
  //                         views: item.tmpSales[sale] });
  //     }
  //   }
  //   delete item.tmpSales;
  // 
  //   // Sort by sale numbers descending
  //   item.sales = item.sales.sort(function(a, b) {
  //     if(a.views == b.views) {
  //       return 0;
  //     } else if(a.views > b.views) {
  //       return -1;
  //     } else { return 1; }
  //   });
  // }

};

for (var i in MagazinesMetric)
  exports[i] = MagazinesMetric[i];