// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('dequeue', function() {
      console.log(this);
    }, this);
    this.on('enqueue', function(song) {
      console.log(song);
      this.add(song);
      this.playFirst(song);
    }, this);
  },

  playFirst: function(song) {
    //song.play();
    console.log('asd');
  }

});