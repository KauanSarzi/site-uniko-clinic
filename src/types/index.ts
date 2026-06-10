export type Categoria = "Rosto" | "Pele" | "Corpo";

export interface FAQ {
  pergunta: string;
  resposta: string;
}

export interface Tratamento {
  slug: string;
  nome: string;
  categoria: Categoria;
  descricaoCurta: string;
  descricaoCompleta: string;
  paraQuemEIndicado: string;
  comoFunciona: string[];
  beneficios: string[];
  duracaoSessao: string;
  cuidadosPosProcedimento: string[];
  imagem: string;
  faqs: FAQ[];
}

export interface Depoimento {
  id: string;
  nome: string;
  foto: string;
  procedimento: string;
  texto: string;
  nota: 1 | 2 | 3 | 4 | 5;
}

export interface Diferencial {
  id: string;
  titulo: string;
  descricao: string;
  icone: "protocolo" | "biomédica" | "natural" | "premium";
}
