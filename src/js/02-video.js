import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const KEY_STORAGE_TIME = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(e) {
    localStorage.setItem(KEY_STORAGE_TIME, e.seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));

if(JSON.parse(localStorage.getItem(KEY_STORAGE_TIME)) !== null) {
    
player.setCurrentTime(JSON.parse(localStorage.getItem(KEY_STORAGE_TIME)));
}