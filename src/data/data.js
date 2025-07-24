import { MdEmojiEmotions } from "react-icons/md";
import { DiAngularSimple } from "react-icons/di";
import { DiAtom } from "react-icons/di";

export const navbarLinks = [
  { id: 1, title: "Início", url: "#home" },
  { id: 2, title: "Sobre", url: "#about" },
  { id: 3, title: "Serviços", url: "#services" },
  { id: 4, title: "Cases", url: "#cases" },
  { id: 5, title: "Depoimentos", url: "#testimonials" },
  { id: 6, title: "Faq", url: "#faq" },
  { id: 7, title: "Blog", url: "#blog" },
  { id: 8, title: "Contato", url: "#contact" },
];

export const services = [
  {
    title: "Projetos de Engenharia Industrial",
    desc: "Desenvolvemos soluções completas para movimentação de cargas, desde o dimensionamento até a implantação.",
    foto: "/src/assets/services/01.jpg",
  },
  {
    title: "Montagem e Instalação Técnica",
    desc: "Nossa equipe realiza instalações com precisão e segurança, dentro do cronograma e com mínimo impacto operacional.",
    foto: "/src/assets/services/02.jpg",
  },
  {
    title: "Manutenção Preventiva e Corretiva",
    desc: "Planos inteligentes que evitam paradas não programadas e prolongam a vida útil dos seus equipamentos.",
    foto: "/src/assets/services/03.jpg",
  },
  {
    title: "Consultoria Técnica Especializada",
    desc: "Diagnóstico e recomendação de melhorias com foco em eficiência operacional, segurança no trabalho e redução de custos com falhas.",
    foto: "/src/assets/services/04.jpg",
  },
];

export const products = [
  {
    title: "Guindastes Industriais",
    desc: "Modelos de alta capacidade, versáteis e ideais para operações em ambientes complexos. Suporte técnico garantido.",
    foto: "/src/assets/products/01.jpg",
  },
  {
    title: "Pórticos Móveis e Fixos",
    desc: "Projetados para suportar cargas extremas com estabilidade e precisão, ideais para pátios, portos e indústrias pesadas.",
    foto: "/src/assets/products/02.jpg",
  },
  {
    title: "Pontes Rolantes",
    desc: "Soluções sob medida para movimentação horizontal em galpões, centros logísticos e áreas fabris.",
    foto: "/src/assets/products/03.jpg",
  },
];

export const values = [
  {
    title: "Tecnologia de Ponta",
    desc: "Investimos continuamente em inovação para garantir soluções modernas, conectadas e seguras.",
    foto: "/src/assets/values/01.png",
  },
  {
    title: "Engenharia Especializada",
    desc: "Contamos com uma equipe técnica altamente qualificada, com know-how em grandes obras e processos industriais.",
    foto: "/src/assets/values/02.png",
  },
  {
    title: "Segurança em Primeiro Lugar",
    desc: "Todos os projetos seguem normas como NR-12, NR-10, e ABNT. Equipe  treinadas e com documentação.",
    foto: "/src/assets/values/03.png",
  },
  {
    title: "Cobertura Nacional",
    desc: "Atendimento técnico e logístico em todo o Brasil, com suporte presencial e remoto.",
    foto: "/src/assets/values/04.png",
  },
];

export const team = [
  {
    foto: "/src/assets/team/photo-1.jpg",
    name: "Maria da Silva",
    cargo: "Designer Gráfica",
    link1: "https://www.uol.com.br/",
    link2: "https://www.uol.com.br/",
    link3: "https://www.uol.com.br/",
  },
  {
    foto: "/src/assets/team/photo-2.jpg",
    name: "João Carlos",
    cargo: "SEO Manager",
    link1: "https://www.folha.uol.com.br/",
    link2: "https://www.folha.uol.com.br/",
    link3: "https://www.folha.uol.com.br/",
  },
  {
    foto: "/src/assets/team/photo-3.jpg",
    name: "Anderson Mattos",
    cargo: "Engenheiro de Software",
    link1: "https://www.globo.com/",
    link2: "https://www.globo.com/",
    link3: "https://www.globo.com/",
  },
];

export const projects = [
  {
    id: 1,
    name: "Projeto Alpha",
    thumb: "/src/assets/cases/01.1.jpg",
    images: ["/src/assets/cases/01.1.jpg", "/src/assets/cases/01.1.jpg"],
    description: "Sistema de gerenciamento.",
    details: "Desenvolvido com React e Node.js. Utilizamos arquitetura limpa.",
  },
  {
    id: 2,
    name: "Projeto Beta",
    thumb: "/src/assets/cases/02.1.jpg",
    images: ["/src/assets/cases/02.1.jpg", "/src/assets/cases/02.1.jpg"],
    description: "E-commerce de moda.",
    details: "Feito com Next.js, integrações com Stripe e CMS.",
  },
  {
    id: 3,
    name: "Projeto Gama",
    thumb: "/src/assets/cases/03.1.jpg",
    images: ["/src/assets/cases/03.1.jpg", "/src/assets/cases/03.1.jpg"],
    description: "Landing page de produto.",
    details: "Layout responsivo e acessível com SEO otimizado.",
  },
  {
    id: 4,
    name: "Projeto XXX",
    thumb: "/src/assets/cases/04.1.jpg",
    images: ["/src/assets/cases/04.1.jpg", "/src/assets/cases/04.1.jpg"],
    description: "Landing page de produto.",
    details: "Layout responsivo e acessível com SEO otimizado.",
  },
];

export const faqData = [
  {
    question: "O que é este projeto?",
    answer: "Este é um exemplo simples de um componente Faq feito com React.",
  },
  {
    question: "Precisa de JavaScript?",
    answer: "Sim! Com React usamos JavaScript (ou TypeScript) para controlar o estado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu ante nibh. Fusce metus odio, consequat quis diam eget, accumsan laoreet dolor.",
  },
  {
    question: "Posso adicionar mais perguntas?",
    answer: "Sim, adicione novos objetos ao array `faqData`. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu ante nibh. Fusce metus odio, consequat quis diam eget, accumsan laoreet dolor. ",
  },
  {
    question: "Posso adicionar mais perguntas?",
    answer: "Nullam vel rhoncus quam. Nulla dapibus ultrices nunc, nec varius orci volutpat vel. Duis magna massa, porta in gravida sit amet, semper non urna. Cras nec auctor mi. Donec accumsan tellus dolor, quis tincidunt nisi scelerisque et. ",
  },
  {
    question: "Posso adicionar mais perguntas?",
    answer: "ivamus eu erat mattis, rutrum diam at, interdum elit. Nulla et nunc ac velit tristique dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. In id ullamcorper neque. Nam bibendum ligula imperdiet nisl lobortis, ut venenatis massa pulvinar. Nulla bibendum leo ut turpis posuere pretium.",
  },
];
