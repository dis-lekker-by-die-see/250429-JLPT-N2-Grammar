"use strict";
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
const playRandomButton = document.getElementById("play-random");
const playSequentialButton = document.getElementById("play-sequential");
let tracks = [];
let currentTrackIndex = 0;
let isRandom = false;
// Populate playlist
function populatePlaylist() {
    playlistElement.innerHTML = "";
    tracks.forEach((track, index) => {
        const li = document.createElement("li");
        li.textContent = track.split("/").pop() || track; // Display file name only
        li.addEventListener("click", () => {
            currentTrackIndex = index;
            playTrack();
        });
        playlistElement.appendChild(li);
    });
}
// Play a track
function playTrack() {
    audioPlayer.src = tracks[currentTrackIndex];
    audioPlayer.play().catch((error) => console.error("Playback failed:", error));
    // Update Media Session for lock screen controls
    if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: tracks[currentTrackIndex].split("/").pop() || "Unknown Track",
            // No artist, album, or artwork since metadata isn't needed
        });
        navigator.mediaSession.setActionHandler("play", () => audioPlayer.play());
        navigator.mediaSession.setActionHandler("pause", () => audioPlayer.pause());
        navigator.mediaSession.setActionHandler("nexttrack", nextTrack);
        navigator.mediaSession.setActionHandler("previoustrack", previousTrack);
    }
}
// Next track
function nextTrack() {
    if (isRandom) {
        currentTrackIndex = Math.floor(Math.random() * tracks.length);
    }
    else {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    }
    playTrack();
}
// Previous track
function previousTrack() {
    if (isRandom) {
        currentTrackIndex = Math.floor(Math.random() * tracks.length);
    }
    else {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    }
    playTrack();
}
// Random playback
playRandomButton.addEventListener("click", () => {
    isRandom = true;
    currentTrackIndex = Math.floor(Math.random() * tracks.length);
    playTrack();
});
// Sequential playback
playSequentialButton.addEventListener("click", () => {
    isRandom = false;
    currentTrackIndex = 0;
    playTrack();
});
// Auto-play next track when current track ends
audioPlayer.addEventListener("ended", nextTrack);
// Initialize playlist on load
window.addEventListener("load", () => __awaiter(void 0, void 0, void 0, function* () {
    tracks = yield loadTracks();
    if (tracks.length === 0) {
        playlistElement.innerHTML = "<li>No tracks found</li>";
        return;
    }
    populatePlaylist();
}));
