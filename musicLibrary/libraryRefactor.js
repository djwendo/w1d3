var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
    for (var item in this.playlists) {
      var list = this.playlists[item];
      var id = list.id;
      var name = list.name;
      var track = list.tracks.length;
      console.log(id + ": " + name + " - " + track + " tracks");
    }
  },
  printTracks: function() {
    for (var item in this.tracks) {
      var track = this.tracks[item];
      var id = track.id;
      var name = track.name;
      var artist = track.artist;
      var album = track.album;
      console.log(id + ": " + name + " by " + artist + " (" + album + ")");
    }
  },
  printPlaylist: function(playlistId) {
    var playlist = this.playlists[playlistId];
    var id = playlist.id;
    var name = playlist.name;
    var track = playlist.tracks.length;
    console.log(id + ": " + name + " - " + track + " tracks");

    for (var songs in playlist.tracks) {
      var track = this.tracks[playlist.tracks[songs]];
      var id = track.id;
      var name = track.name;
      var artist = track.artist;
      var album = track.album;
      console.log(id + ": " + name + " by " + artist + " (" + album + ")");
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    var playlist = this.playlists[playlistId];
    playlist.tracks.push(trackId);
  },
  uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    var id = this.uid();
    this.tracks[id] = {id: id, name: name, artist: artist, album: album};
  },
  addPlaylist: function (name) {
    var id = this.uid();
    this.playlists[id] = {id: id, name: name};
  },
}

console.log("Call printPlaylists");
library.printPlaylists();

console.log(" ");

console.log("Call printTracks");
library.printTracks();

console.log(" ");

console.log("Call printPlaylist");
library.printPlaylist('p01');

console.log(" ");

console.log("Call addTrackToPlaylist");
library.addTrackToPlaylist('t03', 'p01');

console.log(" ");

console.log("Call addTrack ");
library.addTrack('Pizza', 'Hungry People', 'So Tired');

console.log(" ");

console.log("Call addPlaylist");
library.addPlaylist('Jock Jams');



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}