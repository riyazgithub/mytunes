// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('dequeue', function(song) {
      this.remove(song);
      if (this.length > 0) this.playFirst();
      if (this.length === 0) if ($('audio')[0]) $('audio')[0].pause();
    }, this);

    this.on('ended', function(song) {
      console.log(this.length);
      this.shift();
      console.log(this.length);
      if (this.length > 0) this.playFirst();
    }, this);

    this.on('add', function(song) {
      this.add(song);
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    /*this.on('play', function(song) {
      console.log('going to play ',song);
      this.playFirst(song);
    });*/
  },

  playFirst: function() {
      this.at(0).play();
  }

});