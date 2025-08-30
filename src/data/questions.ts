import { Question } from '@/types/assessment';

export const questions: Question[] = [
  {
    id: '1',
    dimension: 'Gestão e planejamento estratégico',
    category: 'Visão, Missão e valores',
    text: 'A visão, missão e valores foram estabelecidos? Estão atualizados? São declarados e visibilizados dentro e fora da organização? Orientam todas(os) na organização?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A visão, missão e valores não estão formalmente estabelecidos.' },
      { value: 5, text: 'A visão, missão e valores foram estabelecidos, mas estão desatualizados e já não atendem ao contexto que a organização pretende transformar.' },
      { value: 7.5, text: 'A missão, visão e valores são atuais, declarados e visibilizados dentro e fora da organização, mas poderiam estar mais bem redigidos, orientando de forma mais específica.' },
      { value: 10, text: 'A missão, visão e valores são atuais, declarados e orientam a atuação de todas(os) na organização de forma específica e direcionada.' }
    ]
  },
  {
    id: '2',
    dimension: 'Gestão e planejamento estratégico',
    category: 'Programas e projetos',
    text: 'Programas e projetos estão relacionados à missão da organização? Mantêm comunicação entre si?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'Programas e projetos não estão relacionados à missão da organização e não mantêm comunicação entre si.' },
      { value: 5, text: 'Programas e projetos estão em harmonia com a missão, mas ainda precisam se comunicar entre si.' },
      { value: 7.5, text: 'Programas e projetos estão em harmonia com a missão, há consciência coletiva da necessidade de comunicação, mas ainda precisam avançar nessa consolidação.' },
      { value: 10, text: 'Programas e projetos estão em harmonia com a missão da organização e mantêm comunicação entre si.' }
    ]
  },
  {
    id: '3',
    dimension: 'Gestão e planejamento estratégico',
    category: 'Plano estratégico',
    text: 'Há processo de construção de planejamento formal? Há um plano estratégico construído com foco nos resultados e impactos esperados? O plano é revisado com frequência?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A equipe se reúne somente para resolver problemas operacionais. Não há processo de planejamento formal.' },
      { value: 5, text: 'Há um plano estratégico estabelecido, mas ainda precisa de revisões periódicas e acaba sendo pouco consultado.' },
      { value: 7.5, text: 'Há um plano estratégico com base em resultados esperados, mas ainda precisa se consolidar como ferramenta estratégica usada no dia a dia.' },
      { value: 10, text: 'Há um plano estratégico construído com foco em resultados e impactos, revisado com frequência e usado para orientar o trabalho da organização.' }
    ]
  },
  {
    id: '4',
    dimension: 'Governança',
    category: 'Composição dos órgãos de governança',
    text: 'Existe um órgão de governança? Qual é o tamanho? Qual é o nível de diversidade e experiência no campo de quem o compõe? Há critérios nítidos para sua composição?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'Não existe órgão de governança ou ele é pequeno, homogêneo e sem diversidade.' },
      { value: 5, text: 'O órgão de governança tem experiência no campo, mas ainda não é diverso (especialmente gênero e raça) e se reúne de forma esporádica.' },
      { value: 7.5, text: 'O órgão de governança tem experiência, se reúne com frequência, mas ainda sem diversidade consolidada.' },
      { value: 10, text: 'O órgão de governança é diverso e coerente com a missão da organização, reúne-se com frequência e contribui com o pensar estratégico e operacional.' }
    ]
  },
  {
    id: '5',
    dimension: 'Governança',
    category: 'Conselho consultivo',
    text: 'Existe um conselho consultivo? Qual o nível de diversidade e de experiência de quem o compõe? Qual a frequência de encontros?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'Não existe conselho consultivo na organização.' },
      { value: 5, text: 'Existe conselho consultivo pouco diverso, que se reúne pouco e não contribui para o desenvolvimento da organização.' },
      { value: 7.5, text: 'Existe conselho consultivo diverso e rotativo, mas se reúne sem frequência definida e contribui pouco para a gestão.' },
      { value: 10, text: 'Existe conselho consultivo diverso e rotativo, com encontros regulares que qualificam a gestão e o desenvolvimento da organização.' }
    ]
  },
  {
    id: '6',
    dimension: 'Governança',
    category: 'Processo de sucessão de lideranças',
    text: 'Em que medida a imagem da instituição está conectada à imagem do(a) fundador(a)? Existem espaços de diálogo sobre processo sucessório? Este tema está presente no planejamento estratégico? Em que medida a equipe e outros grupos de interesse estão envolvidos neste debate? A organização reflete sobre modelos de liderança? Há um programa de formação de lideranças? Houve sucessão de lideranças na OSC?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'Não se discute ou existem poucos espaços de diálogo sobre processo sucessório na organização, que tem a sua imagem totalmente conectada à imagem do(a) fundador(a).' },
      { value: 5, text: 'Não se discute ou existem poucos espaços de diálogo sobre processo sucessório na organização, mas a sua imagem não está vinculada à imagem do(a) fundador(a).' },
      { value: 7.5, text: 'O processo sucessório é discutido e está no horizonte e planos da organização, mas as condições dadas para esse passo ainda precisam ser elaboradas e implementadas.' },
      { value: 10, text: 'A organização reflete sobre modelos de liderança (inclusive os mais distribuídos e/ou participativos) e já implantou a sucessão de lideranças, de maneira planejada e alinhada aos objetivos e estratégia da organização, com a participação da equipe. A sucessão é vista como parte do desenvolvimento institucional.' }
    ]
  },
  {
    id: '7',
    dimension: 'Governança',
    category: 'Responsabilidades e atribuições das instâncias de governança',
    text: 'As responsabilidades e atribuições dos membros dos órgãos de governança estão definidas e nítidas para todos? A equipe compreende o papel desse órgão? A equipe percebe as atuações desses órgãos como relevantes e engajadas com o aprimoramento contínuo da organização?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'As responsabilidades e atribuições dos membros dos órgãos de governança ainda precisam ser definidas e a equipe expressa dúvidas sobre o papel desse órgão.' },
      { value: 5, text: 'As responsabilidades e atribuições dos membros dos órgãos de governança estão bem descritas apenas no papel; na prática, todo mundo faz de tudo um pouco e cada um faz o que pode.' },
      { value: 7.5, text: 'Os membros dos órgãos de governança têm consciência de suas atribuições e responsabilidades, mas ainda há desencontros e desalinhamentos que desgastam e dificultam os avanços.' },
      { value: 10, text: 'Os membros dos órgãos de governança têm nitidez sobre suas responsabilidades e atribuições e suas atuações são percebidas como relevantes pela equipe porque estão sempre engajadas com o aprimoramento contínuo da organização.' }
    ]
  },
  {
    id: '8',
    dimension: 'Governança',
    category: 'Tomada de decisões',
    text: 'Em que medida o processo de tomada de decisão está centralizado no principal órgão de governança? Em que medida a equipe é consultada/participa da tomada de decisões? Quais os níveis de participação existentes na tomada de decisões? Em que medida as decisões tomadas são comunicadas?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'O principal órgão de governança centraliza o processo de tomada de decisão, que é bastante subjetivo e informal.' },
      { value: 5, text: 'O principal órgão de governança centraliza o processo de tomada de decisão, ainda que consulte a equipe e comunique as decisões tomadas.' },
      { value: 7.5, text: 'O principal órgão de governança realiza consulta aberta à participação da equipe para as decisões, mas o fluxo de tomada de decisão ainda precisa ser definido e compartilhado com a equipe. A participação é concedida.' },
      { value: 10, text: 'Membros do órgão de governança mantém o canal aberto com a equipe e consideram diferentes vozes. Existem diferentes níveis de participação na tomada de decisões.' }
    ]
  },
  {
    id: '9',
    dimension: 'Governança',
    category: 'Espaços de participação',
    text: 'Há espaços de escuta construídos na organização para sua equipe e comunidade? Em que medida a qualidade da escuta é efetiva (ou seja, capaz de influenciar as políticas e práticas da organização)?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A organização ainda precisa construir espaços de escuta para sua equipe e comunidade.' },
      { value: 5, text: 'Equipe e comunidade beneficiária sentem-se escutadas, mas consideram que a qualidade da escuta pode ser mais efetiva, uma vez que influenciam pouco as políticas e práticas da organização.' },
      { value: 7.5, text: 'Equipe e comunidade beneficiária sentem-se escutadas, há espaço formal para escutas internas e com a comunidade, mas as escutas ainda precisam ser sistematizadas num processo reflexivo e de aprendizagem.' },
      { value: 10, text: 'Equipe e comunidade beneficiária sentem-se escutadas em suas necessidades e proposições, elas influenciam as práticas da organização.' }
    ]
  },
  {
    id: '10',
    dimension: 'Gestão e desenvolvimento de pessoas',
    category: 'Política e planos de gestão de pessoas',
    text: 'Quais são as principais ações de gestão de pessoas? A organização possui uma política e/ou plano de gestão de pessoas? Eles são aplicados de maneira eficiente? Eles são reconhecidos como relevantes pela equipe? Os cargos, papéis e salários são definidos conforme critérios transparentes? Há processos de seleção, contratação e efetivação criteriosos e transparentes? Como são estabelecidos os tipos de vínculos nas contratações (CLT, PJ, voluntários)?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'As principais ações de gestão de pessoas são contratações, demissões e atividades de departamento pessoal (pagamento de salários, gestão de benefícios) e não existem regras claras sobre os tipos de vínculos estabelecidos nas contratações (CLT, PJ, voluntários).' },
      { value: 5, text: 'A organização possui uma política de gestão de pessoas, mas os cargos, papéis e salários são definidos conforme critérios pouco transparentes, assim como os tipos de vínculos estabelecidos nas contratações (CLT, PJ, voluntários).' },
      { value: 7.5, text: 'A organização possui uma política e plano de gestão de pessoas, cujo processo de seleção, contratação e efetivação são criteriosos e transparentes, assim como os tipos de vínculos estabelecidos nas contratações (CLT, PJ, voluntários). Os cargos, papéis, salários e tipo de vínculo são definidos com base em critérios estabelecidos pela gestão.' },
      { value: 10, text: 'As políticas e planos de gestão de pessoas são aplicados de maneira eficiente e reconhecidos como relevantes pela equipe. Os cargos, papéis, salários e tipos de vínculos são definidos com base na demanda estratégica e operacional da organização.' }
    ]
  },
  {
    id: '11',
    dimension: 'Gestão e desenvolvimento de pessoas',
    category: 'Desenvolvimento profissional',
    text: 'Há investimento ou priorização no desenvolvimento profissional da equipe? Se sim, a capacitação/formação se dá de forma continuada? Prioriza o plano estratégico, tático e operacional da organização? É reconhecida como relevante pela equipe? Há momentos de reflexão sobre as aprendizagens realizadas nos processos de trabalho?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'Não há investimento ou priorização no desenvolvimento profissional da equipe, uma vez que se acredita que a bagagem já trazida dá conta da ação a ser desenvolvida. O desejo, a boa vontade e a militância são suficientes para se manterem atuando.' },
      { value: 5, text: 'Identifica-se a necessidade de aperfeiçoamento profissional em diversas áreas, mas o desenvolvimento profissional se dá exclusivamente na prática, no fazer.' },
      { value: 7.5, text: 'Há investimento em capacitações e formações, mas os processos formativos são técnicos e operacionais, com pouca articulação com os processos estratégicos.' },
      { value: 10, text: 'Há investimento em capacitação e formação de forma continuada que prioriza o plano estratégico, tático e operacional da organização e são reconhecidos como relevantes pela equipe. Há também momentos de reflexão sobre as aprendizagens realizadas nos processos de trabalho.' }
    ]
  },
  {
    id: '12',
    dimension: 'Gestão e desenvolvimento de pessoas',
    category: 'Rotatividade de pessoal',
    text: 'Como se dá o giro de entradas e saídas de pessoal? Há diagnóstico periódico para observação dos pontos determinantes das saídas? O fenômeno da rotatividade da equipe é entendido internamente como um indicador de sustentabilidade?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'O giro de entradas e saídas de pessoal é alto: cada um(a) faz o que pode, quando pode e enquanto pode.' },
      { value: 5, text: 'O giro de entradas e saídas de pessoal é moderado e depende do período de implementação e execução de projetos e programas.' },
      { value: 7.5, text: 'O giro de entradas e saídas é moderado, mas há diagnóstico periódico para observação dos pontos determinantes das saídas, na perspectiva de identificar se há situação institucional provocadora, ou trata-se de fenômeno contextual.' },
      { value: 10, text: 'O giro de entradas e saídas é baixo, o que favorece a consolidação de resultados e atuação da organização. Mantém-se olhar atento para o fenômeno (rotatividade da equipe) como indicador de sustentabilidade.' }
    ]
  },
  {
    id: '13',
    dimension: 'Gestão e desenvolvimento de pessoas',
    category: 'Clima organizacional',
    text: 'Há situações de conflitos recorrentes na organização? A cultura organizacional é mais competitiva ou mais colaborativa? O clima organizacional é predominantemente reconhecido pela equipe como positivo e motivador ou pesado e marcado por ruídos?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'Existem muitos conflitos permeando a organização. A cultura organizacional é mais competitiva do que colaborativa e há espaço para melhorar o clima organizacional.' },
      { value: 5, text: 'A cultura organizacional é predominantemente competitiva, ainda que, em algumas dinâmicas e espaços, relações colaborativas se expressem. Situações de conflito são recorrentes e o clima organizacional é inconstante, sendo positivo em alguns períodos, mas pesado ou marcado por ruídos em outros.' },
      { value: 7.5, text: 'A cultura organizacional é predominantemente marcada pela colaboração, ainda que situações de conflito sejam recorrentes. Com isso, o clima organizacional é bom, mas há espaço para melhorá-lo e torná-lo mais motivador.' },
      { value: 10, text: 'A cultura organizacional é predominantemente marcada pela colaboração e as situações de conflito são raras. O clima organizacional é reconhecido pela equipe como positivo e motivador.' }
    ]
  },
  {
    id: '14',
    dimension: 'Gestão e desenvolvimento de pessoas',
    category: 'Gestão de conflitos',
    text: 'Como a presença de tensões e conflitos tende a ser tratada pela organização? Quais espaços existem para que as diferenças de ideias, tensões e conflitos sejam explicitados? Como os conflitos são encaminhados? Quão efetivos são esses encaminhamentos? Em que medida os conflitos geram aprendizados e avanços na perspectiva do desenvolvimento das pessoas e da organização?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A presença de tensões e conflitos tende a ser tratada como problema pela organização, que tem a cultura de enfatizar erros e procurar culpados.' },
      { value: 5, text: 'Há espaço para que as tensões e conflitos sejam explicitados, mas há necessidade de cuidar dos encaminhamentos, para garantir que se tornem efetivos.' },
      { value: 7.5, text: 'Os conflitos são tratados como naturais e inerentes onde há relações de diversidade de ideias e interesses. No entanto, mesmo criando-se um espaço para que as diferentes expressões se manifestem, há necessidade de qualificar a condução dos mesmos para que as consequências não se revelem posteriormente.' },
      { value: 10, text: 'Os conflitos são tratados como naturais, há espaço para expressão das diferenças de ideias e há uma cultura propícia ao diálogo, para que o processo se reverta em aprendizados e avanços na perspectiva do desenvolvimento das pessoas e da organização.' }
    ]
  },
  {
    id: '15',
    dimension: 'Gestão e desenvolvimento de pessoas',
    category: 'Funções e responsabilidades da equipe',
    text: 'Há descrição documentada dos cargos e papéis? A equipe reconhece as atribuições de cada função? Há um processo permanente de avaliação de desempenho? Em que medida as sobrecargas de trabalho estão presentes? quando detectadas, como as sobrecargas são avaliadas e encaminhadas?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'O senso de papéis e responsabilidades é abrangente e genérico; a avaliação de desempenho é realizada de maneira subjetiva, esporádica e informal. Há evidente sobrecarga para algumas funções.' },
      { value: 5, text: 'Há descrição documentada dos cargos e papéis e a equipe reconhece as atribuições de cada função, porém é preciso construir um processo permanente de avaliação de desempenho. E a sobrecarga continua.' },
      { value: 7.5, text: 'Há descrição documentada dos cargos e papéis e a equipe reconhece as atribuições de cada função. Existe um processo de avaliação de desempenho anual, mas as sobrecargas geram preocupação permanente.' },
      { value: 10, text: 'Há descrição dos cargos, papéis e atribuições e as sobrecargas, quando detectadas, são avaliadas e definidas estratégias para superação, garantindo a saúde da equipe. Existe processo permanente de avaliação de desempenho na perspectiva de aperfeiçoamento.' }
    ]
  },
  {
    id: '16',
    dimension: 'Gestão e desenvolvimento de pessoas',
    category: 'Comprometimento da equipe',
    text: 'Qual é o nível de compromisso da equipe com a organização e os ideais que ela carrega? Há processos reflexivos estruturados pela organização que aprimoram o envolvimento qualitativo da equipe? Há senso de responsabilização coletiva e celebrações pelas vitórias no campo?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A equipe apresenta pouco compromisso com a organização e os ideais que ela carrega. Com isso, há profissionais que apenas cumprem tarefas.' },
      { value: 5, text: 'Há diferentes níveis de comprometimento com a organização, o que afeta a qualidade do trabalho.' },
      { value: 7.5, text: 'Há diferentes níveis de comprometimento com a organização, mas há processos reflexivos estruturados pela organização que aprimoram o envolvimento qualitativo de todos.' },
      { value: 10, text: 'Grande parte da equipe é comprometida com as causas da organização e com seus processos internos. Há um senso de responsabilização coletiva e celebrações pelas vitórias no campo e reconhecimento desse impacto no desenvolvimento da organização, que mantém processos reflexivos a fim de sustentar o comprometimento da equipe.' }
    ]
  },
  {
    id: '17',
    dimension: 'Gestão e desenvolvimento de pessoas',
    category: 'Diversidade e inclusão',
    text: 'Como se dá a composição da equipe? Quão diverso e inclusivo é seu perfil (em termos de gênero, raça, orientação sexual, origem socioeconômica, pessoas com deficiência e experiência profissional)? Como essa diversidade de perfil se dá nos diferentes níveis hierárquicos da organização? Existe uma política de ação afirmativa e/ou de inclusão nos processos seletivos? O quão presente a agenda de diversidade e inclusão está na organização (para dentro e para fora)?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A equipe é homogênea em sua composição, com perfil pouco diverso em gênero, raça, orientação sexual, origem socioeconômica e experiência profissional. Não há preocupação com a inclusão de pessoas com deficiência.' },
      { value: 5, text: 'A organização começou um movimento de consciência sobre a importância da diversidade e inclusão na equipe.' },
      { value: 7.5, text: 'A organização implementou uma política de ação afirmativa e inclusão no processos seletivos, e tem colocado essas agendas em pauta nos processos reflexivos e na inter-relação com a missão.' },
      { value: 10, text: 'A equipe é diversa (gênero, raça, orientação sexual, origem socioeconômica e experiência profissional) e inclusiva em todos os níveis hierárquicos da organização e suas vozes são ouvidas e valorizadas. A questão da diversidade e inclusão sempre está na pauta para dentro e para fora.' }
    ]
  },
  {
    id: '18',
    dimension: 'Incidência em políticas públicas',
    category: 'Estratégias de influência e incidência',
    text: 'Com qual frequência e intensidade a organização participa de debates externos? Como a organização reconhece seu papel nas instâncias de controle, proposição e incidência em políticas públicas (Ex.: Conselhos, redes, coletivos...)? Em que medida a organização possui habilidades e estratégias consolidadas para protagonizar, participar, contribuir e manter o diálogo em redes e instâncias com propósitos de influência e incidência vinculadas ao seu campo de atuação?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A organização somente participa de debates externos de maneira pontual. Ainda precisa reconhecer seu papel nas instâncias de controle, proposição e incidência em políticas públicas (Ex. Conselhos, redes, coletivos...).' },
      { value: 5, text: 'A organização reconhece a necessidade de influenciar e incidir nas políticas públicas, mas seu envolvimento é parcial nas instâncias propositivas. Mantém-se no esforço da representatividade, porém com pouca contribuição efetiva.' },
      { value: 7.5, text: 'A organização tem sido um ator ativo na participação em instâncias de proposições de políticas públicas, mas precisa de um foco estratégico para esse fim.' },
      { value: 10, text: 'A organização possui habilidades e estratégias consolidadas para protagonizar, participar, contribuir e manter o diálogo em redes e instâncias com propósitos de influência e incidência vinculadas ao seu campo de atuação.' }
    ]
  },
  {
    id: '19',
    dimension: 'Redes e alianças',
    category: 'Colaboração no campo de atuação',
    text: 'Como a organização reconhece o seu papel no campo? De que maneira a organização colabora com outros atores/organizações, desenvolvendo ações conjuntas? Como se dão as trocas de metodologias e aprendizagens da organização com outros atores/organizações do campo?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A organização atua sempre diretamente na sua causa e busca apoio externo apenas quando precisa resolver situações específicas.' },
      { value: 5, text: 'A organização reconhece o seu papel no campo, mas colabora de maneira pontual com outros atores/organizações, desenvolvendo poucas ações conjuntas.' },
      { value: 7.5, text: 'A organização reconhece o seu papel no campo e colabora de maneira ativa com outros atores/organizações, mas há espaço para melhoria dessa troca.' },
      { value: 10, text: 'A organização reconhece o seu papel no campo e colabora de maneira ativa com outros atores, desenvolvendo ações conjuntas, trocando metodologias e aprendizagens.' }
    ]
  },
  {
    id: '20',
    dimension: 'Redes e alianças',
    category: 'Participação em redes',
    text: 'A organização participa de redes? Ocupa assentos em conselhos do seu campo de atuação? Qual é o grau de influência e protagonismo da organização nas redes e conselhos que participa? Há uma estratégia em prol de agendas comuns construída?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A organização não participa de redes e nem ocupa assentos em conselhos do seu campo de atuação.' },
      { value: 5, text: 'A organização participa esporadicamente, de redes, conselhos e alianças Há necessidade de construir uma estratégia em prol de agendas comuns.' },
      { value: 7.5, text: 'A organização participa das redes, conselhos e alianças relevantes ao seu campo, mas sempre de maneira secundária, com pouco poder de influência.' },
      { value: 10, text: 'A organização participa ativamente de redes, conselhos e alianças em prol de agendas comuns, lidera ou atua de maneira protagonista naquelas principais de seu campo, e tem participação ativa na composição e articulação das ações.' }
    ]
  },
  {
    id: '21',
    dimension: 'Planejamento de projetos e programas',
    category: 'Elaboração de projetos, programas e ações',
    text: 'Para quais finalidades os projetos e programas são elaborados (ex. para responder problemas específicos, a partir de demandas das comunidades, a partir de demandas de potenciais financiadores)? Em que medida a organização é capaz de articular as demandas das comunidades com as oportunidades de captação de recursos e as potencialidades institucionais? Há uma equipe ou profissional responsável por elaborar projetos ou programas?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'Os projetos ou programas são sempre elaborados para solucionar problemas específicos e para responder às demandas primárias das comunidades. Ou são voltados a responder aos potenciais financiadores, o que influencia a percepção de uma identidade difusa/confusa da organização.' },
      { value: 5, text: 'A organização elabora projetos que atendem às demandas das comunidades, mas tem dificuldade em sustentá-los financeiramente, de modo articulado com oportunidades de captação de recursos.' },
      { value: 7.5, text: 'A organização elabora projetos que atendem às demandas das comunidades, vive o conflito da introdução de questões demandadas pelos financiadores e tenta, da melhor forma, atender as duas. Mas isso gera uma sobrecarga, pelo fato de esses dois tipos de demandas não estarem alinhadas entre si.' },
      { value: 10, text: 'A equipe ou profissional responsável por elaborar projetos ou programas é capaz de articular as demandas das comunidades com as oportunidades de captação de recursos e as potencialidades institucionais, em alinhamento com a missão organizacional numa lógica de colaboração com parceiros e outros atores relevantes no território.' }
    ]
  },
  {
    id: '22',
    dimension: 'Planejamento de projetos e programas',
    category: 'Planejamento de projetos e programas',
    text: 'O planejamento dos projetos e programas é feito a partir de um diagnóstico de contexto? Há coerência entre objetivos, atividades e resultados esperados? É revisado regularmente?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'Os projetos e programas são construídos no dia a dia, na interação direta entre equipes e comunidades, e se transformam em atividades que se repetem todos os anos.' },
      { value: 5, text: 'O planejamento dos projetos e programas envolve diagnóstico de contexto. No entanto, ainda precisa ser revisado regularmente.' },
      { value: 7.5, text: 'O planejamento dos projetos e programas envolve diagnóstico de contexto e há periodicidade para sua revisão, mas o plano ainda precisa de maior atenção às mudanças de contexto.' },
      { value: 10, text: 'O planejamento dos projetos e programas envolve diagnóstico de contexto e há coerência entre objetivos, atividades e resultados esperados. O planejamento é revisado regularmente. É uma ferramenta estratégica viva que é rediscutida considerando a conjuntura.' }
    ]
  },
  {
    id: '23',
    dimension: 'Planejamento de projetos e programas',
    category: 'Plano de gestão de riscos',
    text: 'Existe um plano de risco elaborado? Se sim, ele é consistente? É conhecido por toda a equipe? Há pessoal disponível para monitorar os riscos com base no plano de gestão de riscos?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A conversa sobre riscos na organização ocorre sempre que alguém antevê algum perigo ou algum imprevisto acontece. Há inexistência de espaço de gestão de riscos.' },
      { value: 5, text: 'Há consciência sobre a importância de um plano de gestão de riscos, mas ainda precisa ser elaborado e implementado.' },
      { value: 7.5, text: 'Há um plano de risco elaborado, mas há necessidade de disponibilidade de pessoal para gestão desse processo.' },
      { value: 10, text: 'Há um comitê/grupo formado na organização para monitorar os riscos com base no plano de gestão de riscos, que é consistente e conhecido por toda a equipe.' }
    ]
  },
  {
    id: '24',
    dimension: 'Monitoramento, avaliação e aprendizagem',
    category: 'Monitoramento',
    text: 'A organização coleta dados dos projetos/programas? Se sim, com qual frequência? Com qual finalidade (ex. atender a demanda de algum financiador, por demanda de dirigentes)? Como os dados coletados são analisados? Como os dados monitorados são utilizados na qualificação das estratégias dos projetos/programas?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A coleta de dados dos projetos/programas, acontece somente pontualmente para atender a demanda de algum financiador.' },
      { value: 5, text: 'Cada pessoa da equipe coleta por conta própria e esporadicamente os dados que precisa à medida da necessidade e, eventualmente, sob demanda de algum(a) dirigente.' },
      { value: 7.5, text: 'A coleta de dados é feita periodicamente, mas ainda há necessidade de analisá-los sistematicamente. Perde-se muito tempo preenchendo ferramentas e dedica-se pouco tempo para a análise dos dados.' },
      { value: 10, text: 'A coleta de dados é feita periodicamente, os dados são analisados e utilizados para monitorar os resultados esperados e qualificar, a partir do aprendizado que a análise gera, as estratégias dos projetos/programas.' }
    ]
  },
  {
    id: '25',
    dimension: 'Monitoramento, avaliação e aprendizagem',
    category: 'Avaliação de projetos e programas',
    text: 'Com qual frequência a organização realiza avaliações de seus projetos e programas? Qual propósito as avaliações realizadas têm (prestar contas para os financiadores, geração de aprendizagem a partir da experiência)? De que maneira os resultados das avaliações são utilizados (aprendizagem da equipe, ajustes, tomada de decisões estratégicas, etc)?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A avaliação dos projetos e programas, quando realizada, tem o propósito exclusivo de prestar contas para os financiadores, ao invés de uma preocupação com a geração de aprendizagem a partir da experiência.' },
      { value: 5, text: 'A organização realiza avaliações esporádicas de seus projetos e programas, mas ainda não utiliza seus resultados para aprendizagem da equipe, para ajustes e para tomada de decisões estratégicas.' },
      { value: 7.5, text: 'A organização realiza avaliações periódicas de seus projetos e programas, mas pode potencializar o uso dos resultados para aprendizagem, ajustes e tomada de decisões estratégicas.' },
      { value: 10, text: 'A organização realiza avaliações periódicas de seus projetos e programas, utiliza seus resultados para aprendizagem da equipe, para ajustes e para tomada de decisões estratégicas.' }
    ]
  },
  {
    id: '26',
    dimension: 'Monitoramento, avaliação e aprendizagem',
    category: 'Sistematização da prática',
    text: 'As práticas institucionais e programáticas são registradas, sistematizadas e compartilhadas entre a equipe? Como e para que os relatórios de análises e sistematizações da prática são utilizados na organização?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'As práticas institucionais e programáticas são conhecidas de modo desigual pela equipe e algumas pessoas concentram o conhecimento. Os relatórios são descritivos e arquivados.' },
      { value: 5, text: 'As práticas da organização são registradas, sistematizadas e compartilhadas entre a equipe, mas são vistas como atividades burocráticas que fornecem poucos insumos de análises.' },
      { value: 7.5, text: 'As práticas da organização são registradas e sistematizadas, além de compartilhadas entre a equipe, torna-se um documento de possível consulta que acaba engavetado.' },
      { value: 10, text: 'As práticas da organização são registradas, sistematizadas e compartilhadas entre a equipe para gerar conhecimento e protocolos ou parâmetros gerais orientadores são construídos para dar eficiência aos processos. Relatórios de análises e sistematizações são insumos para aprendizagem.' }
    ]
  },
  {
    id: '27',
    dimension: 'Monitoramento, avaliação e aprendizagem',
    category: 'Reflexão sobre capacidade institucional',
    text: 'A organização realiza ou prevê espaços para reflexão sobre sua capacidade institucional? Com que frequência? De que maneira os achados dessas reflexões são utilizados para gerar melhoria nas práticas da organização?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A reflexão sobre a capacidade institucional não é realizada ou então é realizada de maneira informal e eventual, com um caráter primário de controle e prestação de contas.' },
      { value: 5, text: 'Há momentos formais de reflexão sobre a capacidade institucional e a percepção que predomina na equipe é que esses momentos são de controle.' },
      { value: 7.5, text: 'Há momentos formais ou processos regulares de reflexão sobre a capacidade institucional que têm avançado na perspectiva de aprendizado, mas ainda é necessário utilizar os achados para gerar melhoria nas práticas da organização.' },
      { value: 10, text: 'Há momentos formais ou processos regulares de reflexão sobre a capacidade institucional que são percebidos como oportunidade para a aprendizagem e melhoria contínua das práticas.' }
    ]
  },
  {
    id: '28',
    dimension: 'Monitoramento, avaliação e aprendizagem',
    category: 'Espaços de aprendizagem e inovação',
    text: 'Com qual frequência ocorrem momentos destinados à aprendizagem e inovação? Há uma agenda de aprendizagem prevista e implantada na organização? Como os erros são entendidos na organização? Há espaços de trocas entre a equipe e com outras organizações do campo?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'Os momentos destinados à aprendizagem e inovação ocorrem esporadicamente à medida que oportunidades externas aparecem. Os erros ainda não são percebidos como oportunidade de aprendizagem.' },
      { value: 5, text: 'Existe um plano de aprendizagem, mas a equipe o considera insuficiente e pouco eficaz. Os erros ainda não são percebidos como oportunidade de aprendizagem.' },
      { value: 7.5, text: 'Existe um plano de aprendizagem definido pelas prioridades estratégicas da organização, mas há necessidade de criar espaços de troca, internamente, entre equipes. Erros são percebidos como oportunidade de aprendizagem.' },
      { value: 10, text: 'Existe um plano de aprendizagem e inovação definidos pelas prioridades da organização, que visa a qualidade do trabalho. Erros são percebidos como oportunidade de aprendizagem e há trocas entre a equipe e com outras organizações do campo.' }
    ]
  },
  {
    id: '29',
    dimension: 'Captação de recursos',
    category: 'Relacionamento com doadores e investidores',
    text: 'Como e em que momentos se dá a comunicação e relação com os doadores e/ou investidores? Qual é o nível de transparência nessa comunicação? Qual é a qualidade da reputação da organização entre os investidores e doadores?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A comunicação e relação com os doadores e/ou investidores se dá à medida que a organização precisa de recursos.' },
      { value: 5, text: 'A organização está fortalecendo sua reputação entre investidores e doadores, mas de maneira dispersa, sendo necessária a construção de uma estratégia nítida.' },
      { value: 7.5, text: 'A organização já possui boa reputação entre os investidores e doadores, é reconhecida por sua trajetória, mas a comunicação pode melhorar a transparência e orientar melhor seus modos de relacionamento direcionados a cada parceiro.' },
      { value: 10, text: 'A organização possui ótima reputação entre investidores e doadores e é reconhecida por se comunicar com nitidez e transparência com os diferentes doadores e investidores.' }
    ]
  },
  {
    id: '30',
    dimension: 'Captação de recursos',
    category: 'Planos e estratégias de captação de recursos',
    text: 'A organização tem um plano de captação de recursos? Ele é revisado periodicamente? Como e com que foco as estratégias de captação de recursos são estabelecidas? Com qual regularidade novas fontes de recursos são identificadas? Há algum profissional ou área responsável pela captação de recursos?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'As metas de captação de recursos são de curto prazo e a organização se sustenta com uma ou duas fontes de recursos.' },
      { value: 5, text: 'Ao menos um/a profissional é responsável pelo plano de captação de recursos e há ao menos duas estratégias distintas para esse fim. Novas fontes de recursos são acessadas esporadicamente.' },
      { value: 7.5, text: 'A organização tem um plano de captação de recursos, mas ainda são necessárias revisões frequentes, refletindo a demanda do contexto, que muda conforme o cenário. As fontes ainda estão restritas, mas há preocupação com a sustentabilidade financeira.' },
      { value: 10, text: 'A organização tem um plano de captação de recursos que é revisado periodicamente, estabelece estratégias diversas e tem foco na sustentabilidade, identificando novas fontes de recursos regularmente.' }
    ]
  },
  {
    id: '31',
    dimension: 'Captação de recursos',
    category: 'Política de patrocínio/ doações',
    text: 'A organização possui diretrizes de doações e patrocínios? Como elas são estabelecidas? Estão atualizadas? São conhecidas pela equipe? De que maneira os princípios de transparência, integridade e legalidade estão presentes nessas diretrizes?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'O debate sobre política de patrocínios e doações é informal e subjetivo. As regras e diretrizes são estabelecidas diretamente pelas(os) fundadoras(es) ou dirigentes.' },
      { value: 5, text: 'A organização possui diretrizes dispersas e desatualizadas de doações e patrocínios, conhecidas por parte da equipe.' },
      { value: 7.5, text: 'A organização possui uma política de patrocínios e doações que organiza e mantém a integridade das regras e diretrizes, que são conhecidas por toda a equipe.' },
      { value: 10, text: 'A organização possui uma política de patrocínios e doações com regras e diretrizes conhecidas por toda a equipe e regidas pela transparência, integridade e legalidade.' }
    ]
  },
  {
    id: '32',
    dimension: 'Comunicação',
    category: 'Canais de comunicação',
    text: 'A organização possui site ou perfis em redes sociais? Eles estão atualizados? Refletem a identidade e atuação da organização? A organização tem uma identidade visual definida, conectada com sua forma de atuação e presente de forma unificada em suas peças de comunicação? Tem um guia de marca elaborado?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A organização possui um site, mas ele precisa ser atualizado. Também é preciso que ele reflita a identidade e atuação da organização. Outros canais de comunicação são inexistentes ou usados de forma pontual.' },
      { value: 5, text: 'A organização possui site ou perfis em redes sociais, mas ainda há necessidade de atualizá-los com regularidade. As peças de comunicação (site, emails, relatórios, apresentações etc) precisam de uma proposta visual unificada, para que a comunicação não siga fragmentada e sem identidade própria.' },
      { value: 7.5, text: 'A organização possui site e/ou perfis em redes sociais, que são atualizados parcialmente. Há um padrão na proposta visual das peças de comunicação, mas a identidade visual é considerada "antiga" ou não conectada com a proposta de atuação.' },
      { value: 10, text: 'A organização possui um site e está presente ativamente nas redes sociais, com conteúdos atualizados. A identidade visual (logo, marca, etc) é bem definida e conectada à identidade organizacional e está presente em todas as peças e canais de comunicação.' }
    ]
  },
  {
    id: '33',
    dimension: 'Comunicação',
    category: 'Comunicação interna',
    text: 'Há estratégias de comunicação interna que estruturam o fluxo de informações? Elas são eficazes? Como se dá a transparência nas trocas de informações?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A comunicação interna é feita pessoa a pessoa, passando sempre pelas(os) fundadoras(es), ocorrendo de maneira informal e à medida da urgência.' },
      { value: 5, text: 'Há algumas estratégias de comunicação interna, mas são percebidas como insuficientes pela equipe que ainda identifica ruídos geradores de incompreensões.' },
      { value: 7.5, text: 'Há estratégias de comunicação interna que estruturam o fluxo de informações, porém esbarram em padrões pessoais de comportamentos que dificultam a transparência e a troca.' },
      { value: 10, text: 'As estratégias de comunicação interna são eficazes, otimizando o trabalho conjunto e o compartilhamento de informações e saberes/ conhecimento. Há transparência nas trocas de informações.' }
    ]
  },
  {
    id: '34',
    dimension: 'Comunicação',
    category: 'Comunicação externa',
    text: 'Há um plano de comunicação estruturado? Há uma estratégia clara? A que públicos as ações de comunicação são dirigidas?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'Predomina a comunicação boca a boca, enfatizando ações e resultados alcançados. Não há um plano de comunicação estruturado.' },
      { value: 5, text: 'Os resultados e ações da organização são conhecidos apenas pelo público interno da organização e as ações de comunicação são pontuais (divulgação de eventos, por exemplo).' },
      { value: 7.5, text: 'A organização comunica o que faz, para quem e porque faz, mas a estratégia de disseminação e compartilhamento em canais (redes sociais, rádio e/ou jornais locais), para parceiros e comunidade, ainda são pontuais.' },
      { value: 10, text: 'Há uma clara estratégia de comunicação, com ações dirigidas aos diversos públicos, que difundem os resultados e zelam pela reputação da organização.' }
    ]
  },
  {
    id: '35',
    dimension: 'Gestão administrativa, financeira e jurídica',
    category: 'Plano de gestão administrativo financeira',
    text: 'A organização tem um plano orçamentário? Ele responde às suas necessidades? O setor de finanças e os projetos e programas monitoram as movimentações de recursos de forma alinhada? A organização possui estratégias para não operar em déficit por muito tempo?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'O plano orçamentário é simples. A alocação dos recursos reflete principalmente a necessidade de continuidade. Mas frequentemente a organização opera em déficit.' },
      { value: 5, text: 'A organização tem um plano orçamentário que responde parcialmente às suas necessidades. O setor de finanças e os projetos e programas monitoram as movimentações de recursos. A organização esporadicamente opera em déficit.' },
      { value: 7.5, text: 'A organização tem um plano orçamentário que responde às suas necessidades. O setor de finanças e os projetos e programas monitoram as movimentações de recursos. A organização esporadicamente opera em déficit.' },
      { value: 10, text: 'A organização tem um plano orçamentário que responde às necessidades da organização. O setor de finanças e os projetos e programas monitoram as movimentações de recursos de forma alinhada. A organização possui estratégias para não operar em déficit por muito tempo.' }
    ]
  },
  {
    id: '36',
    dimension: 'Gestão administrativa, financeira e jurídica',
    category: 'Controle financeiro e prestação de contas',
    text: 'Há sistemas de controles adequados que regem as operações financeiras? Existe um conselho fiscal instituído? Os procedimentos são transparentes e compartilhados com toda a equipe? Há um processo de prestação de contas estruturado e qualificado? Ele é eficiente? A organização é auditada? Com qual frequência?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'Os registros financeiros dos projetos são dispersos e os relatórios financeiros são simplificados e produzidos sob demanda. Acessíveis apenas para instâncias de governança. A prestação de contas a financiadores e parceiros é afetada negativamente, pois os registros são insuficientes. A organização não dispõe de um conselho fiscal e nunca foi auditada.' },
      { value: 5, text: 'Os registros financeiros e procedimentos são detalhados, mas não acessíveis para os envolvidos nos projetos. A prestação de contas realizada depende da solicitação de financiadores e parceiros. A organização não dispõe de um conselho fiscal e já foi auditada, mas esta não é uma ação regular.' },
      { value: 7.5, text: 'Há registros de controles que regem as operações financeiras e procedimentos, mas só há compartilhamento demonstrativo quando demandado interna ou externamente. O mesmo ocorre com a prestação de contas. A organização dispõe de um conselho fiscal e já foi auditada, mas esta não é uma ação regular.' },
      { value: 10, text: 'Há sistemas de controles adequados que regem as operações financeiras e os procedimentos são transparentes e compartilhados com toda a equipe. Isso qualifica o processo de prestação de contas, que ocorre de maneira eficiente. A organização dispõe de um conselho fiscal e é auditada com regularidade.' }
    ]
  },
  {
    id: '37',
    dimension: 'Gestão administrativa, financeira e jurídica',
    category: 'Procedimentos administrativos',
    text: 'Como os procedimentos administrativos são transmitidos na organização? Eles são conhecidos por toda a equipe? São atualizados com regularidade? Há interação, integração e compartilhamento com os outros setores que orientam os direcionamentos dos recursos?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'Os procedimentos administrativos são transmitidos oralmente e se ajustam conforme a pessoa responsável por eles. De certa forma, opera como um setor separado.' },
      { value: 5, text: 'Os procedimentos administrativos são operados através de documentos, mas precisam de mais nitidez e seus formatos geram pouca interação e integração, mantendo cada um na sua caixinha, o que dificulta as orientações quanto ao direcionamento dos recursos.' },
      { value: 7.5, text: 'Os procedimentos administrativos são documentados, nítidos, mas desconhecidos das equipes de outras áreas. É necessário mais interação, integração e compartilhamento com os outros setores para orientar o direcionamentos dos recursos.' },
      { value: 10, text: 'Os procedimentos administrativos são documentados, conhecidos por toda a equipe e atualizados com regularidade. Há interação, integração e compartilhamento com os outros setores que orientam os direcionamentos dos recursos.' }
    ]
  },
  {
    id: '38',
    dimension: 'Gestão administrativa, financeira e jurídica',
    category: 'Obrigações legais',
    text: 'A organização está legalmente registrada? A organização cumpre com suas obrigações de forma plena? Estatuto, regimentos e protocolos são construídos com base legal? São acessíveis à equipe e aos públicos atendidos? Eles são utilizados na rotina organizacional?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'A organização está legalmente registrada para cumprir com os mínimos requisitos legais, mas o Estatuto e o regimento interno ainda precisam ficar acessíveis para a equipe e públicos atendidos.' },
      { value: 5, text: 'A organização está legalmente registrada para cumprir com os mínimos requisitos legais, a equipe tem acesso ao Estatuto e regimentos, mas precisam ser incorporados na rotina organizacional.' },
      { value: 7.5, text: 'A organização está legalmente registrada e cumpre com suas obrigações de forma plena. Estatuto, regimentos e protocolos são construídos com base legal, mas há necessidade de considerá-los como ferramentas estratégicas que nutrem a dinâmica organizacional na perspectiva da ética coletiva e dos direitos.' },
      { value: 10, text: 'A organização está legalmente registrada e cumpre com suas obrigações de forma plena. Estatuto, regimentos e protocolos são construídos com base legal e são utilizados na rotina organizacional como instrumentos vivos.' }
    ]
  },
  {
    id: '39',
    dimension: 'Gestão administrativa, financeira e jurídica',
    category: 'Sistemas de Tecnologia e segurança da Informação',
    text: 'O sistema de tecnologia e informação possibilita o adequado funcionamento da organização? Ele está adequado à Lei Geral de Proteção de Dados?',
    options: [
      { value: 0, text: 'Sem respostas' },
      { value: 2.5, text: 'O sistema de tecnologia e informação ainda precisa atender as necessidades básicas da organização, representando riscos à segurança das informações armazenadas.' },
      { value: 5, text: 'O sistema de tecnologia e informação possibilita funcionamento parcial da organização e, apesar da consciência sobre a importância de adequação à Lei Geral de Proteção de Dados, ainda precisam ser feitos movimentos nesse sentido.' },
      { value: 7.5, text: 'O sistema de tecnologia e informação possibilita o adequado funcionamento da organização e estão se adequando à Lei Geral de Proteção de Dados.' },
      { value: 10, text: 'O sistema de tecnologia e informação possibilita o adequado funcionamento da organização e estão adequados à Lei Geral de Proteção de Dados.' }
    ]
  }
];