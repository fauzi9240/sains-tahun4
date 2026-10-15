/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopicId, StudentProgress } from './types';
import { Navbar } from './components/Navbar';
import { HubView } from './components/HubView';
import { TopicStudyView } from './components/TopicStudyView';
import { QuizView } from './components/QuizView';
import { CertificateView } from './components/CertificateView';
import { BadgesModal } from './components/BadgesModal';
import { sounds } from './utils/audio';

const STORAGE_KEY = 'kssr_sains_tahun4_progress_v1';

const initialProgress: StudentProgress = {
  name: 'Ahmad Danial bin Roslan',
  schoolClass: '4 Amanah · SK Seri Saujana',
  teacherName: 'Cikgu Sains Tahun 4',
  topicScores: {
    manusia: { highestScore: 0, attempts: 0, passed: false, badgeLevel: 'tiada' },
    haiwan: { highestScore: 0, attempts: 0, passed: false, badgeLevel: 'tiada' },
    bahan: { highestScore: 0, attempts: 0, passed: false, badgeLevel: 'tiada' },
  },
  totalStars: 0,
  soundEnabled: true,
};

export default function App() {
  const [progress, setProgress] = useState<StudentProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback to initial
    }
    return initialProgress;
  });

  const [activeView, setActiveView] = useState<'hub' | TopicId | 'sijil'>('hub');
  const [activeQuizTopic, setActiveQuizTopic] = useState<TopicId | null>(null);
  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(progress.soundEnabled ?? true);

  // Sync sound manager on mount & change
  useEffect(() => {
    sounds.setEnabled(soundEnabled);
  }, [soundEnabled]);

  // Persist progress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // quota or private browsing fallback
    }
  }, [progress]);

  const handleToggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    setProgress((prev) => ({ ...prev, soundEnabled: nextVal }));
  };

  const handleNavigate = (view: 'hub' | TopicId | 'sijil') => {
    setActiveQuizTopic(null);
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuiz = (topicId: TopicId) => {
    setActiveQuizTopic(topicId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishQuiz = (topicId: TopicId, scorePercent: number) => {
    setProgress((prev) => {
      const currTopic = prev.topicScores[topicId];
      const isNewHigh = scorePercent > currTopic.highestScore;
      const highest = Math.max(currTopic.highestScore, scorePercent);
      const passed = highest >= 70; // 70% minimum threshold

      let badgeLevel = currTopic.badgeLevel;
      if (highest >= 90) {
        badgeLevel = 'emas';
      } else if (highest >= 70) {
        badgeLevel = 'perak';
      }

      // Add stars for this attempt
      let starsAwarded = 5; // participation
      if (scorePercent >= 90) {
        starsAwarded = 30;
      } else if (scorePercent >= 70) {
        starsAwarded = 20;
      }

      return {
        ...prev,
        totalStars: prev.totalStars + starsAwarded,
        topicScores: {
          ...prev.topicScores,
          [topicId]: {
            highestScore: highest,
            attempts: currTopic.attempts + 1,
            passed: passed,
            badgeLevel: badgeLevel,
            lastAttemptDate: new Date().toLocaleDateString('ms-MY'),
          },
        },
      };
    });
  };

  const handleUpdateProfile = (name: string, schoolClass: string, teacherName: string) => {
    setProgress((prev) => ({
      ...prev,
      name,
      schoolClass,
      teacherName,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      {/* 3-Zone Top Navigation Contract */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        totalStars={progress.totalStars}
        onOpenBadges={() => setIsBadgesModalOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* If Quiz is active, render QuizView */}
        {activeQuizTopic ? (
          <QuizView
            topicId={activeQuizTopic}
            onFinishQuiz={handleFinishQuiz}
            onGoToNotes={() => {
              setActiveQuizTopic(null);
              setActiveView(activeQuizTopic);
            }}
            onGoToCert={() => {
              setActiveQuizTopic(null);
              setActiveView('sijil');
            }}
            soundEnabled={soundEnabled}
            onToggleSound={handleToggleSound}
          />
        ) : activeView === 'hub' ? (
          <HubView
            progress={progress}
            onSelectTopic={(tId) => handleNavigate(tId)}
            onStartQuiz={handleStartQuiz}
            onOpenCertificate={() => handleNavigate('sijil')}
            onOpenBadges={() => setIsBadgesModalOpen(true)}
          />
        ) : activeView === 'sijil' ? (
          <CertificateView
            progress={progress}
            onUpdateProfile={handleUpdateProfile}
            onBackToHub={() => handleNavigate('hub')}
          />
        ) : (
          <TopicStudyView
            topicId={activeView}
            onStartQuiz={handleStartQuiz}
            passed={progress.topicScores[activeView].passed}
            highestScore={progress.topicScores[activeView].highestScore}
          />
        )}
      </main>

      {/* Badges & Rewards Modal */}
      <BadgesModal
        isOpen={isBadgesModalOpen}
        onClose={() => setIsBadgesModalOpen(false)}
        progress={progress}
        onOpenCertificate={() => {
          setIsBadgesModalOpen(false);
          setActiveView('sijil');
        }}
      />

      {/* Quiet, Clean Editorial Footer (No pseudo-technical clutter) */}
      <footer className="no-print bg-white border-t border-slate-200 py-6 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">Sains Tahun 4 KSSR Semakan</span>
            <span>·</span>
            <span>Unit 2: Manusia</span>
            <span>·</span>
            <span>Unit 3: Haiwan</span>
            <span>·</span>
            <span>Unit 8: Bahan</span>
          </div>
          <div>
            Diselaraskan mengikut Dokumen Standard Kurikulum & Pentaksiran (DSKP) Sains Sekolah Rendah.
          </div>
        </div>
      </footer>
    </div>
  );
}
