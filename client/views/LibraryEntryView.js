// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function(evt) {
      //if (!player.paused && player.duration > 0) {
        //console.log(this);
      //if (false) {
        console.log('triggering enqueue');
        this.model.enqueue();
      //} else {
        //this.model.play();
      //}
    }
  },

  initialize: function() {
    //console.log(this);
    //console.log(this.collection);
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
