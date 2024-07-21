import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
console.log(throttle);
const player = new Player('vimeo-player');



// console.log(localStorage.getItem(JSON.parse(currentTime))) ;

player.on('timeupdate', throttle(function(data) {
    localStorage.setItem("videoplayer-current-time",JSON.stringify(data.seconds))
    },1000));
    const getedItem = localStorage.getItem("videoplayer-current-time");
    const parcedItem = JSON.parse(getedItem ?? []);

    player.setCurrentTime(parcedItem).then(function(seconds){
        
    })
    .catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
    });
    