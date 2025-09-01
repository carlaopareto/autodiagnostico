import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { QuestionCard } from '@/components/QuestionCard';
import { questions } from '@/data/questions';
import { Answer } from '@/types/assessment';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle } from 'lucide-react';
export const Questionnaire = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => {
      const existing = prev.findIndex(a => a.questionId === questionId);
      const newAnswer = {
        questionId,
        value: parseFloat(value)
      };
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = newAnswer;
        return updated;
      }
      return [...prev, newAnswer];
    });
  };
  const handleSubmit = () => {
    if (answers.length !== questions.length) {
      toast({
        title: "Respostas incompletas",
        description: "Por favor, responda todas as perguntas antes de prosseguir.",
        variant: "destructive"
      });
      return;
    }

    // Store answers in localStorage
    localStorage.setItem('assessmentAnswers', JSON.stringify(answers));
    navigate('/results');
  };
  const progress = answers.length / questions.length * 100;
  const completedQuestions = answers.length;

  // Group questions by dimension
  const questionsByDimension = questions.reduce((acc, question) => {
    if (!acc[question.dimension]) {
      acc[question.dimension] = [];
    }
    acc[question.dimension].push(question);
    return acc;
  }, {} as Record<string, typeof questions>);
  return <div className="min-h-screen bg-[var(--gradient-subtle)]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 bg-[var(--gradient-primary)] bg-clip-text text-[#0d0e0d]/0">
            Autodiagnóstico de Desenvolvimento Institucional
          </h1>
          <p className="text-muted-foreground text-lg">
            Responda todas as perguntas para avaliar o desenvolvimento da sua organização
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8 bg-card rounded-lg p-6 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-muted-foreground">Progresso</span>
            <span className="text-sm font-medium flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-primary" />
              {completedQuestions}/{questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Questions by Dimension */}
        {Object.entries(questionsByDimension).map(([dimension, dimensionQuestions]) => <div key={dimension} className="mb-8">
            <div className="bg-card rounded-lg p-6 mb-6 shadow-[var(--shadow-card)] border-l-4 border-l-primary">
              <h2 className="text-xl font-semibold mb-2">{dimension}</h2>
              <p className="text-muted-foreground">
                {dimensionQuestions.length} pergunta{dimensionQuestions.length > 1 ? 's' : ''}
              </p>
            </div>
            
            {dimensionQuestions.map((question, index) => {
          const questionNumber = questions.findIndex(q => q.id === question.id) + 1;
          const currentAnswer = answers.find(a => a.questionId === question.id);
          return <QuestionCard key={question.id} question={question} value={currentAnswer?.value.toString()} onValueChange={value => handleAnswerChange(question.id, value)} questionNumber={questionNumber} />;
        })}
          </div>)}

        {/* Submit Button */}
        <div className="flex justify-center pt-8">
          <Button onClick={handleSubmit} size="lg" disabled={answers.length !== questions.length} className="px-8 py-4 text-lg font-semibold bg-[var(--gradient-primary)] hover:opacity-90 transition-[var(--transition-smooth)] shadow-[var(--shadow-elegant)] text-[#0c0d0c] bg-[#6c6ce8]">
            Confirmar envio
          </Button>
        </div>
      </div>
    </div>;
};