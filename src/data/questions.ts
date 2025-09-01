import { Question } from '@/types/assessment';

export const questions: Question[] = [
  {
    id: '1',
    dimension: 'Gestão e planejamento estratégico',
    category: 'Visão, Missão e valores',
    text: 'A visão, missão e valores foram estabelecidos? Estão atualizados? São declarados e visibilizados dentro e fora da organização? Orientam todas(os) na organização?',
    options: [
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
      { value: 2.5, text: 'O senso de papéis e responsabilidades é abrangente e genérico; a avaliação de desempenho é realizada de maneira subjetiva, esporádica e informal. Há evidente sobrecarga para algumas funções.' },
      { value: 5, text: 'Há descrição documentada dos cargos e papéis e a equipe reconhece as atribuições de cada função, porém é preciso construir um processo permanente de avaliação de desempenho. E a sobrecarga continua.' },
      { value: 7.5, text: 'Há descrição documentada dos cargos e papéis, a equipe reconhece as atribuições de cada função e há um processo permanente de avaliação de desempenho, mas ainda há sobrecargas de trabalho sendo avaliadas e encaminhadas caso a caso.' },
      { value: 10, text: 'Há descrição documentada dos cargos e papéis, a equipe reconhece as atribuições de cada função e há um processo permanente de avaliação de desempenho. As sobrecargas de trabalho são identificadas e encaminhadas de forma sistemática.' }
    ]
  },
  {
    id: '16',
    dimension: 'Gestão e desenvolvimento de pessoas',
    category: 'Comunicação interna',
    text: 'Em que medida as informações circulam na organização? Qual o nível de transparência existente? Há canais de comunicação estabelecidos? A comunicação flui nos dois sentidos?',
    options: [
      { value: 2.5, text: 'As informações circulam pouco e de forma ineficiente na organização. Não há canais formais de comunicação e a comunicação é predominantemente de cima para baixo.' },
      { value: 5, text: 'As informações são compartilhadas, mas de forma pouco sistemática. Há um esforço crescente de transparência, mas ainda há informações concentradas em algumas pessoas.' },
      { value: 7.5, text: 'Há canais de comunicação estabelecidos, as informações circulam com certa facilidade, mas a comunicação ainda é predominantemente de cima para baixo.' },
      { value: 10, text: 'As informações circulam facilmente na organização. Há transparência, canais de comunicação bem estabelecidos e a comunicação flui nos dois sentidos.' }
    ]
  },
  {
    id: '17',
    dimension: 'Incidência em políticas públicas',
    category: 'Conhecimento do marco legal',
    text: 'A organização tem conhecimento do marco legal no qual ela está inserida? Esse conhecimento está sistematizado e acessível?',
    options: [
      { value: 2.5, text: 'A organização tem pouco conhecimento do marco legal no qual está inserida.' },
      { value: 5, text: 'A organização conhece o marco legal, mas esse conhecimento não está sistematizado e nem sempre está acessível.' },
      { value: 7.5, text: 'A organização conhece o marco legal, tem esse conhecimento sistematizado, mas ainda precisa torná-lo mais acessível para toda a equipe.' },
      { value: 10, text: 'A organização conhece bem o marco legal no qual está inserida, tem esse conhecimento sistematizado e acessível para toda a equipe.' }
    ]
  },
  {
    id: '18',
    dimension: 'Incidência em políticas públicas',
    category: 'Participação em espaços de controle social',
    text: 'A organização participa de espaços de controle social (conselhos, comitês, etc.)? Em que medida essa participação é ativa e propositiva?',
    options: [
      { value: 2.5, text: 'A organização não participa de espaços de controle social ou participa de forma muito esporádica.' },
      { value: 5, text: 'A organização participa de espaços de controle social, mas de forma mais reativa do que propositiva.' },
      { value: 7.5, text: 'A organização participa ativamente de espaços de controle social e tem contribuições propositivas, mas ainda poderia ampliar sua atuação.' },
      { value: 10, text: 'A organização participa ativamente de espaços de controle social, com contribuições propositivas e reconhecidas pelos demais participantes.' }
    ]
  },
  {
    id: '19',
    dimension: 'Incidência em políticas públicas',
    category: 'Produção de conhecimento para incidência',
    text: 'A organização produz conhecimento (pesquisas, estudos, diagnósticos) para subsidiar sua incidência em políticas públicas?',
    options: [
      { value: 2.5, text: 'A organização não produz conhecimento específico para subsidiar incidência em políticas públicas.' },
      { value: 5, text: 'A organização produz conhecimento esporadicamente, mas ainda não de forma sistemática para subsidiar incidência.' },
      { value: 7.5, text: 'A organização produz conhecimento de forma mais sistemática, mas ainda precisa melhorar a qualidade e o uso estratégico dessas produções.' },
      { value: 10, text: 'A organização produz conhecimento de forma sistemática e de qualidade, usando estrategicamente essas produções para subsidiar incidência em políticas públicas.' }
    ]
  },
  {
    id: '20',
    dimension: 'Incidência em políticas públicas',
    category: 'Estratégias de advocacy',
    text: 'A organização tem estratégias definidas para advocacy e incidência política? Essas estratégias são implementadas de forma consistente?',
    options: [
      { value: 2.5, text: 'A organização não tem estratégias definidas para advocacy e incidência política.' },
      { value: 5, text: 'A organização tem algumas estratégias para advocacy, mas elas não estão bem definidas ou sistematizadas.' },
      { value: 7.5, text: 'A organização tem estratégias definidas para advocacy e incidência política, mas a implementação ainda é inconsistente.' },
      { value: 10, text: 'A organização tem estratégias bem definidas para advocacy e incidência política e as implementa de forma consistente e efetiva.' }
    ]
  },
  {
    id: '21',
    dimension: 'Redes e alianças',
    category: 'Participação em redes',
    text: 'A organização participa de redes, fóruns ou coletivos? Essa participação é ativa e estratégica?',
    options: [
      { value: 2.5, text: 'A organização não participa de redes, fóruns ou coletivos, ou participa de forma muito esporádica.' },
      { value: 5, text: 'A organização participa de algumas redes, mas de forma mais passiva do que ativa.' },
      { value: 7.5, text: 'A organização participa ativamente de redes e coletivos, mas ainda poderia ser mais estratégica nessa participação.' },
      { value: 10, text: 'A organização participa de forma ativa e estratégica de redes, fóruns e coletivos, contribuindo significativamente para os objetivos coletivos.' }
    ]
  },
  {
    id: '22',
    dimension: 'Redes e alianças',
    category: 'Construção de alianças',
    text: 'A organização constrói alianças com outras organizações para ampliar seu impacto? Essas alianças são duradouras e mutuamente benéficas?',
    options: [
      { value: 2.5, text: 'A organização tem dificuldades para construir alianças ou constrói alianças apenas pontuais.' },
      { value: 5, text: 'A organização constrói algumas alianças, mas elas são mais ocasionais do que estratégicas.' },
      { value: 7.5, text: 'A organização constrói alianças de forma mais sistemática, e algumas são duradouras, mas ainda há espaço para torná-las mais mutuamente benéficas.' },
      { value: 10, text: 'A organização constrói alianças estratégicas, duradouras e mutuamente benéficas, que ampliam significativamente seu impacto.' }
    ]
  },
  {
    id: '23',
    dimension: 'Redes e alianças',
    category: 'Articulação territorial',
    text: 'A organização se articula com outros atores de seu território? Conhece e interage com as demandas e potencialidades locais?',
    options: [
      { value: 2.5, text: 'A organização tem pouca articulação com outros atores de seu território.' },
      { value: 5, text: 'A organização se articula com alguns atores do território, mas de forma limitada.' },
      { value: 7.5, text: 'A organização se articula bem com atores do território e conhece as demandas locais, mas ainda poderia ampliar essas interações.' },
      { value: 10, text: 'A organização se articula ativamente com diversos atores de seu território, conhece bem as demandas e potencialidades locais e interage estrategicamente com elas.' }
    ]
  },
  {
    id: '24',
    dimension: 'Planejamento de projetos e programas',
    category: 'Metodologia de planejamento',
    text: 'A organização utiliza metodologias estruturadas para planejamento de projetos e programas? Essas metodologias são adequadas e eficazes?',
    options: [
      { value: 2.5, text: 'A organização não utiliza metodologias estruturadas para planejamento de projetos e programas.' },
      { value: 5, text: 'A organização utiliza algumas metodologias para planejamento, mas de forma inconsistente.' },
      { value: 7.5, text: 'A organização utiliza metodologias estruturadas para planejamento, mas ainda precisa aprimorar sua aplicação.' },
      { value: 10, text: 'A organização utiliza metodologias estruturadas e adequadas para planejamento de projetos e programas, aplicando-as de forma eficaz.' }
    ]
  },
  {
    id: '25',
    dimension: 'Planejamento de projetos e programas',
    category: 'Participação de beneficiários',
    text: 'Os beneficiários participam do planejamento de projetos e programas? Essa participação é efetiva e influencia as decisões?',
    options: [
      { value: 2.5, text: 'Os beneficiários não participam do planejamento de projetos e programas.' },
      { value: 5, text: 'Os beneficiários são consultados ocasionalmente, mas sua participação não influencia significativamente as decisões.' },
      { value: 7.5, text: 'Os beneficiários participam do planejamento, mas essa participação ainda precisa ser mais efetiva e sistemática.' },
      { value: 10, text: 'Os beneficiários participam ativamente do planejamento de projetos e programas, e sua participação influencia efetivamente as decisões.' }
    ]
  },
  {
    id: '26',
    dimension: 'Planejamento de projetos e programas',
    category: 'Alinhamento estratégico',
    text: 'Os projetos e programas estão alinhados com a missão e estratégia da organização? Existe coerência entre eles?',
    options: [
      { value: 2.5, text: 'Os projetos e programas não estão claramente alinhados com a missão e estratégia da organização.' },
      { value: 5, text: 'Há um esforço para alinhar projetos e programas com a missão, mas ainda existem desconexões.' },
      { value: 7.5, text: 'Os projetos e programas estão majoritariamente alinhados com a missão e estratégia, mas ainda há espaço para melhorar a coerência.' },
      { value: 10, text: 'Os projetos e programas estão claramente alinhados com a missão e estratégia da organização, mantendo coerência entre si.' }
    ]
  },
  {
    id: '27',
    dimension: 'Monitoramento, avaliação e aprendizagem',
    category: 'Sistema de monitoramento',
    text: 'A organização possui um sistema de monitoramento de suas atividades? Os dados são coletados sistematicamente e utilizados para melhorias?',
    options: [
      { value: 2.5, text: 'A organização não possui um sistema estruturado de monitoramento de suas atividades.' },
      { value: 5, text: 'A organização coleta alguns dados sobre suas atividades, mas de forma não sistemática.' },
      { value: 7.5, text: 'A organização possui um sistema de monitoramento e coleta dados sistematicamente, mas ainda precisa melhorar o uso desses dados para melhorias.' },
      { value: 10, text: 'A organização possui um sistema robusto de monitoramento, coleta dados sistematicamente e os utiliza efetivamente para promover melhorias.' }
    ]
  },
  {
    id: '28',
    dimension: 'Monitoramento, avaliação e aprendizagem',
    category: 'Avaliação de impacto',
    text: 'A organização realiza avaliações de impacto de seus projetos e programas? Essas avaliações são utilizadas para aprendizagem e melhoria?',
    options: [
      { value: 2.5, text: 'A organização não realiza avaliações de impacto de seus projetos e programas.' },
      { value: 5, text: 'A organização realiza algumas avaliações, mas de forma esporádica e com uso limitado dos resultados.' },
      { value: 7.5, text: 'A organização realiza avaliações de impacto de forma mais sistemática, mas ainda precisa melhorar o uso dos resultados para aprendizagem.' },
      { value: 10, text: 'A organização realiza avaliações de impacto sistemáticas e utiliza os resultados efetivamente para aprendizagem e melhoria contínua.' }
    ]
  },
  {
    id: '29',
    dimension: 'Monitoramento, avaliação e aprendizagem',
    category: 'Cultura de aprendizagem',
    text: 'A organização promove uma cultura de aprendizagem? Os erros são tratados como oportunidades de melhoria?',
    options: [
      { value: 2.5, text: 'A organização não promove uma cultura de aprendizagem e os erros são frequentemente vistos como falhas.' },
      { value: 5, text: 'Há um esforço crescente para promover aprendizagem, mas os erros ainda são frequentemente vistos de forma negativa.' },
      { value: 7.5, text: 'A organização promove uma cultura de aprendizagem e os erros começam a ser vistos como oportunidades, mas ainda há resistências.' },
      { value: 10, text: 'A organização tem uma cultura sólida de aprendizagem, onde erros são tratados como oportunidades valiosas de melhoria e crescimento.' }
    ]
  },
  {
    id: '30',
    dimension: 'Captação de recursos',
    category: 'Diversificação de fontes',
    text: 'A organização diversifica suas fontes de financiamento? Há equilíbrio entre diferentes tipos de recursos?',
    options: [
      { value: 2.5, text: 'A organização depende de poucas fontes de financiamento e não busca diversificação.' },
      { value: 5, text: 'A organização busca diversificar, mas ainda depende fortemente de poucas fontes.' },
      { value: 7.5, text: 'A organização tem alguma diversificação de fontes, mas ainda precisa ampliar e equilibrar melhor.' },
      { value: 10, text: 'A organização tem fontes diversificadas de financiamento com bom equilíbrio entre diferentes tipos de recursos.' }
    ]
  },
  {
    id: '31',
    dimension: 'Captação de recursos',
    category: 'Estratégia de sustentabilidade',
    text: 'A organização tem uma estratégia clara de sustentabilidade financeira? Essa estratégia é implementada consistentemente?',
    options: [
      { value: 2.5, text: 'A organização não tem uma estratégia clara de sustentabilidade financeira.' },
      { value: 5, text: 'A organização tem uma estratégia de sustentabilidade, mas ela não está bem definida ou implementada.' },
      { value: 7.5, text: 'A organização tem uma estratégia de sustentabilidade financeira definida, mas a implementação ainda é inconsistente.' },
      { value: 10, text: 'A organização tem uma estratégia clara de sustentabilidade financeira e a implementa de forma consistente e efetiva.' }
    ]
  },
  {
    id: '32',
    dimension: 'Captação de recursos',
    category: 'Relacionamento com financiadores',
    text: 'A organização mantém bom relacionamento com seus financiadores? Há transparência e comunicação regular?',
    options: [
      { value: 2.5, text: 'A organização tem relacionamento limitado com financiadores, com pouca comunicação além do necessário.' },
      { value: 5, text: 'A organização mantém relacionamento básico com financiadores, mas poderia ser mais proativo e transparente.' },
      { value: 7.5, text: 'A organização mantém bom relacionamento com financiadores, com comunicação regular, mas ainda há espaço para melhorar a transparência.' },
      { value: 10, text: 'A organização mantém excelente relacionamento com financiadores, com transparência total e comunicação regular e estratégica.' }
    ]
  },
  {
    id: '33',
    dimension: 'Comunicação',
    category: 'Estratégia de comunicação',
    text: 'A organização tem uma estratégia de comunicação definida? Essa estratégia está alinhada com os objetivos organizacionais?',
    options: [
      { value: 2.5, text: 'A organização não tem uma estratégia de comunicação definida.' },
      { value: 5, text: 'A organização tem uma estratégia de comunicação básica, mas não está bem alinhada com os objetivos.' },
      { value: 7.5, text: 'A organização tem uma estratégia de comunicação definida e alinhada com os objetivos, mas a implementação ainda precisa melhorar.' },
      { value: 10, text: 'A organização tem uma estratégia de comunicação bem definida, alinhada com os objetivos e implementada efetivamente.' }
    ]
  },
  {
    id: '34',
    dimension: 'Comunicação',
    category: 'Canais de comunicação',
    text: 'A organização utiliza diversos canais de comunicação apropriados para seus públicos? Esses canais são eficazes?',
    options: [
      { value: 2.5, text: 'A organização utiliza poucos canais de comunicação e nem sempre apropriados para seus públicos.' },
      { value: 5, text: 'A organização utiliza alguns canais variados, mas nem sempre de forma eficaz ou apropriada.' },
      { value: 7.5, text: 'A organização utiliza diversos canais apropriados para seus públicos, mas ainda precisa melhorar a eficácia.' },
      { value: 10, text: 'A organização utiliza diversos canais de comunicação apropriados e eficazes para diferentes públicos.' }
    ]
  },
  {
    id: '35',
    dimension: 'Comunicação',
    category: 'Comunicação de impacto',
    text: 'A organização comunica efetivamente seus resultados e impactos? As mensagens são claras e chegam aos públicos-alvo?',
    options: [
      { value: 2.5, text: 'A organização tem dificuldades para comunicar seus resultados e impactos de forma efetiva.' },
      { value: 5, text: 'A organização comunica seus resultados, mas as mensagens nem sempre são claras ou chegam aos públicos certos.' },
      { value: 7.5, text: 'A organização comunica bem seus resultados e impactos, mas ainda pode melhorar a clareza e alcance das mensagens.' },
      { value: 10, text: 'A organização comunica de forma excelente seus resultados e impactos, com mensagens claras que chegam efetivamente aos públicos-alvo.' }
    ]
  },
  {
    id: '36',
    dimension: 'Gestão administrativa, financeira e jurídica',
    category: 'Controles financeiros',
    text: 'A organização possui controles financeiros adequados? Há transparência na gestão dos recursos?',
    options: [
      { value: 2.5, text: 'A organização não possui controles financeiros adequados e há pouca transparência na gestão dos recursos.' },
      { value: 5, text: 'A organização possui alguns controles financeiros, mas eles são básicos e a transparência poderia melhorar.' },
      { value: 7.5, text: 'A organização possui controles financeiros adequados e boa transparência, mas ainda há espaço para aprimoramentos.' },
      { value: 10, text: 'A organização possui controles financeiros rigorosos e excelente transparência na gestão dos recursos.' }
    ]
  },
  {
    id: '37',
    dimension: 'Gestão administrativa, financeira e jurídica',
    category: 'Compliance legal',
    text: 'A organização cumpre todas as obrigações legais? Mantém documentação atualizada e em ordem?',
    options: [
      { value: 2.5, text: 'A organização tem dificuldades para cumprir obrigações legais e manter documentação em ordem.' },
      { value: 5, text: 'A organização cumpre a maioria das obrigações legais, mas a documentação nem sempre está atualizada.' },
      { value: 7.5, text: 'A organização cumpre bem suas obrigações legais e mantém documentação majoritariamente atualizada.' },
      { value: 10, text: 'A organização cumpre rigorosamente todas as obrigações legais e mantém documentação sempre atualizada e organizada.' }
    ]
  },
  {
    id: '38',
    dimension: 'Gestão administrativa, financeira e jurídica',
    category: 'Gestão de riscos',
    text: 'A organização identifica e gerencia riscos organizacionais? Existe um plano de contingência?',
    options: [
      { value: 2.5, text: 'A organização não identifica nem gerencia riscos organizacionais de forma sistemática.' },
      { value: 5, text: 'A organização identifica alguns riscos, mas não os gerencia de forma sistemática nem tem planos de contingência.' },
      { value: 7.5, text: 'A organização identifica e gerencia a maioria dos riscos, mas ainda precisa desenvolver planos de contingência mais robustos.' },
      { value: 10, text: 'A organização identifica e gerencia sistematicamente os riscos organizacionais e possui planos de contingência adequados.' }
    ]
  },
  {
    id: '39',
    dimension: 'Gestão administrativa, financeira e jurídica',
    category: 'Sistemas de informação',
    text: 'A organização possui sistemas de informação adequados para sua gestão? Esses sistemas são integrados e eficazes?',
    options: [
      { value: 2.5, text: 'A organização não possui sistemas de informação adequados para sua gestão.' },
      { value: 5, text: 'A organização possui alguns sistemas básicos, mas eles não são integrados nem sempre eficazes.' },
      { value: 7.5, text: 'A organização possui sistemas adequados para gestão, mas ainda precisa melhorar a integração e eficácia.' },
      { value: 10, text: 'A organização possui sistemas de informação adequados, integrados e eficazes para sua gestão.' }
    ]
  }
];