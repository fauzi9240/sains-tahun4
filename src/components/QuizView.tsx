import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { QuizQuestion, TopicId, TopicInfo } from '../types';
import { QUIZ_QUESTIONS, TOPICS } from '../data/scienceCurriculum';
import { sounds } from '../utils/audio';
import { speechReader } from '../utils/speech';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Award, Star, BookOpen, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface QuizViewProps {
  topicId: TopicId;
  onFinishQuiz: (topicId: TopicId, scorePercent: number, correctCount: number) => void;
  onGoToNotes: () => void;
  onGoToCert: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  topicId,
  onFinishQuiz,
  onGoToNotes,
  onGoToCert,
  soundEnabled,
  onToggleSound,
}) => {
  const topic: TopicInfo = TOPICS[topicId];
  const questions: QuizQuestion[] = QUIZ_QUESTIONS[topicId];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null || isSubmitted) return;
    setIsSubmitted(true);

    const isCorrect = selectedOption === currentQ.correctAnswerIndex;
    if (isCorrect) {
      sounds.playCorrect();
    } else {
      sounds.playIncorrect();
    }

    setUserAnswers((prev) => [...prev, selectedOption]);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      // Finished all 10 questions
      completeQuiz();
    }
  };

  const completeQuiz = () => {
    // Calculate final score
    let correct = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswerIndex) {
        correct += 1;
      }
    });

    const percent = Math.round((correct / questions.length) * 100);
    setIsCompleted(true);
    onFinishQuiz(topicId, percent, correct);

    if (percent >= 70) {
      sounds.playVictory();
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // fallback silently
      }
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setUserAnswers([]);
    setIsCompleted(false);
  };

  // If completed, show Comprehensive Result & Remediation Screen
  if (isCompleted) {
    let correctCount = 0;
    const wrongQuestions: { q: QuizQuestion; userChoice: number }[] = [];

    questions.forEach((q, idx) => {
      const uAns = userAnswers[idx];
      if (uAns === q.correctAnswerIndex) {
        correctCount += 1;
      } else {
        wrongQuestions.push({ q, userChoice: uAns });
      }
    });

    const scorePercent = Math.round((correctCount / questions.length) * 100);
    const passedMastery = scorePercent >= 70; // 70% pass threshold agreed in planning

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Score Hero Banner */}
        <div
          className={`rounded-3xl p-8 text-center border shadow-sm ${
            passedMastery
              ? 'bg-gradient-to-b from-emerald-50 to-teal-50/50 border-emerald-200'
              : 'bg-gradient-to-b from-amber-50 to-orange-50/50 border-amber-200'
          }`}
        >
          <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-xs bg-white">
            {passedMastery ? (scorePercent >= 90 ? '🏆' : '⭐') : '📖'}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-2 uppercase tracking-wider bg-white shadow-2xs">
            {passedMastery ? (
              <span className="text-emerald-700 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                TAHAP PENGUASAAN TERCAPAI ({scorePercent}%)
              </span>
            ) : (
              <span className="text-amber-700 flex items-center gap-1">
                PERLU ULANG KAJI ({scorePercent}%)
              </span>
            )}
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {passedMastery
              ? scorePercent >= 90
                ? 'Tahniah! Cemerlang & Menguasai Penuh!'
                : 'Syabas! Anda Berjaya Menguasai Topik Ini!'
              : 'Usaha Lagi! Anda Hampir Menguasai!'}
          </h2>

          <p className="text-sm text-slate-600 max-w-lg mx-auto mt-2 leading-relaxed">
            {passedMastery
              ? `Anda menjawab ${correctCount} daripada ${questions.length} soalan dengan betul dan melepasi tanda aras minimum 70%. Teruskan kecemerlangan!`
              : `Anda mendapat markah ${scorePercent}% (${correctCount}/${questions.length}). Tanda aras penguasaan ialah 70%. Sila semak nota pembetulan di bawah sebelum mencuba semula.`}
          </p>

          {/* Key Metric Tally */}
          <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-slate-200/60">
            <div>
              <span className="text-2xl font-extrabold text-slate-900 tabular-nums">{scorePercent}%</span>
              <span className="text-xs text-slate-500 block">Markah Anda</span>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <span className="text-2xl font-extrabold text-emerald-600 tabular-nums">{correctCount} / 10</span>
              <span className="text-xs text-slate-500 block">Jawapan Tepat</span>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <span className="text-2xl font-extrabold text-amber-500 flex items-center justify-center gap-1 tabular-nums">
                <Star className="w-5 h-5 fill-amber-400" />
                {passedMastery ? (scorePercent >= 90 ? '+30' : '+20') : '+5'}
              </span>
              <span className="text-xs text-slate-500 block">Mata Bintang</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              onClick={handleRestartQuiz}
              className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold flex items-center gap-2 transition-all shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              Cuba Kuiz Semula
            </button>

            <button
              onClick={onGoToNotes}
              className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold flex items-center gap-2 transition-all shadow-xs"
            >
              <BookOpen className="w-4 h-4 text-sky-600" />
              Ulang Kaji Nota & Rajah
            </button>

            {passedMastery && (
              <button
                onClick={onGoToCert}
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold flex items-center gap-2 transition-all shadow-sm"
              >
                <Award className="w-4 h-4" />
                Jana Sijil Penghargaan
              </button>
            )}
          </div>
        </div>

        {/* Remediation Guide for incorrect answers */}
        {wrongQuestions.length > 0 && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <XCircle className="w-5 h-5" />
                Bimbingan Pembetulan Sains ({wrongQuestions.length} Soalan Perlu Semakan)
              </div>
              <span className="text-xs text-slate-400">Rujuk nota di bawah</span>
            </div>

            <div className="space-y-4">
              {wrongQuestions.map(({ q, userChoice }, idx) => (
                <div key={q.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                  <div className="font-bold text-slate-900 text-sm">
                    {idx + 1}. {q.question}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-rose-900">
                      <span className="font-semibold block text-[11px] text-rose-600">Jawapan Anda:</span>
                      {q.options[userChoice] ?? 'Tidak Dijawab'}
                    </div>
                    <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900">
                      <span className="font-semibold block text-[11px] text-emerald-600">Jawapan Betul:</span>
                      {q.options[q.correctAnswerIndex]}
                    </div>
                  </div>

                  <div className="mt-2 text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80">
                    <strong>Penerangan Buku Teks:</strong> {q.explanation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Active Quiz View
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header bar: Topic title, Question indicator & sound toggle */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-xl">
            {topicId === 'manusia' && '🫁'}
            {topicId === 'haiwan' && '🐎'}
            {topicId === 'bahan' && '🔬'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Unit {topic.unitNumber} Sains Tahun 4
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                {currentQ.subtopic}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mt-0.5">
              Kuiz Interaktif Topik: {topic.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSound}
            aria-label={soundEnabled ? 'Matikan Bunyi' : 'Hidupkan Bunyi'}
            className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>
          <div className="text-right">
            <span className="text-xs text-slate-400 block">Kemajuan</span>
            <span className="text-sm font-bold text-slate-800 tabular-nums">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-full transition-all duration-300 ease-out"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Soalan No. {currentIndex + 1}
            </span>
            <button
              onClick={() => {
                const questionSpeech = `Soalan ${currentIndex + 1}. ${currentQ.question}. Pilihan A: ${currentQ.options[0]}. Pilihan B: ${currentQ.options[1]}. Pilihan C: ${currentQ.options[2]}. Pilihan D: ${currentQ.options[3]}.`;
                speechReader.speak(questionSpeech);
              }}
              className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Volume2 className="w-3.5 h-3.5" />
              Bacakan Soalan
            </button>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            {currentQ.question}
          </h2>
          {currentQ.hint && !isSubmitted && (
            <p className="text-xs text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200/60 max-w-fit">
              💡 Petunjuk: {currentQ.hint}
            </p>
          )}
        </div>

        {/* Options Grid */}
        <div className="space-y-3">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQ.correctAnswerIndex;

            let optionClass = 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-800';

            if (isSubmitted) {
              if (isCorrect) {
                optionClass = 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-500/20';
              } else if (isSelected) {
                optionClass = 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-500/20';
              } else {
                optionClass = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
              }
            } else if (isSelected) {
              optionClass = 'border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-600/20 shadow-xs';
            }

            return (
              <button
                key={idx}
                disabled={isSubmitted}
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left p-4 rounded-2xl border text-sm font-semibold transition-all flex items-center justify-between ${optionClass}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                      isSelected || (isSubmitted && isCorrect)
                        ? 'bg-current text-white'
                        : 'bg-white border border-slate-300 text-slate-600'
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{option}</span>
                </div>

                {isSubmitted && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {isSubmitted && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Immediate Feedback Box */}
        {isSubmitted && (
          <div
            className={`p-4 rounded-2xl border text-xs leading-relaxed animate-fade-in ${
              selectedOption === currentQ.correctAnswerIndex
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-rose-50 border-rose-200 text-rose-900'
            }`}
          >
            <div className="font-bold flex items-center gap-1.5 text-sm mb-1">
              {selectedOption === currentQ.correctAnswerIndex ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Jawapan Anda Tepat!
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-600" />
                  Jawapan Kurang Tepat
                </>
              )}
            </div>
            <p className="mt-1">{currentQ.explanation}</p>
          </div>
        )}

        {/* Action Button Strip */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={onGoToNotes}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            ← Kembali ke Nota
          </button>

          {!isSubmitted ? (
            <button
              disabled={selectedOption === null}
              onClick={handleConfirmAnswer}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-sm ${
                selectedOption === null
                  ? 'bg-slate-300 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
              }`}
            >
              Hantar Jawapan
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all flex items-center gap-2 active:scale-95 shadow-sm"
            >
              {currentIndex < questions.length - 1 ? (
                <>
                  Soalan Seterusnya
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                'Lihat Keputusan Penuh ➔'
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
