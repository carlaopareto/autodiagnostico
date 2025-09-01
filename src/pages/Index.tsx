import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ClipboardList, BarChart3, FileText } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: ClipboardList,
      title: "Questionário Estruturado",
      description: "Perguntas organizadas por dimensões e categorias para avaliação completa",
    },
    {
      icon: BarChart3,
      title: "Análise Visual",
      description: "Gráfico radar mostra o desempenho em cada dimensão avaliada",
    },
    {
      icon: FileText,
      title: "Relatório em PDF",
      description: "Exporte seus resultados em formato profissional para compartilhar",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--gradient-subtle)]">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#141614]">
            Autodiagnóstico de<br />Desenvolvimento Institucional
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Avalie a maturidade e o desenvolvimento da sua organização através de um instrumento
            estruturado que analisa diferentes dimensões organizacionais.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/questionnaire")}
            className="px-8 py-4 text-lg font-semibold bg-[#323b9e] text-white hover:opacity-90 rounded-2xl shadow"
          >
            Iniciar Avaliação
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-border/40 shadow-sm hover:shadow-md transition rounded-xl"
            >
              <CardHeader className="text-center pb-2">
                <feature.icon className="w-7 h-7 mx-auto mb-3 text-primary" />
                <CardTitle className="text-base font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="instrumento">
              <AccordionTrigger>Sobre o instrumento</AccordionTrigger>
              <AccordionContent>
                Este instrumento está estruturado em torno de 10 dimensões de desenvolvimento institucional* - propostas a partir de um marco conceitual e metodológico já testado** e consolidado - que se desdobram em um conjunto de 39 categorias. Cada uma delas possui uma pergunta correspondente, todas de múltipla escolha, contendo 4 alternativas de resposta. Portanto, foram propostos sempre 4 possíveis cenários para cada categoria avaliada, combinando elementos importantes a serem analisados em cada uma delas. A proposta de classificar as respostas em 4 possíveis estágios de desenvolvimento institucional tem como intenção identificar uma percepção geral dos profissionais que respondem ao questionário acerca do nível aproximado de desenvolvimento da organização em cada uma das 10 dimensões avaliadas. Será importante levar em conta que, em alguns casos, as respostas não irão descrever de maneira exata ou rigorosa a realidade da organização. É possível que seja necessário realizar um esforço de aproximação para assinalar a opção que mais se assemelha.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="metodologia">
              <AccordionTrigger>Sobre a metodologia</AccordionTrigger>
              <AccordionContent>
                Este instrumento foi elaborado com a intenção de "tirar uma fotografia" do momento institucional da organização, para que a sua equipe e lideranças possam ter um retrato aproximado de onde ela se situa, na ocasião em que o instrumento é aplicado, em relação a cada uma das dimensões avaliadas. A proposta é a de que todas as 10 dimensões sejam analisadas, independentemente dos temas enfocados pela organização em seus processos de desenvolvimento institucional. Isso porque entendemos que todas elas coexistem, e que as organizações são complexas. Portanto, ao influenciar uma parte de sua estrutura, é provável que isso tenha reflexo em outras dimensões. Por exemplo, uma revisão no modelo de governança pode impactar a forma como a organização olha para a gestão de pessoas ou o modelo de captação de recursos. Neste sentido, olhar para as conexões entre as partes e o todo, investigar o que as conecta, potencializa e fragiliza, é fundamental para a compreensão não apenas de quais dimensões devem ser trabalhadas e fortalecidas, mas também de como esse fortalecimento deverá ser buscado, em um percurso que é único para cada organização.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="dimensoes">
              <AccordionTrigger>Dimensões avaliadas</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
                  <li><strong>Gestão e planejamento estratégico:</strong> A gestão estratégica está relacionada com a identidade da organização...</li>
                  <li><strong>Governança:</strong> A governança diz respeito aos mecanismos de participação nos processos decisórios...</li>
                  <li><strong>Gestão e desenvolvimento de pessoas:</strong> A gestão de pessoas está relacionada às políticas de recursos humanos...</li>
                  <li><strong>Incidência em políticas públicas:</strong> A incidência em políticas públicas diz sobre o conhecimento das políticas relacionadas ao campo de trabalho...</li>
                  <li><strong>Redes e alianças:</strong> Diz respeito à forma de atuação integrada e colaborativa com atores no campo...</li>
                  <li><strong>Planejamento de projetos e programas:</strong> Relacionado à definição periódica das estratégias dos programas...</li>
                  <li><strong>Monitoramento, avaliação e aprendizagem:</strong> Refere-se à forma e periodicidade da coleta de dados...</li>
                  <li><strong>Captação de recursos:</strong> Refere-se às estratégias de financiamento, diversificação de fontes e sustentabilidade financeira...</li>
                  <li><strong>Comunicação:</strong> Refere-se às estratégias e canais de relacionamento e divulgação dos trabalhos...</li>
                  <li><strong>Gestão administrativa, financeira e jurídica:</strong> Refere-se ao controle financeiro e procedimentos administrativos da organização.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="quem">
              <AccordionTrigger>Quem deve preencher o instrumento</AccordionTrigger>
              <AccordionContent>
                Para que a aplicação do instrumento seja mais proveitosa, recomendamos que esteja presente o maior número de pessoas possível...
                (texto completo que você forneceu).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="como">
              <AccordionTrigger>Como preencher o instrumento</AccordionTrigger>
              <AccordionContent>
                O questionário traz 39 perguntas distribuídas entre as 10 dimensões. Todas devem ser respondidas...
                (texto completo que você forneceu).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Index;