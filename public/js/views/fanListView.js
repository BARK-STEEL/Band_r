var app = app || {};

app.FanListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo( this.collection, 'add', this.render);
  },
  render: function(){
    this.$el.empty();
    var view;
    var fans = this.collection.models;
    for (var i = 0; i < fans.length; i++){
      view = new app.FanView({model: fans[i]});
      view.render();
      this.$el.append( view.$el );
    }
  }
});
