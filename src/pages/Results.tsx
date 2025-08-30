import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { Answer, AssessmentResults, DimensionResult } from '@/types/assessment';
import { questions } from '@/data/questions';
import { FileDown, ArrowLeft, BarChart3 } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useToast } from '@/hooks/use-toast';

export const Results = () => {
  const [results, setResults] = useState<AssessmentResults | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const storedAnswers = localStorage.getItem('assessmentAnswers');
    
    if (!storedAnswers) {
      navigate('/');
      return;
    }

    const answers: Answer[] = JSON.parse(storedAnswers);
    const calculatedResults = calculateResults(answers);
    setResults(calculatedResults);
  }, [navigate]);

  const calculateResults = (answers: Answer[]): AssessmentResults => {
    // Group by dimension
    const dimensionGroups = questions.reduce((acc, question) => {
      if (!acc[question.dimension]) {
        acc[question.dimension] = [];
      }
      acc[question.dimension].push(question.id);
      return acc;
    }, {} as Record<string, string[]>);

    // Calculate averages
    const dimensions: DimensionResult[] = Object.entries(dimensionGroups).map(([dimension, questionIds]) => {
      const dimensionAnswers = answers.filter(answer => questionIds.includes(answer.questionId));
      const average = dimensionAnswers.reduce((sum, answer) => sum + answer.value, 0) / dimensionAnswers.length;
      
      return {
        dimension,
        average: Number(average.toFixed(1)),
        questions: questionIds.length
      };
    });

    const overallAverage = Number((dimensions.reduce((sum, dim) => sum + dim.average, 0) / dimensions.length).toFixed(1));

    return {
      dimensions,
      overallAverage,
      completedAt: new Date()
    };
  };

  const exportToPDF = async () => {
    const element = document.getElementById('results-container');
    if (!element || !results) return;

    try {
      toast({
        title: "Gerando PDF...",
        description: "Aguarde enquanto preparamos seu relatório."
      });

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth - 20;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, Math.min(imgHeight, pageHeight - 20));
      
      const fileName = `autodiagnostico-${new Date().toISOString().split('T')[0]}.pdf`;
      pdf.save(fileName);

      toast({
        title: "PDF gerado com sucesso!",
        description: `Arquivo ${fileName} foi baixado.`
      });
    } catch (error) {
      toast({
        title: "Erro ao gerar PDF",
        description: "Ocorreu um erro durante a geração do relatório.",
        variant: "destructive"
      });
    }
  };

  if (!results) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--gradient-subtle)]">
        <div className="text-center">
          <BarChart3 className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse" />
          <p className="text-muted-foreground">Carregando resultados...</p>
        </div>
      </div>
    );
  }

  // Prepare data for radar chart
  const radarData = results.dimensions.map(dim => ({
    dimension: dim.dimension.replace(' e ', '\ne ').replace('planejamento', 'plan.'),
    value: dim.average,
    fullName: dim.dimension
  }));

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    if (score >= 6) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    if (score >= 4) return 'bg-orange-100 text-orange-800 border-orange-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  const getPerformanceText = (score: number) => {
    if (score >= 8) return 'Excelente';
    if (score >= 6) return 'Bom';
    if (score >= 4) return 'Regular';
    return 'Requer atenção';
  };

  return (
    <div className="min-h-screen bg-[var(--gradient-subtle)]">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div id="results-container" className="space-y-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 bg-[var(--gradient-primary)] bg-clip-text text-transparent">
              Resultados do Autodiagnóstico
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Relatório completo da avaliação institucional
            </p>
            <Badge variant="secondary" className="text-sm">
              Gerado em {results.completedAt.toLocaleDateString('pt-BR')}
            </Badge>
          </div>

          {/* Overall Score */}
          <Card className="shadow-[var(--shadow-card)] border-border/50">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-lg">Pontuação Geral</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold mb-2 bg-[var(--gradient-primary)] bg-clip-text text-transparent">
                {results.overallAverage}/10
              </div>
              <Badge className={getScoreColor(results.overallAverage)}>
                {getPerformanceText(results.overallAverage)}
              </Badge>
            </CardContent>
          </Card>

          {/* Radar Chart */}
          <Card className="shadow-[var(--shadow-card)] border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Gráfico de Desempenho por Dimensão
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis 
                      dataKey="dimension" 
                      tick={{ fontSize: 12, fill: 'hsl(var(--foreground))' }}
                      className="text-xs"
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 10]} 
                      tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <Radar 
                      name="Pontuação" 
                      dataKey="value" 
                      stroke="hsl(var(--primary))" 
                      fill="hsl(var(--primary))" 
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Results Table */}
          <Card className="shadow-[var(--shadow-card)] border-border/50">
            <CardHeader>
              <CardTitle>Resumo por Dimensão</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Dimensão</TableHead>
                    <TableHead className="text-center">Perguntas</TableHead>
                    <TableHead className="text-center">Pontuação</TableHead>
                    <TableHead className="text-center">Desempenho</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results.dimensions.map((dimension) => (
                    <TableRow key={dimension.dimension}>
                      <TableCell className="font-medium">{dimension.dimension}</TableCell>
                      <TableCell className="text-center">{dimension.questions}</TableCell>
                      <TableCell className="text-center font-semibold">
                        {dimension.average}/10
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge className={getScoreColor(dimension.average)}>
                          {getPerformanceText(dimension.average)}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Button>
          <Button
            onClick={exportToPDF}
            className="flex items-center gap-2 bg-[var(--gradient-primary)] hover:opacity-90 transition-[var(--transition-smooth)]"
          >
            <FileDown className="w-4 h-4" />
            Exportar PDF
          </Button>
        </div>
      </div>
    </div>
  );
};