var J14ViewsMetric = {
  name: 'j14_views',
  initialData: {j14: 0},
  interval: 50, // ms
  incrementCallback: function(view) {
		if (view.env.sld && view.env.sld == 'j-14') {
			this.data.j14 += 1;
		}
  }
};

for (var i in J14ViewsMetric)
  exports[i] = J14ViewsMetric[i];