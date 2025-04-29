<?php
$directory = 'audio/';
$outputFile = 'audio-files.json';

// Get all .mp3 files in the audio directory
$mp3Files = glob($directory . '*.mp3');

// Create array with ID, file path, and display name
$tracks = array_map(function($file, $index) {
    $basename = basename($file);
    $encodedBasename = rawurlencode($basename);
    $displayName = str_replace('.mp3', '', $basename); // Remove .mp3 for display
    return [
        'id' => $index + 1,
        'file' => str_replace('\\', '/', $directory . $encodedBasename),
        'name' => $displayName
    ];
}, $mp3Files, array_keys($mp3Files));

// Write to JSON file
$jsonData = json_encode($tracks, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
if (file_put_contents($outputFile, $jsonData) === false) {
    echo "Error: Could not write to $outputFile\n";
} else {
    echo "Successfully generated $outputFile with " . count($tracks) . " tracks\n";
}
?>