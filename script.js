"use strict";
// // // // // // // Load tracks from JSON file
// // // // // // async function loadTracks(): Promise<string[]> {
// // // // // //   try {
// // // // // //     const response = await fetch("audio-files.json");
// // // // // //     const tracks: string[] = await response.json();
// // // // // //     return tracks;
// // // // // //   } catch (error) {
// // // // // //     console.error("Failed to load audio files:", error);
// // // // // //     return [];
// // // // // //   }
// // // // // // }
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
const trackTitleElement = document.getElementById("track-title");
const playRandomButton = document.getElementById("play-random");
const playSequentialButton = document.getElementById("play-sequential");
const skipPreviousButton = document.getElementById("skip-previous");
const skipNextButton = document.getElementById("skip-next");
let tracks = [];
let currentTrackIndex = 0;
let isRandom = false;
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
            playTrack();
        });
        playlistElement.appendChild(li);
    });
}
// Play a track
function playTrack() {
    audioPlayer.src = tracks[currentTrackIndex].file; // Use URL-encoded file path
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
    // Highlight current track
    updatePlaylistHighlight();
}
// Update playlist highlighting
function updatePlaylistHighlight() {
    const playlistItems = playlistElement.querySelectorAll("li");
    playlistItems.forEach((item, index) => {
        if (index === currentTrackIndex) {
            item.classList.add("active");
        }
        else {
            item.classList.remove("active");
        }
    });
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
    playRandomButton.classList.add("active");
    playSequentialButton.classList.remove("active");
    playTrack();
});
// Sequential playback
playSequentialButton.addEventListener("click", () => {
    isRandom = false;
    currentTrackIndex = 0;
    playSequentialButton.classList.add("active");
    playRandomButton.classList.remove("active");
    playTrack();
});
// Skip previous
skipPreviousButton.addEventListener("click", previousTrack);
// Skip next
skipNextButton.addEventListener("click", nextTrack);
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
    playSequentialButton.classList.add("active"); // Default to sequential mode
    populatePlaylist();
}));
