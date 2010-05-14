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
};

for (var i in MagazinesMetric)
  exports[i] = MagazinesMetric[i];