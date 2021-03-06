// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    console.log('play called');
    this.trigger('play', this);
  },
  enqueue: function() {
    console.log('triggering enqueue 2');
    this.trigger('enqueue', this);
  },
  dequeue: function() {
    console.log('dequeuing');
    this.trigger('dequeue', this);
  },
  ended: function() {
    console.log('End Triggered');
    this.trigger('ended', this);
  }
});
