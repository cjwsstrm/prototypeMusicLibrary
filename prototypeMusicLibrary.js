function Library (name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
}    


function Playlist (name) {
    this.name = name;
    this.tracks = [];
    this.overallRating = function () {
          var avg = 0;
          for (var i = 0; i < this.tracks.length; i++) {
            avg += this.tracks[i].rating;
          }
          function round(number) {
            return Math.round(number * 100) / 100;
          }
          if (avg === 0) {
            return null;
          } else {
            return round(avg / this.tracks.length);
          }
        }
        
        
    this.totalDuration = function() {
        var summed = 0;
        for (var i = 0; i < this.tracks.length; i++) {
            summed += this.tracks[i].length;
        }    
        return summed / 60;
    };;     
    
}    

function Track (title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
}    


Library.prototype.addPlaylist = function (playlist) {
    this.playlists.push(playlist);
}    

Playlist.prototype.addTrack = function (track) {
    this.tracks.push(track);    
}    

// Library
const music = new Library('TheBestLibrary', 'CJ');

// Playlist
const myPlaylist = new Playlist('TheBestPlaylist');

// Songs
const microMachines = new Track('Micromachines', 5, 215)
const heavyDirtysoul = new Track ('Heavydirtysoul', 4, 236)
const pain = new Track ('Pain', 5, 326)
const echoChamber = new Track ('Echo Chamber', 5, 219)

myPlaylist.addTrack(microMachines);
myPlaylist.addTrack(heavyDirtysoul);
myPlaylist.addTrack(pain);
myPlaylist.addTrack(echoChamber);
music.addPlaylist(myPlaylist);
console.log(myPlaylist);
console.log(music);

console.log("TOTAL DURATION");
console.log(myPlaylist.totalDuration());

console.log('OVERALL RATING');
console.log(myPlaylist.overallRating());

