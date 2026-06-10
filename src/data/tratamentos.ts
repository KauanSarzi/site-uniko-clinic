import type { Tratamento } from "@/types";

export const tratamentos: Tratamento[] = [
  {
    slug: "harmonizacao-facial",
    nome: "Harmonização Facial",
    categoria: "Rosto",
    descricaoCurta: "Reequilíbrio das proporções do rosto com técnicas minimamente invasivas para um resultado natural e personalizado.",
    descricaoCompleta:
      "A harmonização facial é um conjunto de procedimentos estéticos minimamente invasivos que visa reequilibrar as proporções do rosto, valorizar as características individuais e proporcionar uma aparência mais jovem e harmoniosa. Na Uniko Clinic, cada protocolo é desenhado exclusivamente para o seu rosto.",
    paraQuemEIndicado:
      "Indicado para pessoas que desejam valorizar suas características naturais, corrigir assimetrias faciais, suavizar marcas de expressão ou simplesmente realçar a beleza que já possuem. Agende uma avaliação para descobrir o protocolo ideal para você.",
    comoFunciona: [
      "Avaliação facial completa com a biomédica Andreia Sarzi",
      "Definição do protocolo personalizado",
      "Aplicação com técnicas precisas e materiais de alta qualidade",
      "Acompanhamento do resultado em 15 dias",
    ],
    beneficios: [
      "Resultado natural e personalizado",
      "Procedimento minimamente invasivo",
      "Recuperação rápida",
      "Protocolo exclusivo para seu rosto",
      "Equilíbrio entre os terços do rosto",
    ],
    duracaoSessao: "60 a 90 minutos",
    cuidadosPosProcedimento: [
      "Evitar exposição solar nas primeiras 24h",
      "Não fazer atividade física intensa no dia",
      "Não massagear as áreas tratadas",
      "Usar protetor solar diariamente",
    ],
    imagem: "/images/tratamentos/harmonizacao-facial.jpg",
    faqs: [
      {
        pergunta: "O resultado da harmonização facial é permanente?",
        resposta:
          "Os resultados variam conforme os procedimentos realizados. Toxinas têm duração de 4 a 6 meses; preenchedores, de 12 a 18 meses. Bioestimuladores promovem resultados mais duradouros.",
      },
      {
        pergunta: "Dói muito?",
        resposta:
          "O desconforto é mínimo. Utilizamos anestésicos tópicos e técnicas que minimizam a dor. A maioria dos pacientes refere apenas leve pressão durante o procedimento.",
      },
      {
        pergunta: "Quando vejo o resultado?",
        resposta:
          "Os resultados imediatos são visíveis logo após. O resultado final, com a resolução de inchaços, é avaliado em 15 dias.",
      },
    ],
  },
  {
    slug: "toxina-botulinica",
    nome: "Toxina Botulínica",
    categoria: "Rosto",
    descricaoCurta: "Suavize marcas de expressão e linhas finas com a toxina botulínica aplicada com precisão e naturalidade.",
    descricaoCompleta:
      "A toxina botulínica é um dos procedimentos estéticos mais realizados no mundo por sua eficácia e segurança comprovadas. Na Uniko Clinic, a aplicação é feita com técnica refinada para garantir um resultado natural, preservando as expressões faciais características de cada paciente.",
    paraQuemEIndicado:
      "Indicado para suavizar linhas de expressão (testa, glabela, pés de galinha), elevar a sobrancelha, tratar hiperidrose (sudorese excessiva) e bruxismo.",
    comoFunciona: [
      "Avaliação das linhas de expressão e anatomia facial",
      "Marcação dos pontos de aplicação",
      "Aplicação com agulha fina — procedimento rápido (30 min)",
      "Resultado progressivo em 7 a 14 dias",
    ],
    beneficios: [
      "Suavização natural das rugas de expressão",
      "Sem cortes ou cicatrizes",
      "Procedimento rápido",
      "Retorno imediato às atividades",
      "Resultado progressivo e duradouro",
    ],
    duracaoSessao: "30 a 45 minutos",
    cuidadosPosProcedimento: [
      "Não deitar nas primeiras 4 horas",
      "Não massagear as áreas tratadas por 24h",
      "Evitar atividade física intensa por 24h",
      "Não consumir álcool no dia",
    ],
    imagem: "/images/tratamentos/toxina-botulinica.jpg",
    faqs: [
      {
        pergunta: "Quanto tempo dura a toxina botulínica?",
        resposta:
          "O efeito dura em média de 4 a 6 meses, variando conforme o metabolismo individual, área tratada e quantidade aplicada.",
      },
      {
        pergunta: "Vou perder minhas expressões faciais?",
        resposta:
          "Não. A técnica utilizada na Uniko Clinic preserva as expressões naturais. O objetivo é suavizar as linhas, não congelar o rosto.",
      },
    ],
  },
  {
    slug: "preenchimento-labial",
    nome: "Preenchimento Facial e Labial",
    categoria: "Rosto",
    descricaoCurta: "Restaure volume, defina o contorno e realce seus lábios com ácido hialurônico de forma natural e proporcional.",
    descricaoCompleta:
      "O preenchimento com ácido hialurônico é utilizado para restaurar volume perdido com o envelhecimento, definir contornos faciais e realçar lábios. Na Uniko Clinic, o procedimento é planejado para respeitar a harmonia e proporção do seu rosto.",
    paraQuemEIndicado:
      "Indicado para quem deseja volumizar lábios, preencher sulcos nasogenianos (bigode chinês), melhorar a projeção do queixo, restaurar volume nas bochechas ou melhorar contornos faciais.",
    comoFunciona: [
      "Análise das proporções faciais e expectativas",
      "Aplicação de anestésico tópico",
      "Injeção do ácido hialurônico com técnica cânula ou agulha",
      "Modelagem imediata do resultado",
    ],
    beneficios: [
      "Resultado imediato e natural",
      "Produto biocompatível e reversível",
      "Volume e definição personalizados",
      "Hidratação profunda da pele",
      "Procedimento ambulatorial",
    ],
    duracaoSessao: "45 a 60 minutos",
    cuidadosPosProcedimento: [
      "Evitar exposição ao calor (sauna, sol) por 48h",
      "Não massagear a área tratada",
      "Aplicar gelo se necessário para edema",
      "Evitar atividade física intensa por 24h",
    ],
    imagem: "/images/tratamentos/preenchimento-labial.jpg",
    faqs: [
      {
        pergunta: "O preenchimento labial dói?",
        resposta:
          "Aplicamos anestésico tópico antes do procedimento. A maioria dos pacientes sente apenas leve desconforto durante a aplicação.",
      },
      {
        pergunta: "O resultado é reversível?",
        resposta:
          "Sim. O ácido hialurônico pode ser dissolvido com hialuronidase quando necessário.",
      },
    ],
  },
  {
    slug: "bioestimuladores-de-colageno",
    nome: "Bioestimuladores de Colágeno",
    categoria: "Rosto",
    descricaoCurta: "Estimule a produção natural de colágeno para uma pele mais firme, jovem e com resultado progressivo e duradouro.",
    descricaoCompleta:
      "Os bioestimuladores de colágeno são substâncias que, ao serem injetadas na pele, estimulam os fibroblastos a produzirem colágeno novo. O resultado é progressivo — a pele vai se tornando mais firme, mais hidratada e com aspecto mais jovem ao longo de 3 a 6 meses.",
    paraQuemEIndicado:
      "Indicado para flacidez facial e corporal, perda de volume natural, pele com textura irregular, rugas mais profundas e prevenção do envelhecimento em pacientes a partir dos 30 anos.",
    comoFunciona: [
      "Avaliação da flacidez e necessidade de estimulação",
      "Protocolo de aplicação (geralmente 1 a 3 sessões)",
      "Injeção subdérmica do bioestimulador",
      "Acompanhamento do resultado em 30, 60 e 90 dias",
    ],
    beneficios: [
      "Resultado progressivo e natural",
      "Estimulação do colágeno próprio do corpo",
      "Duração de até 2 anos",
      "Melhora da textura e firmeza da pele",
      "Sem aspecto artificial",
    ],
    duracaoSessao: "60 minutos",
    cuidadosPosProcedimento: [
      "Massagear a área conforme orientação da profissional",
      "Hidratação intensa nos primeiros dias",
      "Protetor solar obrigatório",
      "Evitar sol intenso por 48h",
    ],
    imagem: "/images/tratamentos/bioestimuladores.jpg",
    faqs: [
      {
        pergunta: "Quantas sessões são necessárias?",
        resposta:
          "Em geral, 1 a 3 sessões são suficientes para o protocolo inicial. A avaliação individual define o número ideal de sessões.",
      },
      {
        pergunta: "Quando vejo o resultado?",
        resposta:
          "Os primeiros resultados aparecem a partir de 30 dias, com melhora progressiva ao longo de 3 a 6 meses.",
      },
    ],
  },
  {
    slug: "laser-e-tecnologias",
    nome: "Laser e Tecnologias",
    categoria: "Pele",
    descricaoCurta: "Tratamentos com laser e tecnologias avançadas para manchas, textura irregular, poros dilatados e rejuvenescimento.",
    descricaoCompleta:
      "Os tratamentos com laser e tecnologias estéticas avançadas oferecem soluções eficazes para diversas queixas da pele, como manchas, cicatrizes, poros dilatados, textura irregular e flacidez. Na Uniko Clinic, utilizamos equipamentos de última geração com protocolos personalizados.",
    paraQuemEIndicado:
      "Indicado para manchas solares e melasma, cicatrizes de acne, poros dilatados, textura irregular, rejuvenescimento geral e tratamento de vasinhos.",
    comoFunciona: [
      "Avaliação do tipo e condição da pele",
      "Escolha do protocolo e equipamento adequado",
      "Aplicação do tratamento com parâmetros individualizados",
      "Orientações pós-procedimento",
    ],
    beneficios: [
      "Resultado visível e progressivo",
      "Tratamento não cirúrgico",
      "Tecnologia de precisão",
      "Protocolos personalizados",
      "Melhora de diversas queixas em sessão única",
    ],
    duracaoSessao: "30 a 60 minutos",
    cuidadosPosProcedimento: [
      "Protetor solar FPS 50+ obrigatório",
      "Evitar exposição solar por 7 dias",
      "Hidratação intensiva",
      "Não esfoliar a pele por 15 dias",
    ],
    imagem: "/images/tratamentos/laser.jpg",
    faqs: [
      {
        pergunta: "O laser dói?",
        resposta:
          "A sensação varia conforme o tipo de laser. Aplicamos anestésico tópico quando necessário para maior conforto.",
      },
      {
        pergunta: "Quantas sessões são necessárias?",
        resposta:
          "Depende da queixa e do tipo de laser. Alguns resultados são visíveis em uma sessão; outros requerem 4 a 6 sessões mensais.",
      },
    ],
  },
  {
    slug: "tratamentos-para-pele",
    nome: "Tratamentos para Pele",
    categoria: "Pele",
    descricaoCurta: "Protocolos exclusivos para acne, manchas, hidratação profunda e renovação celular, adaptados ao seu tipo de pele.",
    descricaoCompleta:
      "Os tratamentos faciais da Uniko Clinic vão além da limpeza de pele convencional. Combinamos ativos de alta performance, peelings e protocolos personalizados para tratar, corrigir e prevenir as principais queixas da pele — do acne ao envelhecimento.",
    paraQuemEIndicado:
      "Indicado para acne e pele oleosa, manchas e melasma, pele desidratada ou sensível, envelhecimento cutâneo, textura irregular e poros dilatados.",
    comoFunciona: [
      "Análise do biotipo e queixas da pele",
      "Protocolo personalizado com ativos adequados",
      "Aplicação de peelings, máscaras ou microagulhamento quando indicado",
      "Orientação de skincare domiciliar",
    ],
    beneficios: [
      "Pele mais uniforme e luminosa",
      "Redução de manchas e marcas",
      "Hidratação profunda",
      "Melhora da textura",
      "Protocolo exclusivo para seu tipo de pele",
    ],
    duracaoSessao: "60 a 90 minutos",
    cuidadosPosProcedimento: [
      "Protetor solar todos os dias",
      "Hidratar a pele conforme orientação",
      "Evitar maquiagem por 24h após peelings",
      "Não esfoliar a pele no período pós-tratamento",
    ],
    imagem: "/images/tratamentos/tratamentos-pele.jpg",
    faqs: [
      {
        pergunta: "Quantas sessões são necessárias para tratar manchas?",
        resposta:
          "Em geral, de 4 a 8 sessões mensais para resultados expressivos em manchas. O protocolo exato é definido na avaliação.",
      },
    ],
  },
  {
    slug: "depilacao-a-laser",
    nome: "Depilação a Laser",
    categoria: "Corpo",
    descricaoCurta: "Eliminação permanente dos pelos com laser de alta performance, seguro para todos os tipos de pele.",
    descricaoCompleta:
      "A depilação a laser é a forma mais eficaz de eliminar os pelos de forma definitiva. O laser age na melanina do pelo, destruindo o folículo piloso sem agredir a pele ao redor. Na Uniko Clinic, utilizamos tecnologia avançada adaptada a todos os fototipos de pele.",
    paraQuemEIndicado:
      "Indicado para todas as regiões do corpo e rosto, em qualquer fototipo de pele. A avaliação prévia determina os parâmetros ideais para cada paciente.",
    comoFunciona: [
      "Avaliação do fototipo e tipo de pelo",
      "Tricotomia prévia (raspagem)",
      "Aplicação do laser nas áreas desejadas",
      "Resfriamento imediato para conforto e segurança",
    ],
    beneficios: [
      "Redução permanente dos pelos",
      "Pele lisa e sem irritação",
      "Sem pelos encravados",
      "Economia a longo prazo",
      "Procedimento rápido por região",
    ],
    duracaoSessao: "30 a 90 minutos (conforme a área)",
    cuidadosPosProcedimento: [
      "Não se expor ao sol por 48h",
      "Aplicar protetor solar e hidratar a área",
      "Não depilar com cera ou pinça entre as sessões",
      "Evitar sauna e piscina por 48h",
    ],
    imagem: "/images/tratamentos/depilacao-laser.jpg",
    faqs: [
      {
        pergunta: "Quantas sessões são necessárias?",
        resposta:
          "Em média de 6 a 10 sessões para redução permanente de 80 a 90% dos pelos. O intervalo entre sessões varia de 4 a 8 semanas.",
      },
      {
        pergunta: "O laser de depilação dói?",
        resposta:
          "A sensação é de um leve estalo. Utilizamos equipamentos com resfriamento integrado para maior conforto.",
      },
    ],
  },
  {
    slug: "tratamentos-corporais",
    nome: "Tratamentos Corporais",
    categoria: "Corpo",
    descricaoCurta: "Modelagem corporal, redução de medidas e tratamento de celulite com tecnologias e protocolos de alta eficácia.",
    descricaoCompleta:
      "Os tratamentos corporais da Uniko Clinic combinam tecnologias de ponta com técnicas manuais para resultados reais em modelagem, redução de gordura localizada, celulite e flacidez corporal.",
    paraQuemEIndicado:
      "Indicado para gordura localizada, celulite (fibro edema gelóide), flacidez corporal, retenção hídrica e pós-lipoaspiração.",
    comoFunciona: [
      "Avaliação corporal e definição dos objetivos",
      "Protocolo combinado (tecnologia + ativo injetável quando indicado)",
      "Sessões regulares com acompanhamento",
      "Orientações complementares de alimentação e hidratação",
    ],
    beneficios: [
      "Redução de medidas",
      "Melhora da celulite",
      "Firmeza e tonicidade",
      "Contorno corporal definido",
      "Resultados progressivos e duradouros",
    ],
    duracaoSessao: "60 a 90 minutos",
    cuidadosPosProcedimento: [
      "Hidratação abundante",
      "Atividade física regular potencializa os resultados",
      "Alimentação equilibrada",
      "Seguir o protocolo de sessões recomendado",
    ],
    imagem: "/images/tratamentos/tratamentos-corporais.jpg",
    faqs: [
      {
        pergunta: "Quantas sessões são necessárias?",
        resposta:
          "O protocolo varia conforme a queixa. Em geral, de 8 a 12 sessões semanais para resultados expressivos.",
      },
    ],
  },
];

export function getTratamentoBySlug(slug: string): Tratamento | undefined {
  return tratamentos.find((t) => t.slug === slug);
}

export function getTratamentosByCategoria(categoria: string): Tratamento[] {
  if (categoria === "Todos") return tratamentos;
  return tratamentos.filter((t) => t.categoria === categoria);
}
