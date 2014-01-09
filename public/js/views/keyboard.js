// Example view implementation
app.KeyboardView = Backbone.View.extend({
  // bind events outside of the view in initialize

  el: $('#keyboardInput'),

  template: _.template( $('#tplKeyboardInput').html() ),

  initialize: function() {

    this.collection.on('add remove',this.render,this);
    //this.render();

  },

  render: function() {

    var data = {
      keys: this.collection.models
    }

    this.$el.html( this.template( data ) );

  }

});