import MusicTools from './MusicTools.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('midiToFreq').addEventListener('click', () => {
        const midi = parseFloat(document.getElementById('midiInput').value);
        document.getElementById('freqResult').textContent = MusicTools.midiPitchToFrequency(midi).toFixed(2) + ' Hz';
    });

    document.getElementById('freqToMidi').addEventListener('click', () => {
        const freq = parseFloat(document.getElementById('freqInput').value);
        document.getElementById('midiResult').textContent = Math.round(MusicTools.frequencyToMidiPitch(freq));
    });

    document.getElementById('dbfsToLinear').addEventListener('click', () => {
        const dbfs = parseFloat(document.getElementById('dbfsInput').value);
        document.getElementById('linearResult').textContent = MusicTools.dbfsToLinearAmplitude(dbfs).toFixed(4);
    });

    document.getElementById('linearToDbfs').addEventListener('click', () => {
        const linear = parseFloat(document.getElementById('linearInput').value);
        document.getElementById('dbfsResult').textContent = MusicTools.linearAmplitudeTodBFS(linear).toFixed(2) + ' dB';
    });
});
