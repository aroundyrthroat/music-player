/*these assign names to very simple getting functions in order to make the more complex functions easier to type and understand*/
const nowplaying = document.getElementById("nowplaying");
const info = document.getElementById("info");
const trackcurrtime = document.getElementById("current-time");
const slider = document.getElementById("slider");
const trackduration = document.getElementById("duration");
const prevtrack = document.getElementById("prev-btn");
const playpause = document.getElementById("playpause-btn");
const nexttrack = document.getElementById("next-btn");
const audio = document.getElementById("mu");

/*your track list! to add more than 3 songs just add another one of these -comma at the end included!!

{
    path: " audio source here, highly recommend using catbox for these",
    title: " song name here ",
    artist: " artist name here ",
  },  
  
and fill it in! make sure you place it before the bracket and semicolon that ends the track list */
let track_index = 0;
let track_list = [
  {
    path: "https://files.catbox.moe/og39hn.mp3",
    title: "Still Into You",
    artist: "Paramore",
  },
  {
    path: "https://files.catbox.moe/hsphac.mp3",
    title: "Habits (Stay High)",
    artist: "Tove Lo",
  },
  {
   path: "https://files.catbox.moe/qnmvb8.mp3",
   title: "I Keep A Diary",
   artist: "Braid",
  },
];

/*makes the play pause button function*/
function playPauseTrack() {
  if (audio.paused == true) {
    audio.play();
    playpause.innerHTML =
      "⏸";
  } else if (audio.paused == false) {
   audio.pause();
   playpause.innerHTML =
      "▶";
  }
}

function nextTrack() {
  /* Goes back to the first track if the current one is the last in the track list */
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
 
  /*loads and plays the next track*/
  loadTrack(track_index);
  audio.play();
  playpause.innerHTML =
      "⏸";
}
 
function prevTrack() {
  /* Goes back to the first track if the current one is the last in the track list */
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length - 1;
   
  /*loads and plays the previous track*/
  loadTrack(track_index);
  audio.play();
  playpause.innerHTML =
      "⏸";
}

/*makes the tracks duration and current time to display in a minutes:seconds format*/
const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
}

/*gets the current time of the audio track and displays it*/
audio.addEventListener('loadedmetadata', () => {
trackcurrtime.innerHTML = calculateTime(audio.currentTime);
});

audio.addEventListener('timeupdate', () => {
  trackcurrtime.innerHTML = calculateTime(audio.currentTime);
});

/*gets the current time of the audio track and makes the slider move with it*/
slider.addEventListener('input', () => {
  trackcurrtime.innerHTML = calculateTime(slider.value);
});

audio.addEventListener('timeupdate', () => {
  slider.value = Math.floor(audio.currentTime);
});

 /*gets the full length of the audio track and displays it*/
audio.addEventListener('loadedmetadata', () => {
trackduration.innerHTML = calculateTime(audio.duration);
slider.max = Math.floor(audio.duration);
});

/* resets everything to get ready for the next track*/
function resetValues() {
  trackcurrtime.innerHTML = "0:00";
  duration.innerHTML = "0:00";
  slider.value = 0;
}

/* actually loads a new track and displays all its info*/
function loadTrack(track_index) {
  resetValues();
 
  /*loads the track*/
  audio.src = track_list[track_index].path;
  audio.load();
 
  /*gives the title and artist of the track*/
info.innerHTML =
  "<b>" + track_list[track_index].title + "</b> <br> <small>" + track_list[track_index].artist + "</small>";
  
  nowplaying.innerHTML = "playing " + (track_index + 1) + " of " + track_list.length;
 
  /* moves on to the next track when the current one ends*/
  audio.addEventListener("ended", nextTrack);
}

/*wow beautiful... just like this the whole thing starts*/
loadTrack(track_index);
