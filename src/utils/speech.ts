// Browser Web Speech API SpeechSynthesis helper for Bahasa Melayu

class SpeechReader {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private onSpeakingChangeCallbacks: Set<(isSpeaking: boolean, text: string | null) => void> = new Set();
  private currentText: string | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  private getBestMalayVoice(): SpeechSynthesisVoice | null {
    if (!this.voices.length && this.synth) {
      this.voices = this.synth.getVoices();
    }
    // Prefer ms-MY, fallback to id-ID, then any voice
    const malayVoice = this.voices.find(
      (v) => v.lang === 'ms-MY' || v.lang.startsWith('ms')
    );
    if (malayVoice) return malayVoice;

    const indonesianVoice = this.voices.find(
      (v) => v.lang === 'id-ID' || v.lang.startsWith('id')
    );
    if (indonesianVoice) return indonesianVoice;

    return null;
  }

  public isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public isSpeaking(): boolean {
    return !!this.synth && this.synth.speaking;
  }

  public getCurrentText(): string | null {
    return this.currentText;
  }

  public subscribe(callback: (isSpeaking: boolean, text: string | null) => void): () => void {
    this.onSpeakingChangeCallbacks.add(callback);
    return () => {
      this.onSpeakingChangeCallbacks.delete(callback);
    };
  }

  private notify(isSpeaking: boolean, text: string | null) {
    this.currentText = isSpeaking ? text : null;
    this.onSpeakingChangeCallbacks.forEach((cb) => cb(isSpeaking, this.currentText));
  }

  public speak(text: string, onEnd?: () => void) {
    if (!this.synth) return;

    // If already speaking, cancel previous
    this.stop();

    // Clean up emojis and arrows for smoother Malay pronunciation
    const cleanText = text
      .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
      .replace(/➔|→/g, ' kemudian ke ')
      .replace(/O₂/g, 'oksigen')
      .replace(/CO₂/g, 'karbon dioksida')
      .replace(/%/g, ' peratus ')
      .replace(/\+/g, ' tambah ')
      .trim();

    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ms-MY';
    utterance.rate = 0.92; // slightly gentle reading rate for 10-year-old primary students
    utterance.pitch = 1.05; // clear friendly pitch

    const voice = this.getBestMalayVoice();
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => {
      this.notify(true, text);
    };

    utterance.onend = () => {
      this.notify(false, null);
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      this.notify(false, null);
      if (onEnd) onEnd();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public stop() {
    if (!this.synth) return;
    this.synth.cancel();
    this.notify(false, null);
  }
}

export const speechReader = new SpeechReader();
