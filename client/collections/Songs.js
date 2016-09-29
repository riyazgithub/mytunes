// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  initialize: function() {

    var addSongs = function(d) { 
      var me = this;
      d.results.forEach(function(v) {
        me.add({title: v.title, artist: v.artist, url: v.url});
      });
    };

    $.ajax({
        url: 'https://api.parse.com/1/classes/songs/',
        data: null,
        success: addSongs.bind(this),
        error: function(e) { console.log(e); },
        dataType: "JSON"
    });

    //this.on('add', function() { console.log(this)}, this);

  }

});