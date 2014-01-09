app.MainView = Backbone.View.extend({

	el : $('#pageWrapper'),

	initialize : function() {

    this.buildPage();

  },

  buildPage : function(){

  	app.keyboardView = new app.KeyboardView({
      collection: app.activeKeys
    });

  }
});

app.mainView = new app.MainView({
	//add model that is the appState loaded from the backend later
});