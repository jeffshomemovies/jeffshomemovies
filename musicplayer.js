const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');

const title = document.querySelector('#title');
const artist = document.querySelector('#artist');
const album = document.querySelector('#album');
const duration = document.querySelector('#duration');

const cover = document.querySelector('#cover');
const tracklist = document.querySelector('.playlist');

//Song list
var songlist = {
                "songs": [
                {
                    "name": "welcome :)",
                    "artist": "hi !!!",
                    "album": "jeff's favs",
                    "duration": "04:20",
                    "url": "https://64.media.tumblr.com/da88f2e22df6f0f0538e6af860fd4a4b/756b89b50a525653-f9/6119360958047ba38712e2db5657319c2a280863.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/oingo_boingo_unreleased.jpg"
                }, //0 Main site playlist
                {
                    "name": "dilbert 2",
                    "artist": "dilbert",
                    "album": "jeff's favs",
                    "duration": "04:01",
                    "url": "https://files.catbox.moe/0rnm28.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/oingo_boingo_unreleased.jpg"
                }, //1
                {
                    "name": "hero",
                    "artist": "enrique iglesias",
                    "album": "escape",
                    "duration": "04:23",
                    "url": "https://files.catbox.moe/59itm4.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/mange_tout.jpg"
                }, //2
                {
                    "name": "king of the hill",
                    "artist": "hank",
                    "album": "bobby in the flesh",
                    "duration": "04:02",
                    "url": "https://files.catbox.moe/ks6nd6.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/so-lo.jpg"
                }, //3
                {
                    "name": "trendy",
                    "artist": "reel big fish",
                    "album": "turn the radio off",
                    "duration": "02:24",
                    "url": "https://files.catbox.moe/37kpil.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/in_no_sense_nonsense.jpg"
                }, //4
                {
                    "name": "firework",
                    "artist": "katy perry",
                    "album": "teenage dream",
                    "duration": "03:54",
                    "url": "https://files.catbox.moe/rdxvqi.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/human_racing.jpg"
                }, //5
                {
                    "name": "mcdonalds in the pentagon",
                    "artist": "silly stu",
                    "album": "stus silly stunes",
                    "duration": "01:05",
                    "url": "https://files.catbox.moe/aahr80.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/new_toy.jpg"
                }, //6
                {
                    "name": "hands",
                    "artist": "hands",
                    "album": "jeff's favs 3",
                    "duration": "01:49",
                    "url": "https://files.catbox.moe/qfw6pa.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/shout.jpg"
                }, //7
                {
                    "name": "gay sex",
                    "artist": "xxx",
                    "album": "jeff's faves 69",
                    "duration": "03:15",
                    "url": "https://files.catbox.moe/fiaa9q.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/new_toy.jpg"
                }, //8
                {
                    "name": "fearless",
                    "artist": "taylor swift",
                    "album": "fearless",
                    "duration": "04:05",
                    "url": "https://files.catbox.moe/qwaoni.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/dead_mans_party.jpg"
                }, //9
                {
                    "name": "caress me down",
                    "artist": "sublime",
                    "album": "sublime",
                    "duration": "03:33",
                    "url": "https://files.catbox.moe/6dvo6k.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/shout.jpg"
                }, //10
                {
                    "name": "who we are........",
                    "artist": ".......",
                    "album": "............",
                    "duration": "49:32",
                    "url": "https://files.catbox.moe/ic6gnt.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/oingo_boingo_unreleased.jpg"
                }, //11
                {
                    "name": "goodbye!!",
                    "artist": "i cant get to sleep",
                    "album": "i think about the implications",
                    "duration": "03:46",
                    "url": "https://files.catbox.moe/h53a9r.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/form_and_control.jpg"
                } //12
              ]
};

JSON.stringify(songlist);

//Keep track of the songs
let songIndex = 0;

//Initially load song info DOM
loadSong(songIndex)

//Update song details
function loadSong(songIndex) {
    title.innerText = songlist.songs[songIndex].name;
    artist.innerText = songlist.songs[songIndex].artist;
    album.innerText = songlist.songs[songIndex].album;
    duration.innerText = songlist.songs[songIndex].duration;
    
    audio.src = songlist.songs[songIndex].url;
    cover.src = songlist.songs[songIndex].cover_art_url;
    audio.volume = 0.5;
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.innerHTML.replace('<img src="https://blob.gifcities.org/gifcities/NR2XZ3AHSIBYXOHVXTDUUBNINJOFZTY7.gif">')
    
    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    
    audio.pause()
}

function prevSong() {
    songIndex--
    
    if(songIndex < 0) {
        songIndex = songlist.songs.length - 1
    }
    
    loadSong(songIndex)
    
    playSong()
}

function nextSong() {
    songIndex++
    
    if(songIndex > songlist.songs.length - 1) {
        songIndex = 0
    }
    
    loadSong(songIndex)
    
    playSong()
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    console.log(width)
    const clickX = e.offsetX
    const duration = audio.duration
    
    audio.currentTime = (clickX / width) * duration
    console.log(e.srcElement)
}

function setTrack(index) {
    loadSong(index);
    playSong();
    songIndex = index;
    
    //Update the highlighted track
    let tracklistItems = tracklist.getElementsByTagName('li');
    for(i = 0; i < songlist.songs.length; i++) {
        let trackIndex = tracklistItems[i].getAttribute('data-index');
        if(trackIndex == songIndex) {
            tracklistItems[i].className += " activeSong";
        } else {
            tracklistItems[i].className = tracklistItems[i].className.replace(" activeSong", "");
        }
    }
}

function blub() {
    var bubbles = new Audio('https://files.catbox.moe/gcvi71.wav');
    bubbles.volume = 0.2;
    bubbles.play();
}

// Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    
    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

//Change song events
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);

//Tracklist
let tracklistItems = tracklist.getElementsByTagName('li');
for(i = 0; i < songlist.songs.length; i++) {
    let trackIndex = tracklistItems[i].getAttribute('data-index');
    
    let tracklistItemTitle = tracklistItems[i].getElementsByClassName('trackTitle');
    let tracklistItemArtist = tracklistItems[i].getElementsByClassName('trackArtist');
    let tracklistItemDuration = tracklistItems[i].getElementsByClassName('trackDuration');
    
    tracklistItemTitle[0].innerHTML = songlist.songs[trackIndex].name;
    tracklistItemArtist[0].innerHTML = songlist.songs[trackIndex].artist;
    tracklistItemDuration[0].innerText = songlist.songs[trackIndex].duration;
    
    if(trackIndex == songIndex) {
        tracklistItems[i].className += " activeSong";
    } else {
        tracklistItems[i].className = tracklistItems[i].className.replace(" activeSong", "");
    }
}

playSong();
