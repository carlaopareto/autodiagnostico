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
  const {
    toast
  } = useToast();
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
    if (!results) return;

    try {
      toast({
        title: "Gerando PDF...",
        description: "Aguarde enquanto preparamos seu relatório."
      });

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      let yPosition = 20;

      // Calcular top e bottom dimensions (mesma lógica da tela)
      const sortedDimensions = [...results.dimensions].sort((a, b) => b.average - a.average);
      const topDimensions = sortedDimensions.slice(0, 2);
      const bottomDimensions = sortedDimensions.slice(-2).reverse();

      // Título e data
      pdf.setFontSize(18);
      pdf.setFont("helvetica", "bold");
      pdf.text("Resultados do Autodiagnóstico", pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 10;

      pdf.setFontSize(12);
      pdf.setFont("helvetica", "normal");
      pdf.text(`Gerado em ${results.completedAt.toLocaleDateString('pt-BR')}`, pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 20;

      // Pontuação geral
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.text("Pontuação Geral", pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 10;

      pdf.setFontSize(24);
      pdf.text(`${results.overallAverage}/10`, pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 8;

      pdf.setFontSize(12);
      pdf.setFont("helvetica", "normal");
      const performanceText = results.overallAverage >= 8 ? 'Excelente' : 
                             results.overallAverage >= 6 ? 'Bom' : 
                             results.overallAverage >= 4 ? 'Regular' : 'Requer atenção';
      pdf.text(performanceText, pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 25;

      // Capturar apenas o gráfico radar
      const chartElement = document.querySelector('.recharts-wrapper');
      if (chartElement) {
        const chartCanvas = await html2canvas(chartElement as HTMLElement, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff'
        });

        const chartImgData = chartCanvas.toDataURL('image/png');
        const chartWidth = 120;
        const chartHeight = (chartCanvas.height * chartWidth) / chartCanvas.width;
        pdf.addImage(chartImgData, 'PNG', (pageWidth - chartWidth) / 2, yPosition, chartWidth, chartHeight);
        yPosition += chartHeight + 20;
      }

      // Verificar se precisa de nova página
      if (yPosition > pageWidth - 60) {
        pdf.addPage();
        yPosition = 20;
      }

      // Seção pontos fortes
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      pdf.text("Dimensões que sua organização está muito bem", 20, yPosition);
      yPosition += 10;

      pdf.setFontSize(11);
      pdf.setFont("helvetica", "normal");
      topDimensions.forEach((d) => {
        pdf.setFont("helvetica", "normal");
        pdf.text("•", 25, yPosition);
        pdf.setFont("helvetica", "bold");
        pdf.text(d.dimension, 30, yPosition);
        yPosition += 7;
      });

      yPosition += 10;

      // Seção pontos de atenção
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      pdf.text("Dimensões nas quais sua organização deve se desenvolver", 20, yPosition);
      yPosition += 10;

      pdf.setFontSize(11);
      pdf.setFont("helvetica", "normal");
      bottomDimensions.forEach((d) => {
        pdf.setFont("helvetica", "normal");
        pdf.text("•", 25, yPosition);
        pdf.setFont("helvetica", "bold");
        pdf.text(d.dimension, 30, yPosition);
        yPosition += 7;
      });

      yPosition += 12;

      // Verificar se precisa de nova página para tabela
      if (yPosition > pageWidth - 80) {
        pdf.addPage();
        yPosition = 20;
      }

      // Tabela de resumo
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      pdf.text("Resumo por Dimensão", 20, yPosition);
      yPosition += 15;

      // Cabeçalho da tabela
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "bold");
      pdf.text("Dimensão", 20, yPosition);
      pdf.text("Perguntas", 120, yPosition);
      pdf.text("Pontuação", 145, yPosition);
      pdf.text("Desempenho", 170, yPosition);
      yPosition += 8;

      // Linha do cabeçalho
      pdf.line(20, yPosition - 2, pageWidth - 20, yPosition - 2);
      yPosition += 3;

      // Dados da tabela
      pdf.setFont("helvetica", "normal");
      results.dimensions.forEach((dimension) => {
        if (yPosition > pageWidth - 30) {
          pdf.addPage();
          yPosition = 30;
        }

        const performanceText = dimension.average >= 8 ? 'Excelente' : 
                               dimension.average >= 6 ? 'Bom' : 
                               dimension.average >= 4 ? 'Regular' : 'Requer atenção';

        pdf.text(dimension.dimension.substring(0, 35) + (dimension.dimension.length > 35 ? '...' : ''), 20, yPosition);
        pdf.text(dimension.questions.toString(), 125, yPosition);
        pdf.text(`${dimension.average}/10`, 150, yPosition);
        pdf.text(performanceText, 175, yPosition);
        yPosition += 8;
      });

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
    return <div className="min-h-screen flex items-center justify-center bg-[var(--gradient-subtle)]">
        <div className="text-center">
          <BarChart3 className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse" />
          <p className="text-muted-foreground">Carregando resultados...</p>
        </div>
      </div>;
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
  return <div className="min-h-screen bg-[var(--gradient-subtle)]">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div id="results-container" className="space-y-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 bg-[var(--gradient-primary)] bg-clip-text text-[#131413]/0">
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
              <div className="text-4xl font-bold mb-2 bg-[var(--gradient-primary)] bg-clip-text text-transparent bg-[#1b1c1b]">
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
                    <PolarAngleAxis dataKey="dimension" tick={{
                      fontSize: 12,
                      fill: 'hsl(var(--foreground))'
                    }} className="text-xs" />
                    <PolarRadiusAxis angle={90} domain={[0, 10]} tick={{
                      fontSize: 10,
                      fill: 'hsl(var(--muted-foreground))'
                    }} />
                    <Radar name="Pontuação" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} strokeWidth={2} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Analysis Sections */}
          {(() => {
            const sortedDimensions = [...results.dimensions].sort((a, b) => b.average - a.average);
            const topDimensions = sortedDimensions.slice(0, 2);
            const bottomDimensions = sortedDimensions.slice(-2).reverse();

            return (
              <>
                {/* Seção pontos fortes */}
          <Card className="shadow-[var(--shadow-card)] border-border/50">
                  <CardHeader>
                    <CardTitle>Dimensões que sua organização está muito bem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {topDimensions.map((d) => (
                        <li key={d.dimension}><strong>{d.dimension}</strong></li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Seção pontos de atenção */}
                <Card className="shadow-[var(--shadow-card)] border-border/50">
                  <CardHeader>
                    <CardTitle>Dimensões nas quais sua organização deve se desenvolver</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {bottomDimensions.map((d) => (
                        <li key={d.dimension}><strong>{d.dimension}</strong></li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </>
            );
          })()}

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
                  {results.dimensions.map(dimension => <TableRow key={dimension.dimension}>
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
                    </TableRow>)}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button variant="outline" onClick={() => navigate('/')} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Button>
          <Button onClick={exportToPDF} className="flex items-center gap-2 bg-[var(--gradient-primary)] hover:opacity-90 transition-[var(--transition-smooth)] bg-[#9620a3] text-[#0f100f]">
            <FileDown className="w-4 h-4" />
            Exportar PDF
          </Button>
        </div>
      </div>
    </div>;
};