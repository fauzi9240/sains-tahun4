export type TopicId = 'manusia' | 'haiwan' | 'bahan';

export interface QuizQuestion {
  id: string;
  topicId: TopicId;
  question: string;
  subtopic: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  hint?: string;
  badgeTag?: string;
}

export interface TopicInfo {
  id: TopicId;
  title: string;
  subtitle: string;
  unitNumber: number;
  colorTheme: {
    primary: string;
    light: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    gradient: string;
  };
  summary: string[];
  keyTerms: { term: string; definition: string }[];
}

export interface StudentProgress {
  name: string;
  schoolClass: string;
  teacherName: string;
  topicScores: Record<TopicId, {
    highestScore: number;
    attempts: number;
    passed: boolean; // >= 70%
    badgeLevel?: 'emas' | 'perak' | 'tiada';
    lastAttemptDate?: string;
  }>;
  totalStars: number;
  soundEnabled: boolean;
}

export interface BadgeItem {
  id: string;
  title: string;
  description: string;
  topicId: TopicId | 'semua';
  minScore: number;
  iconName: string;
  unlocked: boolean;
}
