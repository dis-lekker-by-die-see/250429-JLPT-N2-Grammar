"use strict";
// // // // // // // // // // // Load tracks from JSON file
// // // // // // // // // // async function loadTracks(): Promise<string[]> {
// // // // // // // // // //   try {
// // // // // // // // // //     const response = await fetch("audio-files.json");
// // // // // // // // // //     const tracks: string[] = await response.json();
// // // // // // // // // //     return tracks;
// // // // // // // // // //   } catch (error) {
// // // // // // // // // //     console.error("Failed to load audio files:", error);
// // // // // // // // // //     return [];
// // // // // // // // // //   }
// // // // // // // // // // }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Load tracks from JSON file
function loadTracks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("audio-files.json");
            const tracks = yield response.json();
            console.log("Loaded tracks:", tracks.length); // Log number of tracks
            return tracks;
        }
        catch (error) {
            console.error("Failed to load audio files:", error);
            return [];
        }
    });
}
const audioPlayer = document.getElementById("audio-player");
const playlistElement = document.getElementById("playlist");
const trackTitleElement = document.getElementById("track-title");
const playPauseButton = document.getElementById("play-pause");
const stopButton = document.getElementById("stop");
const shuffleButton = document.getElementById("shuffle");
const repeatButton = document.getElementById("repeat");
const rewind30Button = document.getElementById("rewind-30");
const rewind5Button = document.getElementById("rewind-5");
const forward5Button = document.getElementById("forward-5");
const forward30Button = document.getElementById("forward-30");
const skipPreviousButton = document.getElementById("skip-previous");
const skipNextButton = document.getElementById("skip-next");
let tracks = [];
let currentTrackIndex = 0;
let isShuffling = false;
let isRepeating = false;
let playedTracks = []; // Tracks played in current cycle
let shuffledIndices = []; // Shuffled order of tracks
// Populate playlist
function populatePlaylist() {
    playlistElement.innerHTML = "";
    tracks.forEach((track, index) => {
        const li = document.createElement("li");
        li.textContent = track.name; // Use display name
        li.dataset.index = index.toString(); // Store index for highlighting
        if (index === currentTrackIndex) {
            li.classList.add("active"); // Highlight current track
        }
        li.addEventListener("click", () => {
            currentTrackIndex = index;
            playedTracks = [index]; // Reset played tracks
            shuffledIndices = [];
            playTrack();
        });
        playlistElement.appendChild(li);
    });
}
// Play a track
function playTrack() {
    audioPlayer.src = tracks[currentTrackIndex].file; // Use file path
    audioPlayer.play().catch((error) => console.error("Playback failed:", error));
    // Update track title
    trackTitleElement.textContent =
        tracks[currentTrackIndex].name || "Unknown Track";
    // Update Media Session for lock screen controls
    if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: tracks[currentTrackIndex].name || "Unknown Track",
            // No artist, album, or artwork since metadata isn't needed
        });
        navigator.mediaSession.setActionHandler("play", () => audioPlayer.play());
        navigator.mediaSession.setActionHandler("pause", () => audioPlayer.pause());
        navigator.mediaSession.setActionHandler("nexttrack", nextTrack);
        navigator.mediaSession.setActionHandler("previoustrack", previousTrack);
    }
    // Update play/pause button
    playPauseButton.textContent = "Pause";
    // Highlight current track
    updatePlaylistHighlight();
}
// Update playlist highlighting
function updatePlaylistHighlight() {
    const playlistItems = document
        .getElementById("playlist")
        .getElementsByTagName("li");
    for (let i = 0; i < playlistItems.length; i++) {
        if (i === currentTrackIndex) {
            playlistItems[i].classList.add("active");
        }
        else {
            playlistItems[i].classList.remove("active");
        }
    }
}
// Get next track index
function getNextTrackIndex() {
    if (!isShuffling) {
        // Sequential playback
        return (currentTrackIndex + 1) % tracks.length;
    }
    else {
        // Shuffle: ensure all tracks play once before repeating
        // Generate shuffled indices if empty
        if (shuffledIndices.length === 0) {
            shuffledIndices = Array.from({ length: tracks.length }, (_, i) => i).filter((i) => !playedTracks.includes(i));
            // Shuffle all indices
            for (let i = shuffledIndices.length - 1; i >= 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledIndices[i], shuffledIndices[j]] = [
                    shuffledIndices[j],
                    shuffledIndices[i],
                ];
            }
            console.log("Generated shuffledIndices:", shuffledIndices); // Debug
        }
        // Pick next track
        if (shuffledIndices.length > 0) {
            const nextIndex = shuffledIndices.shift();
            playedTracks.push(nextIndex);
            console.log("Next track index:", nextIndex, "Played tracks:", playedTracks); // Debug
            return nextIndex;
        }
        // All tracks played
        if (playedTracks.length >= tracks.length) {
            if (isRepeating) {
                playedTracks = []; // Reset for new cycle
                shuffledIndices = [];
                console.log("Restarting shuffle cycle"); // Debug
                return getNextTrackIndex(); // Start new cycle
            }
            else {
                audioPlayer.pause(); // Stop playback
                playPauseButton.textContent = "Play";
                console.log("Shuffle stopped, staying on track:", currentTrackIndex); // Debug
                return currentTrackIndex; // Stay on last track
            }
        }
        return currentTrackIndex; // Fallback (should not reach here)
    }
}
// Next track
function nextTrack() {
    currentTrackIndex = getNextTrackIndex();
    playTrack();
}
// Previous track
function previousTrack() {
    // Simple previous track (no shuffle history for simplicity)
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    playedTracks = [currentTrackIndex]; // Reset played tracks
    shuffledIndices = [];
    playTrack();
}
// Toggle play/pause
playPauseButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer
            .play()
            .catch((error) => console.error("Playback failed:", error));
        playPauseButton.textContent = "Pause";
    }
    else {
        audioPlayer.pause();
        playPauseButton.textContent = "Play";
    }
});
// Stop playback
stopButton.addEventListener("click", () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playPauseButton.textContent = "Play";
});
// Shuffle toggle
shuffleButton.addEventListener("click", () => {
    isShuffling = !isShuffling;
    shuffleButton.classList.toggle("active", isShuffling);
    playedTracks = []; // Reset played tracks, don't include currentTrackIndex
    shuffledIndices = [];
    if (isShuffling) {
        // Start new shuffle cycle
        nextTrack();
    }
});
// Repeat toggle
repeatButton.addEventListener("click", () => {
    isRepeating = !isRepeating;
    repeatButton.classList.toggle("active", isRepeating);
});
// Skip previous
skipPreviousButton.addEventListener("click", previousTrack);
// Skip next
skipNextButton.addEventListener("click", nextTrack);
// Time jump buttons
rewind30Button.addEventListener("click", () => {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 30);
});
rewind5Button.addEventListener("click", () => {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 5);
});
forward5Button.addEventListener("click", () => {
    audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 5);
});
forward30Button.addEventListener("click", () => {
    audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 30);
});
// Auto-play next track when current track ends
audioPlayer.addEventListener("ended", nextTrack);
// Initialize playlist on load
window.addEventListener("load", () => __awaiter(void 0, void 0, void 0, function* () {
    tracks = yield loadTracks();
    if (tracks.length === 0) {
        playlistElement.innerHTML = "<li>No tracks found</li>";
        trackTitleElement.textContent = "No Tracks Available";
        return;
    }
    populatePlaylist();
}));
