// // // // // Load tracks from JSON file
// // // // async function loadTracks(): Promise<string[]> {
// // // //   try {
// // // //     const response = await fetch("audio-files.json");
// // // //     const tracks: string[] = await response.json();
// // // //     return tracks;
// // // //   } catch (error) {
// // // //     console.error("Failed to load audio files:", error);
// // // //     return [];
// // // //   }
// // // // }

// // // // const audioPlayer = document.getElementById("audio-player") as HTMLAudioElement;
// // // // const playlistElement = document.getElementById("playlist") as HTMLUListElement;
// // // // const playRandomButton = document.getElementById(
// // // //   "play-random"
// // // // ) as HTMLButtonElement;
// // // // const playSequentialButton = document.getElementById(
// // // //   "play-sequential"
// // // // ) as HTMLButtonElement;

// // // // let tracks: string[] = [];
// // // // let currentTrackIndex: number = 0;
// // // // let isRandom: boolean = false;

// // // // // Populate playlist
// // // // function populatePlaylist(): void {
// // // //   playlistElement.innerHTML = "";
// // // //   tracks.forEach((track, index) => {
// // // //     const li = document.createElement("li");
// // // //     li.textContent = track.split("/").pop() || track; // Display file name only
// // // //     li.addEventListener("click", () => {
// // // //       currentTrackIndex = index;
// // // //       playTrack();
// // // //     });
// // // //     playlistElement.appendChild(li);
// // // //   });
// // // // }

// // // // // Play a track
// // // // function playTrack(): void {
// // // //   audioPlayer.src = tracks[currentTrackIndex];
// // // //   audioPlayer.play().catch((error) => console.error("Playback failed:", error));

// // // //   // Update Media Session for lock screen controls
// // // //   if ("mediaSession" in navigator) {
// // // //     navigator.mediaSession.metadata = new MediaMetadata({
// // // //       title: tracks[currentTrackIndex].split("/").pop() || "Unknown Track",
// // // //       // No artist, album, or artwork since metadata isn't needed
// // // //     });

// // // //     navigator.mediaSession.setActionHandler("play", () => audioPlayer.play());
// // // //     navigator.mediaSession.setActionHandler("pause", () => audioPlayer.pause());
// // // //     navigator.mediaSession.setActionHandler("nexttrack", nextTrack);
// // // //     navigator.mediaSession.setActionHandler("previoustrack", previousTrack);
// // // //   }
// // // // }

// // // // // Next track
// // // // function nextTrack(): void {
// // // //   if (isRandom) {
// // // //     currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // //   } else {
// // // //     currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
// // // //   }
// // // //   playTrack();
// // // // }

// // // // // Previous track
// // // // function previousTrack(): void {
// // // //   if (isRandom) {
// // // //     currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // //   } else {
// // // //     currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
// // // //   }
// // // //   playTrack();
// // // // }

// // // // // Random playback
// // // // playRandomButton.addEventListener("click", () => {
// // // //   isRandom = true;
// // // //   currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // //   playTrack();
// // // // });

// // // // // Sequential playback
// // // // playSequentialButton.addEventListener("click", () => {
// // // //   isRandom = false;
// // // //   currentTrackIndex = 0;
// // // //   playTrack();
// // // // });

// // // // // Auto-play next track when current track ends
// // // // audioPlayer.addEventListener("ended", nextTrack);

// // // // // Initialize playlist on load
// // // // window.addEventListener("load", async () => {
// // // //   tracks = await loadTracks();
// // // //   if (tracks.length === 0) {
// // // //     playlistElement.innerHTML = "<li>No tracks found</li>";
// // // //     return;
// // // //   }
// // // //   populatePlaylist();
// // // // });

// // // // Load tracks from JSON file
// // // async function loadTracks(): Promise<string[]> {
// // //   try {
// // //     const response = await fetch("audio-files.json");
// // //     const tracks: string[] = await response.json();
// // //     return tracks;
// // //   } catch (error) {
// // //     console.error("Failed to load audio files:", error);
// // //     return [];
// // //   }
// // // }

// // // const audioPlayer = document.getElementById("audio-player") as HTMLAudioElement;
// // // const playlistElement = document.getElementById("playlist") as HTMLUListElement;
// // // const playRandomButton = document.getElementById(
// // //   "play-random"
// // // ) as HTMLButtonElement;
// // // const playSequentialButton = document.getElementById(
// // //   "play-sequential"
// // // ) as HTMLButtonElement;
// // // const skipPreviousButton = document.getElementById(
// // //   "skip-previous"
// // // ) as HTMLButtonElement;
// // // const skipNextButton = document.getElementById(
// // //   "skip-next"
// // // ) as HTMLButtonElement;

// // // let tracks: string[] = [];
// // // let currentTrackIndex: number = 0;
// // // let isRandom: boolean = false;

// // // // Populate playlist
// // // function populatePlaylist(): void {
// // //   playlistElement.innerHTML = "";
// // //   tracks.forEach((track, index) => {
// // //     const li = document.createElement("li");
// // //     li.textContent = track.split("/").pop() || track; // Display file name only
// // //     li.dataset.index = index.toString(); // Store index for highlighting
// // //     if (index === currentTrackIndex) {
// // //       li.classList.add("active"); // Highlight current track
// // //     }
// // //     li.addEventListener("click", () => {
// // //       currentTrackIndex = index;
// // //       playTrack();
// // //     });
// // //     playlistElement.appendChild(li);
// // //   });
// // // }

// // // // Play a track
// // // function playTrack(): void {
// // //   audioPlayer.src = tracks[currentTrackIndex];
// // //   audioPlayer.play().catch((error) => console.error("Playback failed:", error));

// // //   // Update Media Session for lock screen controls
// // //   if ("mediaSession" in navigator) {
// // //     navigator.mediaSession.metadata = new MediaMetadata({
// // //       title: tracks[currentTrackIndex].split("/").pop() || "Unknown Track",
// // //       // No artist, album, or artwork since metadata isn't needed
// // //     });

// // //     navigator.mediaSession.setActionHandler("play", () => audioPlayer.play());
// // //     navigator.mediaSession.setActionHandler("pause", () => audioPlayer.pause());
// // //     navigator.mediaSession.setActionHandler("nexttrack", nextTrack);
// // //     navigator.mediaSession.setActionHandler("previoustrack", previousTrack);
// // //   }

// // //   // Highlight current track
// // //   updatePlaylistHighlight();
// // // }

// // // // Update playlist highlighting
// // // function updatePlaylistHighlight(): void {
// // //   const playlistItems = playlistElement.querySelectorAll("li");
// // //   playlistItems.forEach((item, index) => {
// // //     if (index === currentTrackIndex) {
// // //       item.classList.add("active");
// // //     } else {
// // //       item.classList.remove("active");
// // //     }
// // //   });
// // // }

// // // // Next track
// // // function nextTrack(): void {
// // //   if (isRandom) {
// // //     currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // //   } else {
// // //     currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
// // //   }
// // //   playTrack();
// // // }

// // // // Previous track
// // // function previousTrack(): void {
// // //   if (isRandom) {
// // //     currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // //   } else {
// // //     currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
// // //   }
// // //   playTrack();
// // // }

// // // // Random playback
// // // playRandomButton.addEventListener("click", () => {
// // //   isRandom = true;
// // //   currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // //   playTrack();
// // // });

// // // // Sequential playback
// // // playSequentialButton.addEventListener("click", () => {
// // //   isRandom = false;
// // //   currentTrackIndex = 0;
// // //   playTrack();
// // // });

// // // // Skip previous
// // // skipPreviousButton.addEventListener("click", previousTrack);

// // // // Skip next
// // // skipNextButton.addEventListener("click", nextTrack);

// // // // Auto-play next track when current track ends
// // // audioPlayer.addEventListener("ended", nextTrack);

// // // // Initialize playlist on load
// // // window.addEventListener("load", async () => {
// // //   tracks = await loadTracks();
// // //   if (tracks.length === 0) {
// // //     playlistElement.innerHTML = "<li>No tracks found</li>";
// // //     return;
// // //   }
// // //   populatePlaylist();
// // // });

// // // Load tracks from JSON file
// // async function loadTracks(): Promise<string[]> {
// //   try {
// //     const response = await fetch("audio-files.json");
// //     const tracks: string[] = await response.json();
// //     return tracks;
// //   } catch (error) {
// //     console.error("Failed to load audio files:", error);
// //     return [];
// //   }
// // }

// // const audioPlayer = document.getElementById("audio-player") as HTMLAudioElement;
// // const playlistElement = document.getElementById("playlist") as HTMLUListElement;
// // const trackTitleElement = document.getElementById(
// //   "track-title"
// // ) as HTMLHeadingElement;
// // const playRandomButton = document.getElementById(
// //   "play-random"
// // ) as HTMLButtonElement;
// // const playSequentialButton = document.getElementById(
// //   "play-sequential"
// // ) as HTMLButtonElement;
// // const skipPreviousButton = document.getElementById(
// //   "skip-previous"
// // ) as HTMLButtonElement;
// // const skipNextButton = document.getElementById(
// //   "skip-next"
// // ) as HTMLButtonElement;

// // let tracks: string[] = [];
// // let currentTrackIndex: number = 0;
// // let isRandom: boolean = false;

// // // Populate playlist
// // function populatePlaylist(): void {
// //   playlistElement.innerHTML = "";
// //   tracks.forEach((track, index) => {
// //     const li = document.createElement("li");
// //     li.textContent = track.split("/").pop() || track; // Display file name only
// //     li.dataset.index = index.toString(); // Store index for highlighting
// //     if (index === currentTrackIndex) {
// //       li.classList.add("active"); // Highlight current track
// //     }
// //     li.addEventListener("click", () => {
// //       currentTrackIndex = index;
// //       playTrack();
// //     });
// //     playlistElement.appendChild(li);
// //   });
// // }

// // // Play a track
// // function playTrack(): void {
// //   audioPlayer.src = tracks[currentTrackIndex];
// //   audioPlayer.play().catch((error) => console.error("Playback failed:", error));

// //   // Update track title
// //   trackTitleElement.textContent =
// //     tracks[currentTrackIndex].split("/").pop() || "Unknown Track";

// //   // Update Media Session for lock screen controls
// //   if ("mediaSession" in navigator) {
// //     navigator.mediaSession.metadata = new MediaMetadata({
// //       title: tracks[currentTrackIndex].split("/").pop() || "Unknown Track",
// //       // No artist, album, or artwork since metadata isn't needed
// //     });

// //     navigator.mediaSession.setActionHandler("play", () => audioPlayer.play());
// //     navigator.mediaSession.setActionHandler("pause", () => audioPlayer.pause());
// //     navigator.mediaSession.setActionHandler("nexttrack", nextTrack);
// //     navigator.mediaSession.setActionHandler("previoustrack", previousTrack);
// //   }

// //   // Highlight current track
// //   updatePlaylistHighlight();
// // }

// // // Update playlist highlighting
// // function updatePlaylistHighlight(): void {
// //   const playlistItems = playlistElement.querySelectorAll("li");
// //   playlistItems.forEach((item, index) => {
// //     if (index === currentTrackIndex) {
// //       item.classList.add("active");
// //     } else {
// //       item.classList.remove("active");
// //     }
// //   });
// // }

// // // Next track
// // function nextTrack(): void {
// //   if (isRandom) {
// //     currentTrackIndex = Math.floor(Math.random() * tracks.length);
// //   } else {
// //     currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
// //   }
// //   playTrack();
// // }

// // // Previous track
// // function previousTrack(): void {
// //   if (isRandom) {
// //     currentTrackIndex = Math.floor(Math.random() * tracks.length);
// //   } else {
// //     currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
// //   }
// //   playTrack();
// // }

// // // Random playback
// // playRandomButton.addEventListener("click", () => {
// //   isRandom = true;
// //   currentTrackIndex = Math.floor(Math.random() * tracks.length);
// //   playTrack();
// // });

// // // Sequential playback
// // playSequentialButton.addEventListener("click", () => {
// //   isRandom = false;
// //   currentTrackIndex = 0;
// //   playTrack();
// // });

// // // Skip previous
// // skipPreviousButton.addEventListener("click", previousTrack);

// // // Skip next
// // skipNextButton.addEventListener("click", nextTrack);

// // // Auto-play next track when current track ends
// // audioPlayer.addEventListener("ended", nextTrack);

// // // Initialize playlist on load
// // window.addEventListener("load", async () => {
// //   tracks = await loadTracks();
// //   if (tracks.length === 0) {
// //     playlistElement.innerHTML = "<li>No tracks found</li>";
// //     trackTitleElement.textContent = "No Tracks Available";
// //     return;
// //   }
// //   populatePlaylist();
// // });

// // Load tracks from JSON file
// async function loadTracks(): Promise<string[]> {
//   try {
//     const response = await fetch("audio-files.json");
//     const tracks: string[] = await response.json();
//     return tracks;
//   } catch (error) {
//     console.error("Failed to load audio files:", error);
//     return [];
//   }
// }

// const audioPlayer = document.getElementById("audio-player") as HTMLAudioElement;
// const playlistElement = document.getElementById("playlist") as HTMLUListElement;
// const trackTitleElement = document.getElementById(
//   "track-title"
// ) as HTMLHeadingElement;
// const playRandomButton = document.getElementById(
//   "play-random"
// ) as HTMLButtonElement;
// const playSequentialButton = document.getElementById(
//   "play-sequential"
// ) as HTMLButtonElement;
// const skipPreviousButton = document.getElementById(
//   "skip-previous"
// ) as HTMLButtonElement;
// const skipNextButton = document.getElementById(
//   "skip-next"
// ) as HTMLButtonElement;

// let tracks: string[] = [];
// let currentTrackIndex: number = 0;
// let isRandom: boolean = false;

// // Populate playlist
// function populatePlaylist(): void {
//   playlistElement.innerHTML = "";
//   tracks.forEach((track, index) => {
//     const li = document.createElement("li");
//     li.textContent = track.split("/").pop()?.replace(".mp3", "") || track; // Remove .mp3
//     li.dataset.index = index.toString(); // Store index for highlighting
//     if (index === currentTrackIndex) {
//       li.classList.add("active"); // Highlight current track
//     }
//     li.addEventListener("click", () => {
//       currentTrackIndex = index;
//       playTrack();
//     });
//     playlistElement.appendChild(li);
//   });
// }

// // Play a track
// function playTrack(): void {
//   audioPlayer.src = tracks[currentTrackIndex];
//   audioPlayer.play().catch((error) => console.error("Playback failed:", error));

//   // Update track title
//   trackTitleElement.textContent =
//     tracks[currentTrackIndex].split("/").pop()?.replace(".mp3", "") ||
//     "Unknown Track";

//   // Update Media Session for lock screen controls
//   if ("mediaSession" in navigator) {
//     navigator.mediaSession.metadata = new MediaMetadata({
//       title:
//         tracks[currentTrackIndex].split("/").pop()?.replace(".mp3", "") ||
//         "Unknown Track",
//       // No artist, album, or artwork since metadata isn't needed
//     });

//     navigator.mediaSession.setActionHandler("play", () => audioPlayer.play());
//     navigator.mediaSession.setActionHandler("pause", () => audioPlayer.pause());
//     navigator.mediaSession.setActionHandler("nexttrack", nextTrack);
//     navigator.mediaSession.setActionHandler("previoustrack", previousTrack);
//   }

//   // Highlight current track
//   updatePlaylistHighlight();
// }

// // Update playlist highlighting
// function updatePlaylistHighlight(): void {
//   const playlistItems = playlistElement.querySelectorAll("li");
//   playlistItems.forEach((item, index) => {
//     if (index === currentTrackIndex) {
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
// }

// // Next track
// function nextTrack(): void {
//   if (isRandom) {
//     currentTrackIndex = Math.floor(Math.random() * tracks.length);
//   } else {
//     currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
//   }
//   playTrack();
// }

// // Previous track
// function previousTrack(): void {
//   if (isRandom) {
//     currentTrackIndex = Math.floor(Math.random() * tracks.length);
//   } else {
//     currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
//   }
//   playTrack();
// }

// // Random playback
// playRandomButton.addEventListener("click", () => {
//   isRandom = true;
//   currentTrackIndex = Math.floor(Math.random() * tracks.length);
//   playTrack();
// });

// // Sequential playback
// playSequentialButton.addEventListener("click", () => {
//   isRandom = false;
//   currentTrackIndex = 0;
//   playTrack();
// });

// // Skip previous
// skipPreviousButton.addEventListener("click", previousTrack);

// // Skip next
// skipNextButton.addEventListener("click", nextTrack);

// // Auto-play next track when current track ends
// audioPlayer.addEventListener("ended", nextTrack);

// // Initialize playlist on load
// window.addEventListener("load", async () => {
//   tracks = await loadTracks();
//   if (tracks.length === 0) {
//     playlistElement.innerHTML = "<li>No tracks found</li>";
//     trackTitleElement.textContent = "No Tracks Available";
//     return;
//   }
//   populatePlaylist();
// });

// Load tracks from JSON file
async function loadTracks(): Promise<string[]> {
  try {
    const response = await fetch("audio-files.json");
    const tracks: string[] = await response.json();
    return tracks;
  } catch (error) {
    console.error("Failed to load audio files:", error);
    return [];
  }
}

const audioPlayer = document.getElementById("audio-player") as HTMLAudioElement;
const playlistElement = document.getElementById("playlist") as HTMLUListElement;
const trackTitleElement = document.getElementById(
  "track-title"
) as HTMLHeadingElement;
const playRandomButton = document.getElementById(
  "play-random"
) as HTMLButtonElement;
const playSequentialButton = document.getElementById(
  "play-sequential"
) as HTMLButtonElement;
const skipPreviousButton = document.getElementById(
  "skip-previous"
) as HTMLButtonElement;
const skipNextButton = document.getElementById(
  "skip-next"
) as HTMLButtonElement;

let tracks: string[] = [];
let currentTrackIndex: number = 0;
let isRandom: boolean = false;

// Populate playlist
function populatePlaylist(): void {
  playlistElement.innerHTML = "";
  tracks.forEach((track, index) => {
    const li = document.createElement("li");
    li.textContent = track.split("/").pop()?.replace(".mp3", "") || track; // Remove .mp3
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
function playTrack(): void {
  audioPlayer.src = tracks[currentTrackIndex];
  audioPlayer.play().catch((error) => console.error("Playback failed:", error));

  // Update track title
  trackTitleElement.textContent =
    tracks[currentTrackIndex].split("/").pop()?.replace(".mp3", "") ||
    "Unknown Track";

  // Update Media Session for lock screen controls
  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title:
        tracks[currentTrackIndex].split("/").pop()?.replace(".mp3", "") ||
        "Unknown Track",
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
function updatePlaylistHighlight(): void {
  const playlistItems = playlistElement.querySelectorAll("li");
  playlistItems.forEach((item, index) => {
    if (index === currentTrackIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Next track
function nextTrack(): void {
  if (isRandom) {
    currentTrackIndex = Math.floor(Math.random() * tracks.length);
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  }
  playTrack();
}

// Previous track
function previousTrack(): void {
  if (isRandom) {
    currentTrackIndex = Math.floor(Math.random() * tracks.length);
  } else {
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
window.addEventListener("load", async () => {
  tracks = await loadTracks();
  if (tracks.length === 0) {
    playlistElement.innerHTML = "<li>No tracks found</li>";
    trackTitleElement.textContent = "No Tracks Available";
    return;
  }
  playSequentialButton.classList.add("active"); // Default to sequential mode
  populatePlaylist();
});
