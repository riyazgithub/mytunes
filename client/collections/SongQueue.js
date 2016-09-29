// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('dequeue', function(song) {
      this.remove(song);
    }, this);

    this.on('add', function(song) {
      this.add(song);
      // TODO: NEXT: IF it is the first song in the queue...
      this.playFirst(song);
    }, this);

    /*this.on('play', function(song) {
      console.log('going to play ',song);
      this.playFirst(song);
    });*/
  },

  playFirst: function(song) {
    
    song.play();
  }

});