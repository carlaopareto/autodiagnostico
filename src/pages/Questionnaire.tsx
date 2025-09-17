import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { QuestionCard } from '@/components/QuestionCard';
import { questions } from '@/data/questions';
import { Answer } from '@/types/assessment';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Download, ArrowLeft } from 'lucide-react';
import jsPDF from 'jspdf';
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
  const downloadPDF = () => {
    const doc = new jsPDF();
    let yPosition = 20;
    const pageHeight = doc.internal.pageSize.height;
    const marginLeft = 20;
    const marginRight = 20;
    const pageWidth = doc.internal.pageSize.width - marginLeft - marginRight;

    // Title
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Autodiagnóstico de Desenvolvimento Institucional", marginLeft, yPosition);
    yPosition += 20;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    questions.forEach((question, index) => {
      // Check if we need a new page
      if (yPosition > pageHeight - 80) {
        doc.addPage();
        yPosition = 20;
      }

      // Question number and text
      doc.setFont("helvetica", "bold");
      const questionText = `${index + 1}. ${question.text}`;
      const questionLines = doc.splitTextToSize(questionText, pageWidth);
      questionLines.forEach((line: string) => {
        if (yPosition > pageHeight - 20) {
          doc.addPage();
          yPosition = 20;
        }
        doc.text(line, marginLeft, yPosition);
        yPosition += 7;
      });
      yPosition += 3;

      // Dimension
      doc.setFont("helvetica", "normal");
      doc.text(`Dimensão: ${question.dimension}`, marginLeft + 5, yPosition);
      yPosition += 10;

      // Options with scores
      question.options.forEach(option => {
        if (yPosition > pageHeight - 20) {
          doc.addPage();
          yPosition = 20;
        }
        const optionText = `(${option.value}) ${option.text}`;
        const lines = doc.splitTextToSize(optionText, pageWidth);
        lines.forEach((line: string) => {
          doc.text(line, marginLeft + 10, yPosition);
          yPosition += 6;
        });
      });
      yPosition += 8;
    });
    doc.save("questionario-desenvolvimento-institucional.pdf");
    toast({
      title: "PDF gerado com sucesso",
      description: "O questionário foi baixado em formato PDF."
    });
  };

  // Dimension descriptions and numbering
  const dimensionInfo = {
    'Gestão e planejamento estratégico': {
      number: 1,
      description: 'A gestão estratégica está relacionada com a identidade da organização e envolve a capacidade de dar direcionamento para a organização e para seus programas e projetos, garantir o foco do trabalho com coerência estratégica, dedicar tempo para planejar e aprender sobre a prática institucional, além de comunicar para o mundo, de forma coerente, seus resultados.'
    },
    'Governança': {
      number: 2,
      description: 'A governança diz respeito aos mecanismos de participação nos processos decisórios, assim como a organização dos papéis de cada um(a) nas instâncias de governança da instituição.'
    },
    'Gestão e desenvolvimento de pessoas': {
      number: 3,
      description: 'A gestão de pessoas está relacionada às políticas de recursos humanos que regem as relações na organização. Envolve a descrição das responsabilidades e atribuições, os planos de desenvolvimento da equipe, cuidado com a qualidade das relações na equipe e a comunicação interna.'
    },
    'Incidência em políticas públicas': {
      number: 4,
      description: 'A incidência em políticas públicas diz sobre o conhecimento das políticas relacionadas ao campo de trabalho e à influência sobre formuladores de políticas públicas.'
    },
    'Redes e alianças': {
      number: 5,
      description: 'Redes e alianças diz respeito a forma de atuação integrada e colaborativa com atores no campo que tem objetivos similares.'
    },
    'Planejamento de projetos e programas': {
      number: 6,
      description: 'O planejamento diz respeito à definição periódica das estratégias dos programas, com relação permanente aos objetivos e missão da organização e com base em análise de necessidades e oportunidades.'
    },
    'Monitoramento, avaliação e aprendizagem': {
      number: 7,
      description: 'Monitoramento e avaliação refere-se à forma e à periodicidade da coleta de dados, sistematização dos resultados e utilização dos mesmos para aprendizagem da equipe e qualificação dos programas e projetos.'
    },
    'Captação de recursos': {
      number: 8,
      description: 'A captação de recursos engloba as estratégias e práticas para obter e manter o financiamento necessário para as atividades da organização. Inclui a diversificação de fontes, sustentabilidade financeira e o desenvolvimento de relacionamentos sólidos com financiadores e parceiros.'
    },
    'Comunicação': {
      number: 9,
      description: 'A comunicação abrange as estratégias, canais e práticas utilizadas pela organização para se relacionar com seus diversos públicos. Envolve a definição de mensagens claras, escolha de canais apropriados e a comunicação efetiva dos resultados e impactos alcançados.'
    },
    'Gestão administrativa, financeira e jurídica': {
      number: 10,
      description: 'Esta dimensão refere-se aos processos e controles necessários para o funcionamento administrativo, financeiro e legal da organização. Inclui controles financeiros, cumprimento de obrigações legais, gestão de riscos e sistemas de informação que suportem a gestão organizacional.'
    }
  };

  // Group questions by dimension
  const questionsByDimension = questions.reduce((acc, question) => {
    if (!acc[question.dimension]) {
      acc[question.dimension] = [];
    }
    acc[question.dimension].push(question);
    return acc;
  }, {} as Record<string, typeof questions>);
  return <div className="min-h-screen bg-[var(--gradient-subtle)]">
      {/* Header with buttons */}
      <div className="bg-background/95 backdrop-blur-sm shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <div className="flex items-center justify-between">
            <Button onClick={() => navigate('/')} variant="ghost" size="sm" className="flex items-center gap-2 text-sm">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
            
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">
                Baixar o Autodiagnóstico:
              </span>
              <Button onClick={downloadPDF} variant="outline" size="sm" className="flex items-center gap-2 text-sm">
                <Download className="w-4 h-4" />
                Baixar PDF
              </Button>
              <Button asChild variant="outline" size="sm" className="flex items-center gap-2 text-sm">
                <a href="https://docs.google.com/spreadsheets/u/3/d/1wHt8KwY5KBQqGCSf9pXl35TlEPGTqIL-mjURWYOl3IQ/copy?pli=1" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4" />
                  Baixar Excel
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Progress Bar */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm shadow-sm border-b z-10">
        <div className="container mx-auto px-4 py-3 max-w-4xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">Progresso</span>
            <span className="text-sm font-medium flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-primary" />
              {completedQuestions}/{questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-[#141614]">
            Autodiagnóstico de Desenvolvimento Institucional
          </h1>
          <p className="text-muted-foreground text-lg mb-4">Este instrumento foi criado para ajudar as organizações da sociedade civil a refletirem sobre seu desenvolvimento institucional. Ele está estruturado em torno 10 dimensões, que se desdobram em um conjunto de 39 categorias. Cada uma delas possui uma pergunta de múltipla escolha correspondente, sempre com quatro alternativas de resposta, que ilustram cenários possíveis. Sabemos que as alternativas propostas não irão descrever com exatidão a realidade das OSCs — e tudo bem! A ideia não é chegar a uma resposta "certa" ou a um retrato perfeito da realidade da organização. O importante é escolher aquela opção que mais se aproxima do cenário atual.</p>

<p className="text-muted-foreground text-lg mb-4">Para garantir um bom diagnóstico, é necessário que todas as perguntas sejam respondidas. É fundamental analisar as 10 dimensões em conjunto, mesmo que algumas delas não pareçam estar entre as prioridades do momento. Isso porque as dimensões são interligadas: mudanças em uma área tendem a gerar efeitos em outras. Por exemplo, ajustes no modelo de governança podem influenciar a gestão de pessoas ou a captação de recursos. Compreender essas conexões é essencial para identificar não apenas o que precisa ser fortalecido, mas também como conduzir esse processo — sempre respeitando a história, o contexto e a singularidade de cada organização.</p>

<p className="text-muted-foreground text-lg mb-4">Acima de tudo, esse é um convite para que o uso do instrumento na sua organização seja uma oportunidade de realizarem conversas importantes, que acabam não sendo priorizadas na correria do dia a dia. E também para honrar e celebrar o percurso da organização até aqui.</p>

<p className="text-muted-foreground text-lg">Boa aplicação!</p>
        </div>

        {/* Questions by Dimension */}
        {Object.entries(questionsByDimension).map(([dimension, dimensionQuestions]) => {
          const info = dimensionInfo[dimension];
          return (
            <div key={dimension} className="mb-8">
              <div className="bg-card rounded-lg p-6 mb-6 shadow-[var(--shadow-card)] border-l-4 border-l-primary">
                <h2 className="text-xl font-semibold mb-3">
                  Dimensão {info?.number} - {dimension}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {info?.description}
                </p>
              </div>
              
              {dimensionQuestions.map((question, index) => {
                const questionNumber = questions.findIndex(q => q.id === question.id) + 1;
                const currentAnswer = answers.find(a => a.questionId === question.id);
                return (
                  <QuestionCard 
                    key={question.id} 
                    question={question} 
                    value={currentAnswer?.value.toString()} 
                    onValueChange={value => handleAnswerChange(question.id, value)} 
                    questionNumber={questionNumber} 
                  />
                );
              })}
            </div>
          );
        })}

        {/* Submit Button */}
        <div className="flex justify-center pt-8">
          <Button onClick={handleSubmit} size="lg" disabled={answers.length !== questions.length} className="px-8 py-4 text-lg font-semibold bg-[#323b9e] text-white hover:opacity-90 rounded-2xl shadow">
            Confirmar envio
          </Button>
        </div>
      </div>
    </div>;
};