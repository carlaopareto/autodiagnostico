import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ClipboardList, BarChart3, FileText } from "lucide-react";
import conjuntaLogo from "@/assets/conjunta-logo.png";
import iacpLogo from "@/assets/iacp-logo-new.png";
import movesocialLogo from "@/assets/movesocial-logo-new.png";
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
  return <div className="min-h-screen bg-[var(--gradient-subtle)]">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#141614]">
            Autodiagnóstico de<br />Desenvolvimento Institucional
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">Esse é um instrumento criado pela Move Social, a pedido do Instituto ACP e em parceria com a Plataforma Conjunta, para avaliar o desenvolvimento institucional de organizações da sociedade civil. Com base em um questionário de 39 perguntas acerca de diferentes dimensões organizacionais, você consegue avaliar o estágio de desenvolvimento institucional de sua OSC e áreas prioritárias para fortalecimento.</p>
          <Button size="lg" onClick={() => navigate("/questionnaire")} className="font-semibold bg-[#323b9e] text-white hover:opacity-90 rounded-2xl shadow py-[25px] text-3xl px-[58px]">Iniciar</Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => <Card key={index} className="border border-border/40 shadow-sm hover:shadow-md transition rounded-xl">
              <CardHeader className="text-center pb-2">
                <feature.icon className="w-7 h-7 mx-auto mb-3 text-primary" />
                <CardTitle className="text-base font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                {feature.description}
              </CardContent>
            </Card>)}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
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
                  <li><strong>Gestão e planejamento estratégico:</strong> A gestão estratégica está relacionada com a identidade da organização e envolve a capacidade de dar direcionamento para a organização e para seus programas e projetos, garantir o foco do trabalho com coerência estratégica, dedicar tempo para planejar e aprender sobre a prática institucional, além de comunicar para o mundo, de forma coerente, seus resultados.</li>
                  <li><strong>Governança:</strong> A governança diz respeito aos mecanismos de participação nos processos decisórios, assim como a organização dos papéis de cada um(a) nas instâncias de governança da instituição.</li>
                  <li><strong>Gestão e desenvolvimento de pessoas:</strong> A gestão de pessoas está relacionada às políticas de recursos humanos que regem as relações na organização. Envolve a descrição das responsabilidades e atribuições, os planos de desenvolvimento da equipe, cuidado com a qualidade das relações na equipe e a comunicação interna. </li>
                  <li><strong>Incidência em políticas públicas:</strong> A incidência em políticas públicas diz sobre o conhecimento das políticas relacionadas ao campo de trabalho e à influência sobre formuladores de políticas públicas.</li>
                  <li><strong>Redes e alianças:</strong> Redes e alianças diz respeito a forma de atuação integrada e colaborativa com atores no campo que tem objetivos similares.</li>
                  <li><strong>Planejamento de projetos e programas:</strong> O planejamento diz respeito à definição periódica das estratégias dos programas, com relação permanente aos objetivos e missão da organização e com base em análise de necessidades e oportunidades.</li>
                  <li><strong>Monitoramento, avaliação e aprendizagem:</strong> Monitoramento e avaliação refere-se à forma e à periodicidade da coleta de dados, sistematização dos resultados e utilização dos mesmos para aprendizagem da equipe e qualificação dos programas e projetos.</li>
                  <li><strong>Captação de recursos:</strong> A captação de recursos diz respeito às estratégias de financiamento da organização, a diversificação das fontes de recursos e a sustentabilidade financeira das mesmas.</li>
                  <li><strong>Comunicação:</strong> A comunicação se refere às estratégias e canais de relacionamento e divulgação dos trabalhos da organização junto a públicos internos e externos, incluindo sua conexão com a identidade organizacional.</li>
                  <li><strong>Gestão administrativa, financeira e jurídica:</strong> A gestão administrativa e financeira refere-se ao controle financeiro e aos procedimentos administrativos da organização.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="quem">
              <AccordionTrigger>Quem deve preencher o instrumento</AccordionTrigger>
              <AccordionContent>
                Para que a aplicação do instrumento seja mais proveitosa, recomendamos que, no momento do seu preenchimento, busque-se assegurar a presença do maior número de pessoas possível da organização envolvidas direta ou indiretamente em cada uma das 10 dimensões avaliadas pelo instrumento. É possível criar grupos diferentes para avaliar cada dimensão, mas recomendamos que ao menos uma pessoa participe da avaliação de todas as dimensões e possa ter uma visão completa do conjunto. Caso não seja possível realizar um processo que envolva muitas pessoas, recomendamos que pelo menos duas participem da realização da avaliação. Recomendamos, ainda, que seja reservado um periodo de três a quatro horas para preenchimento do instrumento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="como">
              <AccordionTrigger>Como preencher o instrumento</AccordionTrigger>
              <AccordionContent>
                O questionário a ser preenchido traz 39 perguntas distribuídas entre as 10 dimensões do Desenvolvimento Institucional avaliadas pelo instrumento. Cada pergunta inclui quatro possibilidades de resposta. Para que o resultado do diagnóstico não seja comprometido, todas as perguntas devem ser respondidas, ainda que as possibilidades de resposta não descrevam de maneira exata ou rigorosa a realidade da organização. Nesses casos, deverá ser escolhida a resposta que mais se aproxima do cenário da organização.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Realização Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Realização</h2>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <a href="https://conjunta.org/" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
              <img src={conjuntaLogo} alt="Plataforma Conjunta" className="h-16 max-h-16" />
            </a>
            <a href="#" className="inline-block hover:opacity-80 transition-opacity">
              <img src={iacpLogo} alt="Instituto ACP" className="h-16 max-h-16" />
            </a>
            <a href="#" className="inline-block hover:opacity-80 transition-opacity">
              <img src={movesocialLogo} alt="Move Social" className="h-12 max-h-12" />
            </a>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;