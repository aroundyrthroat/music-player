# CURRENTLY STILL IN TESTING DONT USE
# music-player
an embedabble music player using css html and js, built for neocities but applicable elsewhere in theory.

# Limitations
by default the music player can not get smaller than 130px by 130px without things getting weird and squished. You can *theoretically* change this by messing around with the css. 

# Adding the player to your site! (the most simple no-js way)
first make sure you understand its limitations by checking out the limitations section of this readme (found below)

01. make sure that you have a div to place the player in. It automatically will adjust itself to fill the width & height of the div you place it in.
   
02. add this to your html:
```
    <div id="" class="playercontainer">
      
      <div id="nowplaying" class="now-playing"> now playing x of y</div>
      
        <audio id="mu" src="" style="display: hidden;" preload=”metadata”></audio>

        <marquee id="info" class="info" scrollamount="1"> song title here </marquee>

        <div class="trackdurationcontrols">
          <div id="current-time" class="time">0:00</div>
          <div class="bar"><input type="range" id="slider" min="0" max="100" value="0"></div>
          <div id="duration" class="time">0:00</div>
        </div>

        <div class="trackcontrols">
          <button id="prev-btn" onclick="prevTrack()">⏮</button>
          <button id="playpause-btn" onclick="playPauseTrack()">▶</button>
          <button id="next-btn" onclick="nextTrack()">⏭</button>
        </div>

        <div class="creditstooltip">◦<span class="playercredits">music player by: ibroughtyoumybullets.neocities.org</span></div>
      
        <script type="text/javascript">
            /*your track list! to add more than 3 songs just add another one of these, comma at the end included!!
            
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
              {
                path: "https://files.catbox.moe/x3lwwh.mp3",
                title: "Stolen Dance",
                artist: "Milky Chance",
              },
            ];
        </script>
        <script src="https://cdn.jsdelivr.net/gh/aroundyrthroat/music-player@main/musicplayer.js"></script>
      </div>
```
notice that there are two script tags- be sure to never switch the order of these or mess with the second one. Also do not change the id's of anything- it is nescessary that they stay the same for js to work, i would also advise against changing the class, but doing that shouldnt break anything.

03. replace the default tracks with your own- adding or taking away as many as you'd like!
   
04. add this to your css, or but it in your html between style tags (<style></style>):
   ```
 /** if inserting into your css, just add the colors into your own root**/
:root {
  /**music player colors, feel free to change**/
  --playerbg: #A4BE7B;
  --playerborder: #5F8D4E;
  --playertext: #285430;
  --playertitlebg: #5F8D4E;
  --playerbar: #285430;
  --playericons: #5F8D4E;
}

.playercontainer {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  background-color: var(--playerbg);
  border: 3px outset var(--playerborder);
  padding: 5px;
  align-content: center;
  align-items: center;
}

.playercontainer .now-playing {
  width: 100%;
  height: 15%;
  color: var(--playertext);
  text-align: center;
  text-justify: center;
  font-size: .8vw;
}

.playercontainer marquee {
  width: 70%;
  height: 35%;
  border: 3px inset var(--playerborder);
  background-color: var(--playertitlebg);
  color: var(--playertext);
  text-align: center;
  font-size: 1.15vw;
}

.playercontainer .trackdurationcontrols {
  width: 100%;
  height: 25%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  gap: .4vw;
  font-size: .85vw;
  color: var(--playertext);
}

.playercontainer .trackdurationcontrols .bar {
  width: 60%;
  margin-left: .1vw;
}

.playercontainer .trackdurationcontrols .time {
  width: 15%; 
}

.playercontainer .trackdurationcontrols #current-time {
 margin-left: -3px; 
}

.playercontainer .trackdurationcontrols #duration {
 margin-left: -3px; 
}

.playercontainer .trackdurationcontrols input[type="range"] {
  -webkit-appearance: none;
  background: transparent;
  display: block;
  margin-left: 0;
  margin-right: 0;
  width: 100%;
}

/** Chrome, Safari, Opera, and Edge Chromium Track**/
.playercontainer .trackdurationcontrols input[type="range"]::-webkit-slider-runnable-track {
  background: var(--playerbar);
  height: 0.1rem;
  width: 100%;
}

/** Firefox Track**/
.playercontainer .trackdurationcontrols input[type="range"]::-moz-range-track {
  background: var(--playerbar);
  height: 0.1rem;
  width: 100%;
}

/** Chrome, Safari, Opera, and Edge Chromium Thumb**/
.playercontainer .trackdurationcontrols input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: .1rem solid var(--playerbar);
  appearance: none;
  margin-top: -12px;
  background-color: var(--playericons);
  height: .5rem;
  width: .5rem;
}

/** Firefox Thumb**/
.playercontainer .trackdurationcontrols input[type="range"]::-moz-range-thumb {
  border: .1rem solid var(--playerbar);
  border-radius: 0;
  background-color: var(--playericons);
  height: .5rem;
  width: .5rem;
}

.playercontainer .trackcontrols {
  width: inherit;
  height: 20%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 5px;
  margin-top: -5%;
}

.playercontainer .trackcontrols button {
  color: var(--playericons);
  font-size: 1.8vw;
  background-color: transparent;
  border: none;
}

.playercontainer .creditstooltip {
   color: var(--playerbar);
  text-align: right;
  align-self: flex-end;
  margin-bottom: -5px;
}

/* Tooltip text */
.playercontainer .creditstooltip .playercredits {
  visibility: hidden;
  width: 170px;
  font-size: 10px;
  background-color: var(--playertitlebg);
  color: white;
  text-align: center;
  padding: 2px 0;
  border-radius: 2px;
  margin: 18px 0 0 -162px;
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.playercontainer .creditstooltip:hover .playercredits {
  visibility: visible;
}

@media only screen and (max-width: 750px) {
    .playercontainer .now-playing {
    font-size: 1.7vw;
  }

  .playercontainer marquee {
    font-size: 2.3vw;
  }

  .playercontainer .trackdurationcontrols {
    gap: .4vw;
    font-size: 1.7vw;
  }

  .playercontainer .trackdurationcontrols .bar {
    margin-left: .2vw;
    margin-right: .3vw;
  }

  .playercontainer .trackdurationcontrols #current-time {
   margin-left: -2px; 
  }

  .playercontainer .trackdurationcontrols #duration {
   margin-left: -3px; 
  }

  .playercontainer .trackcontrols button {
    color: var(--playericons);
    font-size: 4vw;
    background-color: transparent;
    border: none;
  }
}
   ```
you can edit the css but i heavily advise against deleting any of it or changing things (other than color and dimensions) in the thumb or track. 

05. you're done! wasnt that easy :)
