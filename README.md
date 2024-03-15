# CURRENTLY STILL IN TESTING DONT USE
# music-player
an embedabble music player using css html and js, built for neocities but applicable elsewhere in theory.

# Adding the player to your site! (the most simple no-js way)
first make sure you understand its limitations by checking out the limitations section of this readme (found below)

01. make sure that you have a div to place the player in. It automatically will adjust itself to fill the width & height of the div you place it in. 
02. add this to your css:
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
03. replace the default tracks with your own- adding or taking away as many as you'd like! easy peasy :)

# Limitations
by default it can not get smaller than 130px by 130px without things getting weird and squished. You can *theoretically* change this by messing around with the css. 
