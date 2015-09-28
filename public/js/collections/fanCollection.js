var app = app || {};

app.FanCollection = Backbone.Collection.extend({
  url: '/api/fans',
  model: app.Fan,
});
