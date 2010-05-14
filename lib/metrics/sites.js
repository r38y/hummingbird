var SitesMetric = {

  name: 'sites',

  initialData: { sites: {} },

  interval: 500, // ms
	
  incrementCallback: function(view) {
    if(view.env.site) {
			var site = view.env.site;
      this.data.sites[site] = (this.data.sites[site] || 0) + 1;
      this.minuteData["sites."+site] = (this.minuteData["sites."+site] || 0) + 1;
    }
  }
};

for (var i in SitesMetric)
  exports[i] = SitesMetric[i];