<?php
$directory = 'audio/';
$outputFile = 'audio-files.json';

// Get all .mp3 files in the audio directory
$mp3Files = glob($directory . '*.mp3');

// Ensure paths are relative and URL-encoded
$mp3Files = array_map(function($file) {
    $basename = basename($file);
    $encodedBasename = rawurlencode($basename);
    return str_replace('\\', '/', $directory . $encodedBasename);
}, $mp3Files);

// Write to JSON file
$jsonData = json_encode($mp3Files, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
if (file_put_contents($outputFile, $jsonData) === false) {
    echo "Error: Could not write to $outputFile\n";
} else {
    echo "Successfully generated $outputFile with " . count($mp3Files) . " tracks\n";
}
?>