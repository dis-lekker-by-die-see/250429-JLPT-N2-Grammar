<?php
$directory = 'audio/';
$outputFile = 'audio-files.json';

// Get all .mp3 files in the audio directory
$mp3Files = glob($directory . '*.mp3');

// Ensure paths are relative to the project root
$mp3Files = array_map(function($file) {
    return str_replace('\\', '/', $file); // Normalize path separators
}, $mp3Files);

// Write to JSON file
$jsonData = json_encode($mp3Files, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
if (file_put_contents($outputFile, $jsonData) === false) {
    echo "Error: Could not write to $outputFile\n";
} else {
    echo "Successfully generated $outputFile with " . count($mp3Files) . " tracks\n";
}
?>