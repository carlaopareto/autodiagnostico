import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, BarChart3, FileText, Users, Target, Settings } from "lucide-react";
const Index = () => {
  const navigate = useNavigate();
  const features = [{
    icon: ClipboardList,
    title: "Questionário Estruturado",
    description: "Perguntas organizadas por dimensões e categorias para avaliação completa"
  }, {
    icon: BarChart3,
    title: "Análise Visual",
    description: "Gráfico radar mostra o desempenho em cada dimensão avaliada"
  }, {
    icon: FileText,
    title: "Relatório em PDF",
    description: "Exporte seus resultados em formato profissional para compartilhar"
  }];
  const dimensions = [{
    icon: Target,
    title: "Gestão e Planejamento Estratégico",
    description: "Avalie visão, missão, valores e planejamento organizacional"
  }, {
    icon: Users,
    title: "Governança",
    description: "Analise estrutura de governança e conselhos consultivos"
  }, {
    icon: Settings,
    title: "Mais Dimensões",
    description: "Expandindo com novas dimensões conforme desenvolvimento"
  }];
  return <div className="min-h-screen bg-[var(--gradient-subtle)]">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
            Ferramenta de Autoavaliação
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-[var(--gradient-primary)] bg-clip-text leading-tight text-[#141614]">
            Autodiagnóstico de<br />Desenvolvimento Institucional
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Avalie a maturidade e o desenvolvimento da sua organização através de um instrumento 
            estruturado que analisa diferentes dimensões organizacionais.
          </p>
          <Button size="lg" onClick={() => navigate('/questionnaire')} className="px-8 py-4 text-lg font-semibold bg-[var(--gradient-primary)] hover:opacity-90 transition-[var(--transition-smooth)] shadow-[var(--shadow-elegant)] bg-[#323b9e] text-[#070708]">
            Iniciar Avaliação
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => <Card key={index} className="shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Dimensions */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Dimensões Avaliadas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada dimensão é composta por categorias específicas com perguntas estruturadas 
              para uma avaliação completa e direcionada.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {dimensions.map((dimension, index) => <Card key={index} className="shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <dimension.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-base leading-tight">{dimension.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{dimension.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="shadow-[var(--shadow-card)] border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              O questionário leva aproximadamente 10-15 minutos para ser concluído. 
              Todas as perguntas são obrigatórias para garantir uma avaliação precisa.
            </p>
            <Button size="lg" onClick={() => navigate('/questionnaire')} className="px-8 py-4 text-lg font-semibold bg-[var(--gradient-primary)] hover:opacity-90 transition-[var(--transition-smooth)]">
              Começar Autodiagnóstico
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default Index;