


























coverImage.src = coverSrc;
audioPlayer.play();
}
playPauseButton.addEventListener('click', playPause);
nextButton.addEventListener('click', playNext);
prevbutton.addEventListener('click', playPrev);

playlist.addEventListener('click', (event) => {
    const clickedIndex = Array.from(playlist.children).indexOf(event.target);
    if(clickedIndex !== -1) {
        currentSongIndex = clickedIndex;
        loadSong();
    }
});
loadSong();