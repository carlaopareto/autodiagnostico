export interface QuestionOption {
  value: number;
  text: string;
}

export interface Question {
  id: string;
  dimension: string;
  category: string;
  text: string;
  options: QuestionOption[];
}

export interface Answer {
  questionId: string;
  value: number;
}

export interface DimensionResult {
  dimension: string;
  average: number;
  questions: number;
}

export interface AssessmentResults {
  dimensions: DimensionResult[];
  overallAverage: number;
  completedAt: Date;
}