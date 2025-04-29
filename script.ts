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

// // // // // // // // // // const audioPlayer = document.getElementById("audio-player") as HTMLAudioElement;
// // // // // // // // // // const playlistElement = document.getElementById("playlist") as HTMLUListElement;
// // // // // // // // // // const playRandomButton = document.getElementById(
// // // // // // // // // //   "play-random"
// // // // // // // // // // ) as HTMLButtonElement;
// // // // // // // // // // const playSequentialButton = document.getElementById(
// // // // // // // // // //   "play-sequential"
// // // // // // // // // // ) as HTMLButtonElement;

// // // // // // // // // // let tracks: string[] = [];
// // // // // // // // // // let currentTrackIndex: number = 0;
// // // // // // // // // // let isRandom: boolean = false;

// // // // // // // // // // // Populate playlist
// // // // // // // // // // function populatePlaylist(): void {
// // // // // // // // // //   playlistElement.innerHTML = "";
// // // // // // // // // //   tracks.forEach((track, index) => {
// // // // // // // // // //     const li = document.createElement("li");
// // // // // // // // // //     li.textContent = track.split("/").pop() || track; // Display file name only
// // // // // // // // // //     li.addEventListener("click", () => {
// // // // // // // // // //       currentTrackIndex = index;
// // // // // // // // // //       playTrack();
// // // // // // // // // //     });
// // // // // // // // // //     playlistElement.appendChild(li);
// // // // // // // // // //   });
// // // // // // // // // // }

// // // // // // // // // // // Play a track
// // // // // // // // // // function playTrack(): void {
// // // // // // // // // //   audioPlayer.src = tracks[currentTrackIndex];
// // // // // // // // // //   audioPlayer.play().catch((error) => console.error("Playback failed:", error));

// // // // // // // // // //   // Update Media Session for lock screen controls
// // // // // // // // // //   if ("mediaSession" in navigator) {
// // // // // // // // // //     navigator.mediaSession.metadata = new MediaMetadata({
// // // // // // // // // //       title: tracks[currentTrackIndex].split("/").pop() || "Unknown Track",
// // // // // // // // // //       // No artist, album, or artwork since metadata isn't needed
// // // // // // // // // //     });

// // // // // // // // // //     navigator.mediaSession.setActionHandler("play", () => audioPlayer.play());
// // // // // // // // // //     navigator.mediaSession.setActionHandler("pause", () => audioPlayer.pause());
// // // // // // // // // //     navigator.mediaSession.setActionHandler("nexttrack", nextTrack);
// // // // // // // // // //     navigator.mediaSession.setActionHandler("previoustrack", previousTrack);
// // // // // // // // // //   }
// // // // // // // // // // }

// // // // // // // // // // // Next track
// // // // // // // // // // function nextTrack(): void {
// // // // // // // // // //   if (isRandom) {
// // // // // // // // // //     currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // // // // // // // //   } else {
// // // // // // // // // //     currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
// // // // // // // // // //   }
// // // // // // // // // //   playTrack();
// // // // // // // // // // }

// // // // // // // // // // // Previous track
// // // // // // // // // // function previousTrack(): void {
// // // // // // // // // //   if (isRandom) {
// // // // // // // // // //     currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // // // // // // // //   } else {
// // // // // // // // // //     currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
// // // // // // // // // //   }
// // // // // // // // // //   playTrack();
// // // // // // // // // // }

// // // // // // // // // // // Random playback
// // // // // // // // // // playRandomButton.addEventListener("click", () => {
// // // // // // // // // //   isRandom = true;
// // // // // // // // // //   currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // // // // // // // //   playTrack();
// // // // // // // // // // });

// // // // // // // // // // // Sequential playback
// // // // // // // // // // playSequentialButton.addEventListener("click", () => {
// // // // // // // // // //   isRandom = false;
// // // // // // // // // //   currentTrackIndex = 0;
// // // // // // // // // //   playTrack();
// // // // // // // // // // });

// // // // // // // // // // // Auto-play next track when current track ends
// // // // // // // // // // audioPlayer.addEventListener("ended", nextTrack);

// // // // // // // // // // // Initialize playlist on load
// // // // // // // // // // window.addEventListener("load", async () => {
// // // // // // // // // //   tracks = await loadTracks();
// // // // // // // // // //   if (tracks.length === 0) {
// // // // // // // // // //     playlistElement.innerHTML = "<li>No tracks found</li>";
// // // // // // // // // //     return;
// // // // // // // // // //   }
// // // // // // // // // //   populatePlaylist();
// // // // // // // // // // });

// // // // // // // // // // Load tracks from JSON file
// // // // // // // // // async function loadTracks(): Promise<string[]> {
// // // // // // // // //   try {
// // // // // // // // //     const response = await fetch("audio-files.json");
// // // // // // // // //     const tracks: string[] = await response.json();
// // // // // // // // //     return tracks;
// // // // // // // // //   } catch (error) {
// // // // // // // // //     console.error("Failed to load audio files:", error);
// // // // // // // // //     return [];
// // // // // // // // //   }
// // // // // // // // // }

// // // // // // // // // const audioPlayer = document.getElementById("audio-player") as HTMLAudioElement;
// // // // // // // // // const playlistElement = document.getElementById("playlist") as HTMLUListElement;
// // // // // // // // // const playRandomButton = document.getElementById(
// // // // // // // // //   "play-random"
// // // // // // // // // ) as HTMLButtonElement;
// // // // // // // // // const playSequentialButton = document.getElementById(
// // // // // // // // //   "play-sequential"
// // // // // // // // // ) as HTMLButtonElement;
// // // // // // // // // const skipPreviousButton = document.getElementById(
// // // // // // // // //   "skip-previous"
// // // // // // // // // ) as HTMLButtonElement;
// // // // // // // // // const skipNextButton = document.getElementById(
// // // // // // // // //   "skip-next"
// // // // // // // // // ) as HTMLButtonElement;

// // // // // // // // // let tracks: string[] = [];
// // // // // // // // // let currentTrackIndex: number = 0;
// // // // // // // // // let isRandom: boolean = false;

// // // // // // // // // // Populate playlist
// // // // // // // // // function populatePlaylist(): void {
// // // // // // // // //   playlistElement.innerHTML = "";
// // // // // // // // //   tracks.forEach((track, index) => {
// // // // // // // // //     const li = document.createElement("li");
// // // // // // // // //     li.textContent = track.split("/").pop() || track; // Display file name only
// // // // // // // // //     li.dataset.index = index.toString(); // Store index for highlighting
// // // // // // // // //     if (index === currentTrackIndex) {
// // // // // // // // //       li.classList.add("active"); // Highlight current track
// // // // // // // // //     }
// // // // // // // // //     li.addEventListener("click", () => {
// // // // // // // // //       currentTrackIndex = index;
// // // // // // // // //       playTrack();
// // // // // // // // //     });
// // // // // // // // //     playlistElement.appendChild(li);
// // // // // // // // //   });
// // // // // // // // // }

// // // // // // // // // // Play a track
// // // // // // // // // function playTrack(): void {
// // // // // // // // //   audioPlayer.src = tracks[currentTrackIndex];
// // // // // // // // //   audioPlayer.play().catch((error) => console.error("Playback failed:", error));

// // // // // // // // //   // Update Media Session for lock screen controls
// // // // // // // // //   if ("mediaSession" in navigator) {
// // // // // // // // //     navigator.mediaSession.metadata = new MediaMetadata({
// // // // // // // // //       title: tracks[currentTrackIndex].split("/").pop() || "Unknown Track",
// // // // // // // // //       // No artist, album, or artwork since metadata isn't needed
// // // // // // // // //     });

// // // // // // // // //     navigator.mediaSession.setActionHandler("play", () => audioPlayer.play());
// // // // // // // // //     navigator.mediaSession.setActionHandler("pause", () => audioPlayer.pause());
// // // // // // // // //     navigator.mediaSession.setActionHandler("nexttrack", nextTrack);
// // // // // // // // //     navigator.mediaSession.setActionHandler("previoustrack", previousTrack);
// // // // // // // // //   }

// // // // // // // // //   // Highlight current track
// // // // // // // // //   updatePlaylistHighlight();
// // // // // // // // // }

// // // // // // // // // // Update playlist highlighting
// // // // // // // // // function updatePlaylistHighlight(): void {
// // // // // // // // //   const playlistItems = playlistElement.querySelectorAll("li");
// // // // // // // // //   playlistItems.forEach((item, index) => {
// // // // // // // // //     if (index === currentTrackIndex) {
// // // // // // // // //       item.classList.add("active");
// // // // // // // // //     } else {
// // // // // // // // //       item.classList.remove("active");
// // // // // // // // //     }
// // // // // // // // //   });
// // // // // // // // // }

// // // // // // // // // // Next track
// // // // // // // // // function nextTrack(): void {
// // // // // // // // //   if (isRandom) {
// // // // // // // // //     currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // // // // // // //   } else {
// // // // // // // // //     currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
// // // // // // // // //   }
// // // // // // // // //   playTrack();
// // // // // // // // // }

// // // // // // // // // // Previous track
// // // // // // // // // function previousTrack(): void {
// // // // // // // // //   if (isRandom) {
// // // // // // // // //     currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // // // // // // //   } else {
// // // // // // // // //     currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
// // // // // // // // //   }
// // // // // // // // //   playTrack();
// // // // // // // // // }

// // // // // // // // // // Random playback
// // // // // // // // // playRandomButton.addEventListener("click", () => {
// // // // // // // // //   isRandom = true;
// // // // // // // // //   currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // // // // // // //   playTrack();
// // // // // // // // // });

// // // // // // // // // // Sequential playback
// // // // // // // // // playSequentialButton.addEventListener("click", () => {
// // // // // // // // //   isRandom = false;
// // // // // // // // //   currentTrackIndex = 0;
// // // // // // // // //   playTrack();
// // // // // // // // // });

// // // // // // // // // // Skip previous
// // // // // // // // // skipPreviousButton.addEventListener("click", previousTrack);

// // // // // // // // // // Skip next
// // // // // // // // // skipNextButton.addEventListener("click", nextTrack);

// // // // // // // // // // Auto-play next track when current track ends
// // // // // // // // // audioPlayer.addEventListener("ended", nextTrack);

// // // // // // // // // // Initialize playlist on load
// // // // // // // // // window.addEventListener("load", async () => {
// // // // // // // // //   tracks = await loadTracks();
// // // // // // // // //   if (tracks.length === 0) {
// // // // // // // // //     playlistElement.innerHTML = "<li>No tracks found</li>";
// // // // // // // // //     return;
// // // // // // // // //   }
// // // // // // // // //   populatePlaylist();
// // // // // // // // // });

// // // // // // // // // Load tracks from JSON file
// // // // // // // // async function loadTracks(): Promise<string[]> {
// // // // // // // //   try {
// // // // // // // //     const response = await fetch("audio-files.json");
// // // // // // // //     const tracks: string[] = await response.json();
// // // // // // // //     return tracks;
// // // // // // // //   } catch (error) {
// // // // // // // //     console.error("Failed to load audio files:", error);
// // // // // // // //     return [];
// // // // // // // //   }
// // // // // // // // }

// // // // // // // // const audioPlayer = document.getElementById("audio-player") as HTMLAudioElement;
// // // // // // // // const playlistElement = document.getElementById("playlist") as HTMLUListElement;
// // // // // // // // const trackTitleElement = document.getElementById(
// // // // // // // //   "track-title"
// // // // // // // // ) as HTMLHeadingElement;
// // // // // // // // const playRandomButton = document.getElementById(
// // // // // // // //   "play-random"
// // // // // // // // ) as HTMLButtonElement;
// // // // // // // // const playSequentialButton = document.getElementById(
// // // // // // // //   "play-sequential"
// // // // // // // // ) as HTMLButtonElement;
// // // // // // // // const skipPreviousButton = document.getElementById(
// // // // // // // //   "skip-previous"
// // // // // // // // ) as HTMLButtonElement;
// // // // // // // // const skipNextButton = document.getElementById(
// // // // // // // //   "skip-next"
// // // // // // // // ) as HTMLButtonElement;

// // // // // // // // let tracks: string[] = [];
// // // // // // // // let currentTrackIndex: number = 0;
// // // // // // // // let isRandom: boolean = false;

// // // // // // // // // Populate playlist
// // // // // // // // function populatePlaylist(): void {
// // // // // // // //   playlistElement.innerHTML = "";
// // // // // // // //   tracks.forEach((track, index) => {
// // // // // // // //     const li = document.createElement("li");
// // // // // // // //     li.textContent = track.split("/").pop() || track; // Display file name only
// // // // // // // //     li.dataset.index = index.toString(); // Store index for highlighting
// // // // // // // //     if (index === currentTrackIndex) {
// // // // // // // //       li.classList.add("active"); // Highlight current track
// // // // // // // //     }
// // // // // // // //     li.addEventListener("click", () => {
// // // // // // // //       currentTrackIndex = index;
// // // // // // // //       playTrack();
// // // // // // // //     });
// // // // // // // //     playlistElement.appendChild(li);
// // // // // // // //   });
// // // // // // // // }

// // // // // // // // // Play a track
// // // // // // // // function playTrack(): void {
// // // // // // // //   audioPlayer.src = tracks[currentTrackIndex];
// // // // // // // //   audioPlayer.play().catch((error) => console.error("Playback failed:", error));

// // // // // // // //   // Update track title
// // // // // // // //   trackTitleElement.textContent =
// // // // // // // //     tracks[currentTrackIndex].split("/").pop() || "Unknown Track";

// // // // // // // //   // Update Media Session for lock screen controls
// // // // // // // //   if ("mediaSession" in navigator) {
// // // // // // // //     navigator.mediaSession.metadata = new MediaMetadata({
// // // // // // // //       title: tracks[currentTrackIndex].split("/").pop() || "Unknown Track",
// // // // // // // //       // No artist, album, or artwork since metadata isn't needed
// // // // // // // //     });

// // // // // // // //     navigator.mediaSession.setActionHandler("play", () => audioPlayer.play());
// // // // // // // //     navigator.mediaSession.setActionHandler("pause", () => audioPlayer.pause());
// // // // // // // //     navigator.mediaSession.setActionHandler("nexttrack", nextTrack);
// // // // // // // //     navigator.mediaSession.setActionHandler("previoustrack", previousTrack);
// // // // // // // //   }

// // // // // // // //   // Highlight current track
// // // // // // // //   updatePlaylistHighlight();
// // // // // // // // }

// // // // // // // // // Update playlist highlighting
// // // // // // // // function updatePlaylistHighlight(): void {
// // // // // // // //   const playlistItems = playlistElement.querySelectorAll("li");
// // // // // // // //   playlistItems.forEach((item, index) => {
// // // // // // // //     if (index === currentTrackIndex) {
// // // // // // // //       item.classList.add("active");
// // // // // // // //     } else {
// // // // // // // //       item.classList.remove("active");
// // // // // // // //     }
// // // // // // // //   });
// // // // // // // // }

// // // // // // // // // Next track
// // // // // // // // function nextTrack(): void {
// // // // // // // //   if (isRandom) {
// // // // // // // //     currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // // // // // //   } else {
// // // // // // // //     currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
// // // // // // // //   }
// // // // // // // //   playTrack();
// // // // // // // // }

// // // // // // // // // Previous track
// // // // // // // // function previousTrack(): void {
// // // // // // // //   if (isRandom) {
// // // // // // // //     currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // // // // // //   } else {
// // // // // // // //     currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
// // // // // // // //   }
// // // // // // // //   playTrack();
// // // // // // // // }

// // // // // // // // // Random playback
// // // // // // // // playRandomButton.addEventListener("click", () => {
// // // // // // // //   isRandom = true;
// // // // // // // //   currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // // // // // //   playTrack();
// // // // // // // // });

// // // // // // // // // Sequential playback
// // // // // // // // playSequentialButton.addEventListener("click", () => {
// // // // // // // //   isRandom = false;
// // // // // // // //   currentTrackIndex = 0;
// // // // // // // //   playTrack();
// // // // // // // // });

// // // // // // // // // Skip previous
// // // // // // // // skipPreviousButton.addEventListener("click", previousTrack);

// // // // // // // // // Skip next
// // // // // // // // skipNextButton.addEventListener("click", nextTrack);

// // // // // // // // // Auto-play next track when current track ends
// // // // // // // // audioPlayer.addEventListener("ended", nextTrack);

// // // // // // // // // Initialize playlist on load
// // // // // // // // window.addEventListener("load", async () => {
// // // // // // // //   tracks = await loadTracks();
// // // // // // // //   if (tracks.length === 0) {
// // // // // // // //     playlistElement.innerHTML = "<li>No tracks found</li>";
// // // // // // // //     trackTitleElement.textContent = "No Tracks Available";
// // // // // // // //     return;
// // // // // // // //   }
// // // // // // // //   populatePlaylist();
// // // // // // // // });

// // // // // // // // Load tracks from JSON file
// // // // // // // async function loadTracks(): Promise<string[]> {
// // // // // // //   try {
// // // // // // //     const response = await fetch("audio-files.json");
// // // // // // //     const tracks: string[] = await response.json();
// // // // // // //     return tracks;
// // // // // // //   } catch (error) {
// // // // // // //     console.error("Failed to load audio files:", error);
// // // // // // //     return [];
// // // // // // //   }
// // // // // // // }

// // // // // // // const audioPlayer = document.getElementById("audio-player") as HTMLAudioElement;
// // // // // // // const playlistElement = document.getElementById("playlist") as HTMLUListElement;
// // // // // // // const trackTitleElement = document.getElementById(
// // // // // // //   "track-title"
// // // // // // // ) as HTMLHeadingElement;
// // // // // // // const playRandomButton = document.getElementById(
// // // // // // //   "play-random"
// // // // // // // ) as HTMLButtonElement;
// // // // // // // const playSequentialButton = document.getElementById(
// // // // // // //   "play-sequential"
// // // // // // // ) as HTMLButtonElement;
// // // // // // // const skipPreviousButton = document.getElementById(
// // // // // // //   "skip-previous"
// // // // // // // ) as HTMLButtonElement;
// // // // // // // const skipNextButton = document.getElementById(
// // // // // // //   "skip-next"
// // // // // // // ) as HTMLButtonElement;

// // // // // // // let tracks: string[] = [];
// // // // // // // let currentTrackIndex: number = 0;
// // // // // // // let isRandom: boolean = false;

// // // // // // // // Populate playlist
// // // // // // // function populatePlaylist(): void {
// // // // // // //   playlistElement.innerHTML = "";
// // // // // // //   tracks.forEach((track, index) => {
// // // // // // //     const li = document.createElement("li");
// // // // // // //     li.textContent = track.split("/").pop()?.replace(".mp3", "") || track; // Remove .mp3
// // // // // // //     li.dataset.index = index.toString(); // Store index for highlighting
// // // // // // //     if (index === currentTrackIndex) {
// // // // // // //       li.classList.add("active"); // Highlight current track
// // // // // // //     }
// // // // // // //     li.addEventListener("click", () => {
// // // // // // //       currentTrackIndex = index;
// // // // // // //       playTrack();
// // // // // // //     });
// // // // // // //     playlistElement.appendChild(li);
// // // // // // //   });
// // // // // // // }

// // // // // // // // Play a track
// // // // // // // function playTrack(): void {
// // // // // // //   audioPlayer.src = tracks[currentTrackIndex];
// // // // // // //   audioPlayer.play().catch((error) => console.error("Playback failed:", error));

// // // // // // //   // Update track title
// // // // // // //   trackTitleElement.textContent =
// // // // // // //     tracks[currentTrackIndex].split("/").pop()?.replace(".mp3", "") ||
// // // // // // //     "Unknown Track";

// // // // // // //   // Update Media Session for lock screen controls
// // // // // // //   if ("mediaSession" in navigator) {
// // // // // // //     navigator.mediaSession.metadata = new MediaMetadata({
// // // // // // //       title:
// // // // // // //         tracks[currentTrackIndex].split("/").pop()?.replace(".mp3", "") ||
// // // // // // //         "Unknown Track",
// // // // // // //       // No artist, album, or artwork since metadata isn't needed
// // // // // // //     });

// // // // // // //     navigator.mediaSession.setActionHandler("play", () => audioPlayer.play());
// // // // // // //     navigator.mediaSession.setActionHandler("pause", () => audioPlayer.pause());
// // // // // // //     navigator.mediaSession.setActionHandler("nexttrack", nextTrack);
// // // // // // //     navigator.mediaSession.setActionHandler("previoustrack", previousTrack);
// // // // // // //   }

// // // // // // //   // Highlight current track
// // // // // // //   updatePlaylistHighlight();
// // // // // // // }

// // // // // // // // Update playlist highlighting
// // // // // // // function updatePlaylistHighlight(): void {
// // // // // // //   const playlistItems = playlistElement.querySelectorAll("li");
// // // // // // //   playlistItems.forEach((item, index) => {
// // // // // // //     if (index === currentTrackIndex) {
// // // // // // //       item.classList.add("active");
// // // // // // //     } else {
// // // // // // //       item.classList.remove("active");
// // // // // // //     }
// // // // // // //   });
// // // // // // // }

// // // // // // // // Next track
// // // // // // // function nextTrack(): void {
// // // // // // //   if (isRandom) {
// // // // // // //     currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // // // // //   } else {
// // // // // // //     currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
// // // // // // //   }
// // // // // // //   playTrack();
// // // // // // // }

// // // // // // // // Previous track
// // // // // // // function previousTrack(): void {
// // // // // // //   if (isRandom) {
// // // // // // //     currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // // // // //   } else {
// // // // // // //     currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
// // // // // // //   }
// // // // // // //   playTrack();
// // // // // // // }

// // // // // // // // Random playback
// // // // // // // playRandomButton.addEventListener("click", () => {
// // // // // // //   isRandom = true;
// // // // // // //   currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // // // // //   playTrack();
// // // // // // // });

// // // // // // // // Sequential playback
// // // // // // // playSequentialButton.addEventListener("click", () => {
// // // // // // //   isRandom = false;
// // // // // // //   currentTrackIndex = 0;
// // // // // // //   playTrack();
// // // // // // // });

// // // // // // // // Skip previous
// // // // // // // skipPreviousButton.addEventListener("click", previousTrack);

// // // // // // // // Skip next
// // // // // // // skipNextButton.addEventListener("click", nextTrack);

// // // // // // // // Auto-play next track when current track ends
// // // // // // // audioPlayer.addEventListener("ended", nextTrack);

// // // // // // // // Initialize playlist on load
// // // // // // // window.addEventListener("load", async () => {
// // // // // // //   tracks = await loadTracks();
// // // // // // //   if (tracks.length === 0) {
// // // // // // //     playlistElement.innerHTML = "<li>No tracks found</li>";
// // // // // // //     trackTitleElement.textContent = "No Tracks Available";
// // // // // // //     return;
// // // // // // //   }
// // // // // // //   populatePlaylist();
// // // // // // // });

// // // // // // Load tracks from JSON file
// // // // // async function loadTracks(): Promise<string[]> {
// // // // //   try {
// // // // //     const response = await fetch("audio-files.json");
// // // // //     const tracks: string[] = await response.json();
// // // // //     return tracks;
// // // // //   } catch (error) {
// // // // //     console.error("Failed to load audio files:", error);
// // // // //     return [];
// // // // //   }
// // // // // }

// // // // // const audioPlayer = document.getElementById("audio-player") as HTMLAudioElement;
// // // // // const playlistElement = document.getElementById("playlist") as HTMLUListElement;
// // // // // const trackTitleElement = document.getElementById(
// // // // //   "track-title"
// // // // // ) as HTMLHeadingElement;
// // // // // const playRandomButton = document.getElementById(
// // // // //   "play-random"
// // // // // ) as HTMLButtonElement;
// // // // // const playSequentialButton = document.getElementById(
// // // // //   "play-sequential"
// // // // // ) as HTMLButtonElement;
// // // // // const skipPreviousButton = document.getElementById(
// // // // //   "skip-previous"
// // // // // ) as HTMLButtonElement;
// // // // // const skipNextButton = document.getElementById(
// // // // //   "skip-next"
// // // // // ) as HTMLButtonElement;

// // // // // let tracks: string[] = [];
// // // // // let currentTrackIndex: number = 0;
// // // // // let isRandom: boolean = false;

// // // // // // Populate playlist
// // // // // function populatePlaylist(): void {
// // // // //   playlistElement.innerHTML = "";
// // // // //   tracks.forEach((track, index) => {
// // // // //     const li = document.createElement("li");
// // // // //     li.textContent = track.split("/").pop()?.replace(".mp3", "") || track; // Remove .mp3
// // // // //     li.dataset.index = index.toString(); // Store index for highlighting
// // // // //     if (index === currentTrackIndex) {
// // // // //       li.classList.add("active"); // Highlight current track
// // // // //     }
// // // // //     li.addEventListener("click", () => {
// // // // //       currentTrackIndex = index;
// // // // //       playTrack();
// // // // //     });
// // // // //     playlistElement.appendChild(li);
// // // // //   });
// // // // // }

// // // // // // Play a track
// // // // // function playTrack(): void {
// // // // //   audioPlayer.src = tracks[currentTrackIndex];
// // // // //   audioPlayer.play().catch((error) => console.error("Playback failed:", error));

// // // // //   // Update track title
// // // // //   trackTitleElement.textContent =
// // // // //     tracks[currentTrackIndex].split("/").pop()?.replace(".mp3", "") ||
// // // // //     "Unknown Track";

// // // // //   // Update Media Session for lock screen controls
// // // // //   if ("mediaSession" in navigator) {
// // // // //     navigator.mediaSession.metadata = new MediaMetadata({
// // // // //       title:
// // // // //         tracks[currentTrackIndex].split("/").pop()?.replace(".mp3", "") ||
// // // // //         "Unknown Track",
// // // // //       // No artist, album, or artwork since metadata isn't needed
// // // // //     });

// // // // //     navigator.mediaSession.setActionHandler("play", () => audioPlayer.play());
// // // // //     navigator.mediaSession.setActionHandler("pause", () => audioPlayer.pause());
// // // // //     navigator.mediaSession.setActionHandler("nexttrack", nextTrack);
// // // // //     navigator.mediaSession.setActionHandler("previoustrack", previousTrack);
// // // // //   }

// // // // //   // Highlight current track
// // // // //   updatePlaylistHighlight();
// // // // // }

// // // // // // Update playlist highlighting
// // // // // function updatePlaylistHighlight(): void {
// // // // //   const playlistItems = playlistElement.querySelectorAll("li");
// // // // //   playlistItems.forEach((item, index) => {
// // // // //     if (index === currentTrackIndex) {
// // // // //       item.classList.add("active");
// // // // //     } else {
// // // // //       item.classList.remove("active");
// // // // //     }
// // // // //   });
// // // // // }

// // // // // // Next track
// // // // // function nextTrack(): void {
// // // // //   if (isRandom) {
// // // // //     currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // // //   } else {
// // // // //     currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
// // // // //   }
// // // // //   playTrack();
// // // // // }

// // // // // // Previous track
// // // // // function previousTrack(): void {
// // // // //   if (isRandom) {
// // // // //     currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // // //   } else {
// // // // //     currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
// // // // //   }
// // // // //   playTrack();
// // // // // }

// // // // // // Random playback
// // // // // playRandomButton.addEventListener("click", () => {
// // // // //   isRandom = true;
// // // // //   currentTrackIndex = Math.floor(Math.random() * tracks.length);
// // // // //   playRandomButton.classList.add("active");
// // // // //   playSequentialButton.classList.remove("active");
// // // // //   playTrack();
// // // // // });

// // // // // // Sequential playback
// // // // // playSequentialButton.addEventListener("click", () => {
// // // // //   isRandom = false;
// // // // //   currentTrackIndex = 0;
// // // // //   playSequentialButton.classList.add("active");
// // // // //   playRandomButton.classList.remove("active");
// // // // //   playTrack();
// // // // // });

// // // // // // Skip previous
// // // // // skipPreviousButton.addEventListener("click", previousTrack);

// // // // // // Skip next
// // // // // skipNextButton.addEventListener("click", nextTrack);

// // // // // // Auto-play next track when current track ends
// // // // // audioPlayer.addEventListener("ended", nextTrack);

// // // // // // Initialize playlist on load
// // // // // window.addEventListener("load", async () => {
// // // // //   tracks = await loadTracks();
// // // // //   if (tracks.length === 0) {
// // // // //     playlistElement.innerHTML = "<li>No tracks found</li>";
// // // // //     trackTitleElement.textContent = "No Tracks Available";
// // // // //     return;
// // // // //   }
// // // // //   playSequentialButton.classList.add("active"); // Default to sequential mode
// // // // //   populatePlaylist();
// // // // // });

// // // // interface Track {
// // // //   id: number;
// // // //   file: string;
// // // //   name: string;
// // // // }

// // // // // Load tracks from JSON file
// // // // async function loadTracks(): Promise<Track[]> {
// // // //   try {
// // // //     const response = await fetch("audio-files.json");
// // // //     const tracks: Track[] = await response.json();
// // // //     return tracks;
// // // //   } catch (error) {
// // // //     console.error("Failed to load audio files:", error);
// // // //     return [];
// // // //   }
// // // // }

// // // // const audioPlayer = document.getElementById("audio-player") as HTMLAudioElement;
// // // // const playlistElement = document.getElementById("playlist") as HTMLUListElement;
// // // // const trackTitleElement = document.getElementById(
// // // //   "track-title"
// // // // ) as HTMLHeadingElement;
// // // // const playRandomButton = document.getElementById(
// // // //   "play-random"
// // // // ) as HTMLButtonElement;
// // // // const playSequentialButton = document.getElementById(
// // // //   "play-sequential"
// // // // ) as HTMLButtonElement;
// // // // const skipPreviousButton = document.getElementById(
// // // //   "skip-previous"
// // // // ) as HTMLButtonElement;
// // // // const skipNextButton = document.getElementById(
// // // //   "skip-next"
// // // // ) as HTMLButtonElement;

// // // // let tracks: Track[] = [];
// // // // let currentTrackIndex: number = 0;
// // // // let isRandom: boolean = false;

// // // // // Populate playlist
// // // // function populatePlaylist(): void {
// // // //   playlistElement.innerHTML = "";
// // // //   tracks.forEach((track, index) => {
// // // //     const li = document.createElement("li");
// // // //     li.textContent = track.name; // Use display name
// // // //     li.dataset.index = index.toString(); // Store index for highlighting
// // // //     if (index === currentTrackIndex) {
// // // //       li.classList.add("active"); // Highlight current track
// // // //     }
// // // //     li.addEventListener("click", () => {
// // // //       currentTrackIndex = index;
// // // //       playTrack();
// // // //     });
// // // //     playlistElement.appendChild(li);
// // // //   });
// // // // }

// // // // // Play a track
// // // // function playTrack(): void {
// // // //   audioPlayer.src = tracks[currentTrackIndex].file; // Use URL-encoded file path
// // // //   audioPlayer.play().catch((error) => console.error("Playback failed:", error));

// // // //   // Update track title
// // // //   trackTitleElement.textContent =
// // // //     tracks[currentTrackIndex].name || "Unknown Track";

// // // //   // Update Media Session for lock screen controls
// // // //   if ("mediaSession" in navigator) {
// // // //     navigator.mediaSession.metadata = new MediaMetadata({
// // // //       title: tracks[currentTrackIndex].name || "Unknown Track",
// // // //       // No artist, album, or artwork since metadata isn't needed
// // // //     });

// // // //     navigator.mediaSession.setActionHandler("play", () => audioPlayer.play());
// // // //     navigator.mediaSession.setActionHandler("pause", () => audioPlayer.pause());
// // // //     navigator.mediaSession.setActionHandler("nexttrack", nextTrack);
// // // //     navigator.mediaSession.setActionHandler("previoustrack", previousTrack);
// // // //   }

// // // //   // Highlight current track
// // // //   updatePlaylistHighlight();
// // // // }

// // // // // Update playlist highlighting
// // // // function updatePlaylistHighlight(): void {
// // // //   const playlistItems = playlistElement.querySelectorAll("li");
// // // //   playlistItems.forEach((item, index) => {
// // // //     if (index === currentTrackIndex) {
// // // //       item.classList.add("active");
// // // //     } else {
// // // //       item.classList.remove("active");
// // // //     }
// // // //   });
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
// // // //   playRandomButton.classList.add("active");
// // // //   playSequentialButton.classList.remove("active");
// // // //   playTrack();
// // // // });

// // // // // Sequential playback
// // // // playSequentialButton.addEventListener("click", () => {
// // // //   isRandom = false;
// // // //   currentTrackIndex = 0;
// // // //   playSequentialButton.classList.add("active");
// // // //   playRandomButton.classList.remove("active");
// // // //   playTrack();
// // // // });

// // // // // Skip previous
// // // // skipPreviousButton.addEventListener("click", previousTrack);

// // // // // Skip next
// // // // skipNextButton.addEventListener("click", nextTrack);

// // // // // Auto-play next track when current track ends
// // // // audioPlayer.addEventListener("ended", nextTrack);

// // // // // Initialize playlist on load
// // // // window.addEventListener("load", async () => {
// // // //   tracks = await loadTracks();
// // // //   if (tracks.length === 0) {
// // // //     playlistElement.innerHTML = "<li>No tracks found</li>";
// // // //     trackTitleElement.textContent = "No Tracks Available";
// // // //     return;
// // // //   }
// // // //   playSequentialButton.classList.add("active"); // Default to sequential mode
// // // //   populatePlaylist();
// // // // });

// // // interface Track {
// // //   id: number;
// // //   file: string;
// // //   name: string;
// // // }

// // // // Load tracks from JSON file
// // // async function loadTracks(): Promise<Track[]> {
// // //   try {
// // //     const response = await fetch("audio-files.json");
// // //     const tracks: Track[] = await response.json();
// // //     return tracks;
// // //   } catch (error) {
// // //     console.error("Failed to load audio files:", error);
// // //     return [];
// // //   }
// // // }

// // // const audioPlayer = document.getElementById("audio-player") as HTMLAudioElement;
// // // const playlistElement = document.getElementById("playlist") as HTMLUListElement;
// // // const trackTitleElement = document.getElementById(
// // //   "track-title"
// // // ) as HTMLHeadingElement;
// // // const playPauseButton = document.getElementById(
// // //   "play-pause"
// // // ) as HTMLButtonElement;
// // // const stopButton = document.getElementById("stop") as HTMLButtonElement;
// // // const shuffleButton = document.getElementById("shuffle") as HTMLButtonElement;
// // // const repeatButton = document.getElementById("repeat") as HTMLButtonElement;
// // // const rewind30Button = document.getElementById(
// // //   "rewind-30"
// // // ) as HTMLButtonElement;
// // // const rewind5Button = document.getElementById("rewind-5") as HTMLButtonElement;
// // // const forward5Button = document.getElementById(
// // //   "forward-5"
// // // ) as HTMLButtonElement;
// // // const forward30Button = document.getElementById(
// // //   "forward-30"
// // // ) as HTMLButtonElement;
// // // const skipPreviousButton = document.getElementById(
// // //   "skip-previous"
// // // ) as HTMLButtonElement;
// // // const skipNextButton = document.getElementById(
// // //   "skip-next"
// // // ) as HTMLButtonElement;

// // // let tracks: Track[] = [];
// // // let currentTrackIndex: number = 0;
// // // let isShuffling: boolean = false;
// // // let isRepeating: boolean = false;
// // // let playedTracks: number[] = []; // Tracks played in current cycle
// // // let shuffledIndices: number[] = []; // Shuffled order of tracks

// // // // Populate playlist
// // // function populatePlaylist(): void {
// // //   playlistElement.innerHTML = "";
// // //   tracks.forEach((track, index) => {
// // //     const li = document.createElement("li");
// // //     li.textContent = track.name; // Use display name
// // //     li.dataset.index = index.toString(); // Store index for highlighting
// // //     if (index === currentTrackIndex) {
// // //       li.classList.add("active"); // Highlight current track
// // //     }
// // //     li.addEventListener("click", () => {
// // //       currentTrackIndex = index;
// // //       playedTracks = [index]; // Reset played tracks
// // //       shuffledIndices = [];
// // //       playTrack();
// // //     });
// // //     playlistElement.appendChild(li);
// // //   });
// // // }

// // // // Play a track
// // // function playTrack(): void {
// // //   audioPlayer.src = tracks[currentTrackIndex].file; // Use file path
// // //   audioPlayer.play().catch((error) => console.error("Playback failed:", error));

// // //   // Update track title
// // //   trackTitleElement.textContent =
// // //     tracks[currentTrackIndex].name || "Unknown Track";

// // //   // Update Media Session for lock screen controls
// // //   if ("mediaSession" in navigator) {
// // //     navigator.mediaSession.metadata = new MediaMetadata({
// // //       title: tracks[currentTrackIndex].name || "Unknown Track",
// // //       // No artist, album, or artwork since metadata isn't needed
// // //     });

// // //     navigator.mediaSession.setActionHandler("play", () => audioPlayer.play());
// // //     navigator.mediaSession.setActionHandler("pause", () => audioPlayer.pause());
// // //     navigator.mediaSession.setActionHandler("nexttrack", nextTrack);
// // //     navigator.mediaSession.setActionHandler("previoustrack", previousTrack);
// // //   }

// // //   // Update play/pause button
// // //   playPauseButton.textContent = "Pause";

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

// // // // Get next track index
// // // function getNextTrackIndex(): number {
// // //   if (!isShuffling) {
// // //     // Sequential playback
// // //     return (currentTrackIndex + 1) % tracks.length;
// // //   } else {
// // //     // Shuffle: ensure all tracks play once before repeating
// // //     if (playedTracks.length >= tracks.length) {
// // //       // All tracks played
// // //       if (isRepeating) {
// // //         playedTracks = [currentTrackIndex]; // Keep current track as played
// // //         shuffledIndices = [];
// // //       } else {
// // //         audioPlayer.pause(); // Stop playback
// // //         playPauseButton.textContent = "Play";
// // //         return currentTrackIndex; // Stay on last track
// // //       }
// // //     }

// // //     // Generate shuffled indices if empty
// // //     if (shuffledIndices.length === 0) {
// // //       shuffledIndices = Array.from(
// // //         { length: tracks.length },
// // //         (_, i) => i
// // //       ).filter((i) => !playedTracks.includes(i));
// // //       // Shuffle remaining indices
// // //       for (let i = shuffledIndices.length - 1; i > 0; i--) {
// // //         const j = Math.floor(Math.random() * (i + 1));
// // //         [shuffledIndices[i], shuffledIndices[j]] = [
// // //           shuffledIndices[j],
// // //           shuffledIndices[i],
// // //         ];
// // //       }
// // //     }

// // //     // Pick next track
// // //     if (shuffledIndices.length > 0) {
// // //       const nextIndex = shuffledIndices.shift()!;
// // //       playedTracks.push(nextIndex);
// // //       return nextIndex;
// // //     }
// // //     return currentTrackIndex; // Fallback (should not reach here)
// // //   }
// // // }

// // // // Next track
// // // function nextTrack(): void {
// // //   currentTrackIndex = getNextTrackIndex();
// // //   playTrack();
// // // }

// // // // Previous track
// // // function previousTrack(): void {
// // //   // Simple previous track (no shuffle history for simplicity)
// // //   currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
// // //   playedTracks = [currentTrackIndex]; // Reset played tracks
// // //   shuffledIndices = [];
// // //   playTrack();
// // // }

// // // // Toggle play/pause
// // // playPauseButton.addEventListener("click", () => {
// // //   if (audioPlayer.paused) {
// // //     audioPlayer
// // //       .play()
// // //       .catch((error) => console.error("Playback failed:", error));
// // //     playPauseButton.textContent = "Pause";
// // //   } else {
// // //     audioPlayer.pause();
// // //     playPauseButton.textContent = "Play";
// // //   }
// // // });

// // // // Stop playback
// // // stopButton.addEventListener("click", () => {
// // //   audioPlayer.pause();
// // //   audioPlayer.currentTime = 0;
// // //   playPauseButton.textContent = "Play";
// // // });

// // // // Shuffle toggle
// // // shuffleButton.addEventListener("click", () => {
// // //   isShuffling = !isShuffling;
// // //   shuffleButton.classList.toggle("active", isShuffling);
// // //   playedTracks = [currentTrackIndex]; // Reset played tracks
// // //   shuffledIndices = [];
// // //   if (isShuffling) {
// // //     // Start new shuffle cycle
// // //     nextTrack();
// // //   }
// // // });

// // // // Repeat toggle
// // // repeatButton.addEventListener("click", () => {
// // //   isRepeating = !isRepeating;
// // //   repeatButton.classList.toggle("active", isRepeating);
// // // });

// // // // Skip previous
// // // skipPreviousButton.addEventListener("click", previousTrack);

// // // // Skip next
// // // skipNextButton.addEventListener("click", nextTrack);

// // // // Time jump buttons
// // // rewind30Button.addEventListener("click", () => {
// // //   audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 30);
// // // });

// // // rewind5Button.addEventListener("click", () => {
// // //   audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 5);
// // // });

// // // forward5Button.addEventListener("click", () => {
// // //   audioPlayer.currentTime = Math.min(
// // //     audioPlayer.duration,
// // //     audioPlayer.currentTime + 5
// // //   );
// // // });

// // // forward30Button.addEventListener("click", () => {
// // //   audioPlayer.currentTime = Math.min(
// // //     audioPlayer.duration,
// // //     audioPlayer.currentTime + 30
// // //   );
// // // });

// // // // Auto-play next track when current track ends
// // // audioPlayer.addEventListener("ended", nextTrack);

// // // // Initialize playlist on load
// // // window.addEventListener("load", async () => {
// // //   tracks = await loadTracks();
// // //   if (tracks.length === 0) {
// // //     playlistElement.innerHTML = "<li>No tracks found</li>";
// // //     trackTitleElement.textContent = "No Tracks Available";
// // //     return;
// // //   }
// // //   populatePlaylist();
// // // });

// // interface Track {
// //   id: number;
// //   file: string;
// //   name: string;
// // }

// // // Load tracks from JSON file
// // async function loadTracks(): Promise<Track[]> {
// //   try {
// //     const response = await fetch("audio-files.json");
// //     const tracks: Track[] = await response.json();
// //     console.log("Loaded tracks:", tracks.length); // Log number of tracks
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
// // const playPauseButton = document.getElementById(
// //   "play-pause"
// // ) as HTMLButtonElement;
// // const stopButton = document.getElementById("stop") as HTMLButtonElement;
// // const shuffleButton = document.getElementById("shuffle") as HTMLButtonElement;
// // const repeatButton = document.getElementById("repeat") as HTMLButtonElement;
// // const rewind30Button = document.getElementById(
// //   "rewind-30"
// // ) as HTMLButtonElement;
// // const rewind5Button = document.getElementById("rewind-5") as HTMLButtonElement;
// // const forward5Button = document.getElementById(
// //   "forward-5"
// // ) as HTMLButtonElement;
// // const forward30Button = document.getElementById(
// //   "forward-30"
// // ) as HTMLButtonElement;
// // const skipPreviousButton = document.getElementById(
// //   "skip-previous"
// // ) as HTMLButtonElement;
// // const skipNextButton = document.getElementById(
// //   "skip-next"
// // ) as HTMLButtonElement;

// // let tracks: Track[] = [];
// // let currentTrackIndex: number = 0;
// // let isShuffling: boolean = false;
// // let isRepeating: boolean = false;
// // let playedTracks: number[] = []; // Tracks played in current cycle
// // let shuffledIndices: number[] = []; // Shuffled order of tracks

// // // Populate playlist
// // function populatePlaylist(): void {
// //   playlistElement.innerHTML = "";
// //   tracks.forEach((track, index) => {
// //     const li = document.createElement("li");
// //     li.textContent = track.name; // Use display name
// //     li.dataset.index = index.toString(); // Store index for highlighting
// //     if (index === currentTrackIndex) {
// //       li.classList.add("active"); // Highlight current track
// //     }
// //     li.addEventListener("click", () => {
// //       currentTrackIndex = index;
// //       playedTracks = [index]; // Reset played tracks
// //       shuffledIndices = [];
// //       playTrack();
// //     });
// //     playlistElement.appendChild(li);
// //   });
// // }

// // // Play a track
// // function playTrack(): void {
// //   audioPlayer.src = tracks[currentTrackIndex].file; // Use file path
// //   audioPlayer.play().catch((error) => console.error("Playback failed:", error));

// //   // Update track title
// //   trackTitleElement.textContent =
// //     tracks[currentTrackIndex].name || "Unknown Track";

// //   // Update Media Session for lock screen controls
// //   if ("mediaSession" in navigator) {
// //     navigator.mediaSession.metadata = new MediaMetadata({
// //       title: tracks[currentTrackIndex].name || "Unknown Track",
// //       // No artist, album, or artwork since metadata isn't needed
// //     });

// //     navigator.mediaSession.setActionHandler("play", () => audioPlayer.play());
// //     navigator.mediaSession.setActionHandler("pause", () => audioPlayer.pause());
// //     navigator.mediaSession.setActionHandler("nexttrack", nextTrack);
// //     navigator.mediaSession.setActionHandler("previoustrack", previousTrack);
// //   }

// //   // Update play/pause button
// //   playPauseButton.textContent = "Pause";

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

// // // Get next track index
// // function getNextTrackIndex(): number {
// //   if (!isShuffling) {
// //     // Sequential playback
// //     return (currentTrackIndex + 1) % tracks.length;
// //   } else {
// //     // Shuffle: ensure all tracks play once before repeating
// //     if (shuffledIndices.length === 0) {
// //       // Generate new shuffled indices
// //       shuffledIndices = Array.from(
// //         { length: tracks.length },
// //         (_, i) => i
// //       ).filter((i) => !playedTracks.includes(i));
// //       // Shuffle remaining indices
// //       for (let i = shuffledIndices.length - 1; i > 0; i--) {
// //         const j = Math.floor(Math.random() * (i + 1));
// //         [shuffledIndices[i], shuffledIndices[j]] = [
// //           shuffledIndices[j],
// //           shuffledIndices[i],
// //         ];
// //       }
// //     }

// //     if (shuffledIndices.length > 0) {
// //       // Pick next track
// //       const nextIndex = shuffledIndices.shift()!;
// //       playedTracks.push(nextIndex);
// //       return nextIndex;
// //     } else {
// //       // All tracks played
// //       if (isRepeating) {
// //         playedTracks = []; // Reset for new cycle
// //         shuffledIndices = [];
// //         return getNextTrackIndex(); // Start new cycle
// //       } else {
// //         audioPlayer.pause(); // Stop playback
// //         playPauseButton.textContent = "Play";
// //         return currentTrackIndex; // Stay on last track
// //       }
// //     }
// //   }
// // }

// // // Next track
// // function nextTrack(): void {
// //   currentTrackIndex = getNextTrackIndex();
// //   playTrack();
// // }

// // // Previous track
// // function previousTrack(): void {
// //   // Simple previous track (no shuffle history for simplicity)
// //   currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
// //   playedTracks = [currentTrackIndex]; // Reset played tracks
// //   shuffledIndices = [];
// //   playTrack();
// // }

// // // Toggle play/pause
// // playPauseButton.addEventListener("click", () => {
// //   if (audioPlayer.paused) {
// //     audioPlayer
// //       .play()
// //       .catch((error) => console.error("Playback failed:", error));
// //     playPauseButton.textContent = "Pause";
// //   } else {
// //     audioPlayer.pause();
// //     playPauseButton.textContent = "Play";
// //   }
// // });

// // // Stop playback
// // stopButton.addEventListener("click", () => {
// //   audioPlayer.pause();
// //   audioPlayer.currentTime = 0;
// //   playPauseButton.textContent = "Play";
// // });

// // // Shuffle toggle
// // shuffleButton.addEventListener("click", () => {
// //   isShuffling = !isShuffling;
// //   shuffleButton.classList.toggle("active", isShuffling);
// //   playedTracks = [currentTrackIndex]; // Reset played tracks
// //   shuffledIndices = [];
// //   if (isShuffling) {
// //     // Start new shuffle cycle
// //     nextTrack();
// //   }
// // });

// // // Repeat toggle
// // repeatButton.addEventListener("click", () => {
// //   isRepeating = !isRepeating;
// //   repeatButton.classList.toggle("active", isRepeating);
// // });

// // // Skip previous
// // skipPreviousButton.addEventListener("click", previousTrack);

// // // Skip next
// // skipNextButton.addEventListener("click", nextTrack);

// // // Time jump buttons
// // rewind30Button.addEventListener("click", () => {
// //   audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 30);
// // });

// // rewind5Button.addEventListener("click", () => {
// //   audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 5);
// // });

// // forward5Button.addEventListener("click", () => {
// //   audioPlayer.currentTime = Math.min(
// //     audioPlayer.duration,
// //     audioPlayer.currentTime + 5
// //   );
// // });

// // forward30Button.addEventListener("click", () => {
// //   audioPlayer.currentTime = Math.min(
// //     audioPlayer.duration,
// //     audioPlayer.currentTime + 30
// //   );
// // });

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

// interface Track {
//   id: number;
//   file: string;
//   name: string;
// }

// // Load tracks from JSON file
// async function loadTracks(): Promise<Track[]> {
//   try {
//     const response = await fetch("audio-files.json");
//     const tracks: Track[] = await response.json();
//     console.log("Loaded tracks:", tracks.length); // Log number of tracks
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
// const playPauseButton = document.getElementById(
//   "play-pause"
// ) as HTMLButtonElement;
// const stopButton = document.getElementById("stop") as HTMLButtonElement;
// const shuffleButton = document.getElementById("shuffle") as HTMLButtonElement;
// const repeatButton = document.getElementById("repeat") as HTMLButtonElement;
// const rewind30Button = document.getElementById(
//   "rewind-30"
// ) as HTMLButtonElement;
// const rewind5Button = document.getElementById("rewind-5") as HTMLButtonElement;
// const forward5Button = document.getElementById(
//   "forward-5"
// ) as HTMLButtonElement;
// const forward30Button = document.getElementById(
//   "forward-30"
// ) as HTMLButtonElement;
// const skipPreviousButton = document.getElementById(
//   "skip-previous"
// ) as HTMLButtonElement;
// const skipNextButton = document.getElementById(
//   "skip-next"
// ) as HTMLButtonElement;

// let tracks: Track[] = [];
// let currentTrackIndex: number = 0;
// let isShuffling: boolean = false;
// let isRepeating: boolean = false;
// let playedTracks: number[] = []; // Tracks played in current cycle
// let shuffledIndices: number[] = []; // Shuffled order of tracks

// // Populate playlist
// function populatePlaylist(): void {
//   playlistElement.innerHTML = "";
//   tracks.forEach((track, index) => {
//     const li = document.createElement("li");
//     li.textContent = track.name; // Use display name
//     li.dataset.index = index.toString(); // Store index for highlighting
//     if (index === currentTrackIndex) {
//       li.classList.add("active"); // Highlight current track
//     }
//     li.addEventListener("click", () => {
//       currentTrackIndex = index;
//       playedTracks = [index]; // Reset played tracks
//       shuffledIndices = [];
//       playTrack();
//     });
//     playlistElement.appendChild(li);
//   });
// }

// // Play a track
// function playTrack(): void {
//   audioPlayer.src = tracks[currentTrackIndex].file; // Use file path
//   audioPlayer.play().catch((error) => console.error("Playback failed:", error));

//   // Update track title
//   trackTitleElement.textContent =
//     tracks[currentTrackIndex].name || "Unknown Track";

//   // Update Media Session for lock screen controls
//   if ("mediaSession" in navigator) {
//     navigator.mediaSession.metadata = new MediaMetadata({
//       title: tracks[currentTrackIndex].name || "Unknown Track",
//       // No artist, album, or artwork since metadata isn't needed
//     });

//     navigator.mediaSession.setActionHandler("play", () => audioPlayer.play());
//     navigator.mediaSession.setActionHandler("pause", () => audioPlayer.pause());
//     navigator.mediaSession.setActionHandler("nexttrack", nextTrack);
//     navigator.mediaSession.setActionHandler("previoustrack", previousTrack);
//   }

//   // Update play/pause button
//   playPauseButton.textContent = "Pause";

//   // Highlight current track
//   updatePlaylistHighlight();
// }

// // Update playlist highlighting
// function updatePlaylistHighlight(): void {
//   const playlistItems = document
//     .getElementById("playlist")!
//     .getElementsByTagName("li");
//   for (let i = 0; i < playlistItems.length; i++) {
//     if (i === currentTrackIndex) {
//       playlistItems[i].classList.add("active");
//     } else {
//       playlistItems[i].classList.remove("active");
//     }
//   }
// }

// // Get next track index
// function getNextTrackIndex(): number {
//   if (!isShuffling) {
//     // Sequential playback
//     return (currentTrackIndex + 1) % tracks.length;
//   } else {
//     // Shuffle: ensure all tracks play once before repeating
//     // Add current track to playedTracks if not already included
//     if (!playedTracks.includes(currentTrackIndex)) {
//       playedTracks.push(currentTrackIndex);
//     }

//     // Check if all tracks have been played
//     if (playedTracks.length >= tracks.length) {
//       // All tracks played
//       if (isRepeating) {
//         playedTracks = []; // Reset for new cycle
//         shuffledIndices = [];
//       } else {
//         audioPlayer.pause(); // Stop playback
//         playPauseButton.textContent = "Play";
//         return currentTrackIndex; // Stay on last track
//       }
//     }

//     // // Generate shuffled indices if empty
//     // if (shuffledIndices.length === 0) {
//     //   shuffledIndices = Array.from(
//     //     { length: tracks.length },
//     //     (_, i) => i
//     //   ).filter((i) => !playedTracks.includes(i));
//     //   // Shuffle remaining indices
//     //     for (let i = shuffledIndices.length - 1; i > 0; i--) {
//     //     const j = Math.floor(Math.random() * (i + 1));
//     //     [shuffledIndices[i], shuffledIndices[j]] = [
//     //       shuffledIndices[j],
//     //       shuffledIndices[i],
//     //     ];
//     //   }
//     // }
//     if (shuffledIndices.length === 0) {
//       shuffledIndices = Array.from(
//         { length: tracks.length },
//         (_, i) => i
//       ).filter((i) => !playedTracks.includes(i));
//       // Shuffle remaining indices
//       for (let i = shuffledIndices.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [shuffledIndices[i], shuffledIndices[j]] = [
//           shuffledIndices[j],
//           shuffledIndices[i],
//         ];
//       }
//     }
//     if (shuffledIndices.length > 0) {
//       const nextIndex = shuffledIndices.shift()!;
//       playedTracks.push(nextIndex);
//       return nextIndex;
//     } else {
//       // All tracks played
//       if (isRepeating) {
//         playedTracks = [];
//         shuffledIndices = [];
//         return getNextTrackIndex();
//       } else {
//         audioPlayer.pause();
//         playPauseButton.textContent = "Play";
//         return currentTrackIndex;
//       }
//     }

//     // Pick next track
//     if (shuffledIndices.length > 0) {
//       const nextIndex = shuffledIndices.shift()!;
//       return nextIndex;
//     }
//     return currentTrackIndex; // Fallback (should not reach here)
//   }
// }

// // Next track
// function nextTrack(): void {
//   currentTrackIndex = getNextTrackIndex();
//   playTrack();
// }

// // Previous track
// function previousTrack(): void {
//   // Simple previous track (no shuffle history for simplicity)
//   currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
//   playedTracks = [currentTrackIndex]; // Reset played tracks
//   shuffledIndices = [];
//   playTrack();
// }

// // Toggle play/pause
// playPauseButton.addEventListener("click", () => {
//   if (audioPlayer.paused) {
//     audioPlayer
//       .play()
//       .catch((error) => console.error("Playback failed:", error));
//     playPauseButton.textContent = "Pause";
//   } else {
//     audioPlayer.pause();
//     playPauseButton.textContent = "Play";
//   }
// });

// // Stop playback
// stopButton.addEventListener("click", () => {
//   audioPlayer.pause();
//   audioPlayer.currentTime = 0;
//   playPauseButton.textContent = "Play";
// });

// // Shuffle toggle
// shuffleButton.addEventListener("click", () => {
//   isShuffling = !isShuffling;
//   shuffleButton.classList.toggle("active", isShuffling);
//   playedTracks = [currentTrackIndex]; // Reset played tracks
//   shuffledIndices = [];
//   if (isShuffling) {
//     // Start new shuffle cycle
//     nextTrack();
//   }
// });

// // Repeat toggle
// repeatButton.addEventListener("click", () => {
//   isRepeating = !isRepeating;
//   repeatButton.classList.toggle("active", isRepeating);
// });

// // Skip previous
// skipPreviousButton.addEventListener("click", previousTrack);

// // Skip next
// skipNextButton.addEventListener("click", nextTrack);

// // Time jump buttons
// rewind30Button.addEventListener("click", () => {
//   audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 30);
// });

// rewind5Button.addEventListener("click", () => {
//   audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 5);
// });

// forward5Button.addEventListener("click", () => {
//   audioPlayer.currentTime = Math.min(
//     audioPlayer.duration,
//     audioPlayer.currentTime + 5
//   );
// });

// forward30Button.addEventListener("click", () => {
//   audioPlayer.currentTime = Math.min(
//     audioPlayer.duration,
//     audioPlayer.currentTime + 30
//   );
// });

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

interface Track {
  id: number;
  file: string;
  name: string;
}

// Load tracks from JSON file
async function loadTracks(): Promise<Track[]> {
  try {
    const response = await fetch("audio-files.json");
    const tracks: Track[] = await response.json();
    console.log("Loaded tracks:", tracks.length); // Log number of tracks
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
const playPauseButton = document.getElementById(
  "play-pause"
) as HTMLButtonElement;
const stopButton = document.getElementById("stop") as HTMLButtonElement;
const shuffleButton = document.getElementById("shuffle") as HTMLButtonElement;
const repeatButton = document.getElementById("repeat") as HTMLButtonElement;
const rewind30Button = document.getElementById(
  "rewind-30"
) as HTMLButtonElement;
const rewind5Button = document.getElementById("rewind-5") as HTMLButtonElement;
const forward5Button = document.getElementById(
  "forward-5"
) as HTMLButtonElement;
const forward30Button = document.getElementById(
  "forward-30"
) as HTMLButtonElement;
const skipPreviousButton = document.getElementById(
  "skip-previous"
) as HTMLButtonElement;
const skipNextButton = document.getElementById(
  "skip-next"
) as HTMLButtonElement;

let tracks: Track[] = [];
let currentTrackIndex: number = 0;
let isShuffling: boolean = false;
let isRepeating: boolean = false;
let playedTracks: number[] = []; // Tracks played in current cycle
let shuffledIndices: number[] = []; // Shuffled order of tracks

// Populate playlist
function populatePlaylist(): void {
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
function playTrack(): void {
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
function updatePlaylistHighlight(): void {
  const playlistItems = document
    .getElementById("playlist")!
    .getElementsByTagName("li");
  for (let i = 0; i < playlistItems.length; i++) {
    if (i === currentTrackIndex) {
      playlistItems[i].classList.add("active");
    } else {
      playlistItems[i].classList.remove("active");
    }
  }
}

// Get next track index
function getNextTrackIndex(): number {
  if (!isShuffling) {
    // Sequential playback
    return (currentTrackIndex + 1) % tracks.length;
  } else {
    // Shuffle: ensure all tracks play once before repeating
    // Generate shuffled indices if empty
    if (shuffledIndices.length === 0) {
      shuffledIndices = Array.from(
        { length: tracks.length },
        (_, i) => i
      ).filter((i) => !playedTracks.includes(i));
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
      const nextIndex = shuffledIndices.shift()!;
      playedTracks.push(nextIndex);
      console.log(
        "Next track index:",
        nextIndex,
        "Played tracks:",
        playedTracks
      ); // Debug
      return nextIndex;
    }

    // All tracks played
    if (playedTracks.length >= tracks.length) {
      if (isRepeating) {
        playedTracks = []; // Reset for new cycle
        shuffledIndices = [];
        console.log("Restarting shuffle cycle"); // Debug
        return getNextTrackIndex(); // Start new cycle
      } else {
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
function nextTrack(): void {
  currentTrackIndex = getNextTrackIndex();
  playTrack();
}

// Previous track
function previousTrack(): void {
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
  } else {
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
  audioPlayer.currentTime = Math.min(
    audioPlayer.duration,
    audioPlayer.currentTime + 5
  );
});

forward30Button.addEventListener("click", () => {
  audioPlayer.currentTime = Math.min(
    audioPlayer.duration,
    audioPlayer.currentTime + 30
  );
});

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
  populatePlaylist();
});
