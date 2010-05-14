var QuizfestViewsMetric = {
  name: 'quizfest_views',
  initialData: {quizfest: 0},
  interval: 50, // ms
  incrementCallback: function(view) {
		if (view.env.sld && view.env.sld == 'quizfest') {
			this.data.quizfest += 1;
		}
  }
};

for (var i in QuizfestViewsMetric)
  exports[i] = QuizfestViewsMetric[i];