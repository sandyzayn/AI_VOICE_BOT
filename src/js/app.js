class VoiceReplacementApp {
    constructor() {
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.originalAudioBlob = null;
        this.isRecording = false;
        
        this.initializeElements();
        this.setupEventListeners();
    }

    initializeElements() {
        this.startRecordBtn = document.getElementById('startRecord');
        this.stopRecordBtn = document.getElementById('stopRecord');
        this.playAudioBtn = document.getElementById('playAudio');
        this.transformVoiceBtn = document.getElementById('transformVoice');
        this.statusText = document.getElementById('status');
        this.originalAudio = document.getElementById('originalAudio');
        this.transformedAudio = document.getElementById('transformedAudio');
        this.voiceTypeSelect = document.getElementById('voiceType');
    }

    setupEventListeners() {
        this.startRecordBtn.addEventListener('click', () => this.startRecording());
        this.stopRecordBtn.addEventListener('click', () => this.stopRecording());
        this.playAudioBtn.addEventListener('click', () => this.playOriginalAudio());
        this.transformVoiceBtn.addEventListener('click', () => this.transformVoice());
    }

    async startRecording() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.mediaRecorder = new MediaRecorder(stream);
            this.audioChunks = [];

            this.mediaRecorder.ondataavailable = (event) => {
                this.audioChunks.push(event.data);
            };

            this.mediaRecorder.onstop = () => {
                this.originalAudioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(this.originalAudioBlob);
                this.originalAudio.src = audioUrl;
                
                this.playAudioBtn.disabled = false;
                this.transformVoiceBtn.disabled = false;
                this.statusText.textContent = 'Recording completed!';
            };

            this.mediaRecorder.start();
            this.isRecording = true;
            
            this.startRecordBtn.disabled = true;
            this.stopRecordBtn.disabled = false;
            this.statusText.textContent = 'Recording...';
            this.statusText.classList.add('recording');

        } catch (error) {
            console.error('Error accessing microphone:', error);
            this.statusText.textContent = 'Error accessing microphone. Please check permissions.';
        }
    }

    stopRecording() {
        if (this.mediaRecorder && this.isRecording) {
            this.mediaRecorder.stop();
            this.isRecording = false;
            
            this.startRecordBtn.disabled = false;
            this.stopRecordBtn.disabled = true;
            this.statusText.classList.remove('recording');
            
            // Stop all tracks
            this.mediaRecorder.stream.getTracks().forEach(track => track.stop());
        }
    }

    playOriginalAudio() {
        if (this.originalAudioBlob) {
            this.originalAudio.play();
        }
    }

    async transformVoice() {
        if (!this.originalAudioBlob) return;

        this.statusText.textContent = 'Transforming voice...';
        this.transformVoiceBtn.disabled = true;

        try {
            // Simulate AI voice transformation
            // In a real application, you would send the audio to a backend service
            await this.simulateVoiceTransformation();
            
            const transformedUrl = this.simulateTransformedAudio();
            this.transformedAudio.src = transformedUrl;
            
            this.statusText.textContent = 'Voice transformation complete!';
            this.transformVoiceBtn.disabled = false;

        } catch (error) {
            console.error('Error transforming voice:', error);
            this.statusText.textContent = 'Error transforming voice. Please try again.';
            this.transformVoiceBtn.disabled = false;
        }
    }

    simulateVoiceTransformation() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    }

    simulateTransformedAudio() {
        // In a real application, this would be the transformed audio from your AI service
        // For demo purposes, we'll use the original audio
        return this.originalAudio.src;
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new VoiceReplacementApp();
});
