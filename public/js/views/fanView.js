var app = app || {};

app.FanView = Backbone.View.extend({
  tagName: 'li',
  className: 'fan',
  template: _.template( $('#fan-template').html() ),
  render: function(){
    this.$el.empty();
    var html = this.template( this.model.toJSON() );
    var $html = $( html );
    this.$el.append( $html );
  },
  events: {
    'click button.remove': 'removeFan'
  },
  removeFan: function(){
    this.model.destroy();
    this.$el.remove();
  }
});
