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
  }
];