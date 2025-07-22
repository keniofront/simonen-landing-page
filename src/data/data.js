import { MdEmojiEmotions } from 'react-icons/md';
import { DiAngularSimple } from 'react-icons/di';
import { DiAtom } from 'react-icons/di';

export const navbarLinks = [
	{ id: 1, title: 'Início', url: '#home' },
	{ id: 2, title: 'Sobre', url: '#about' },
	{ id: 3, title: 'Serviços', url: '#services' },
	{ id: 4, title: 'Cases', url: '#cases' },
	{ id: 5, title: 'Depoimentos', url: '#testimonials' },
	{ id: 6, title: 'Faq', url: '#faq' },
	{ id: 7, title: 'Blog', url: '#blog' },
	{ id: 8, title: 'Contato', url: '#contact' },
];

export const services = [
	{
		title: 'Web Design',
		desc: 'Criação de sites modernos.',
		foto: '/src/assets/services/service-1.jpg',
		icon: MdEmojiEmotions,
		banner: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, neque!',
	},
	{
		title: 'Desenvolvimento',
		desc: 'Aplicações web sob medida. Aplicações web sob medida.Aplicações web sob medida.Aplicações web sob medida.',
		foto: '/src/assets/services/service-1.jpg',
		icon: DiAngularSimple,
		banner: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, neque!',
	},
	{
		title: 'Consultoria',
		desc: 'Apoio estratégico completo.',
		foto: '/src/assets/services/service-1.jpg',
		icon: DiAtom,
		banner: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, neque!',
	},
];

export const team = [
	{
		foto: '/src/assets/team/photo-1.jpg',
		name: 'Maria da Silva',
		cargo: 'Designer Gráfica',
		link1: 'https://www.uol.com.br/',
		link2: 'https://www.uol.com.br/',
		link3: 'https://www.uol.com.br/',
	},
	{
		foto: '/src/assets/team/photo-2.jpg',
		name: 'João Carlos',
		cargo: 'SEO Manager',
		link1: 'https://www.folha.uol.com.br/',
		link2: 'https://www.folha.uol.com.br/',
		link3: 'https://www.folha.uol.com.br/',
	},
	{
		foto: '/src/assets/team/photo-3.jpg',
		name: 'Anderson Mattos',
		cargo: 'Engenheiro de Software',
		link1: 'https://www.globo.com/',
		link2: 'https://www.globo.com/',
		link3: 'https://www.globo.com/',
	},
];

export const projects = [
	{
		id: 1,
		name: 'Projeto Alpha',
		thumb: '/src/assets/cases/alpha-thumb.jpg',
		images: ['/src/assets/cases/alpha1.jpg', '/src/assets/cases/alpha2.jpg'],
		description: 'Sistema de gerenciamento.',
		details: 'Desenvolvido com React e Node.js. Utilizamos arquitetura limpa.',
	},
	{
		id: 2,
		name: 'Projeto Beta',
		thumb: '/src/assets/cases/beta-thumb.jpg',
		images: ['/src/assets/cases/beta1.jpg', '/src/assets/cases/beta2.jpg'],
		description: 'E-commerce de moda.',
		details: 'Feito com Next.js, integrações com Stripe e CMS.',
	},
	{
		id: 3,
		name: 'Projeto Gama',
		thumb: '/src/assets/cases/gama-thumb.jpg',
		images: ['/src/assets/cases/gama1.jpg', '/src/assets/cases/gama2.jpg'],
		description: 'Landing page de produto.',
		details: 'Layout responsivo e acessível com SEO otimizado.',
	},
	{
		id: 4,
		name: 'Projeto Test',
		thumb: '/src/assets/cases/test-thumb.jpg',
		images: ['/src/assets/cases/test1.jpg'],
		description: 'Landing page de produto.',
		details: 'Layout responsivo e acessível com SEO otimizado.',
	},
	{
		id: 5,
		name: 'Projeto Delta',
		thumb: '/src/assets/cases/delta-thumb.jpg',
		images: ['/src/assets/cases/delta1.jpg', '/src/assets/cases/delta2.jpg'],
		description: 'Dashboard analítica.',
		details: 'Criado com React, D3.js e micro frontends.',
	},
];

export const faqData = [
	{
		question: 'O que é este projeto?',
		answer: 'Este é um exemplo simples de um componente Faq feito com React.',
	},
	{
		question: 'Precisa de JavaScript?',
		answer: 'Sim! Com React usamos JavaScript (ou TypeScript) para controlar o estado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu ante nibh. Fusce metus odio, consequat quis diam eget, accumsan laoreet dolor.',
	},
	{
		question: 'Posso adicionar mais perguntas?',
		answer: 'Sim, adicione novos objetos ao array `faqData`. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu ante nibh. Fusce metus odio, consequat quis diam eget, accumsan laoreet dolor. ',
	},
	{
		question: 'Posso adicionar mais perguntas?',
		answer: 'Nullam vel rhoncus quam. Nulla dapibus ultrices nunc, nec varius orci volutpat vel. Duis magna massa, porta in gravida sit amet, semper non urna. Cras nec auctor mi. Donec accumsan tellus dolor, quis tincidunt nisi scelerisque et. ',
	},
	{
		question: 'Posso adicionar mais perguntas?',
		answer: 'ivamus eu erat mattis, rutrum diam at, interdum elit. Nulla et nunc ac velit tristique dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. In id ullamcorper neque. Nam bibendum ligula imperdiet nisl lobortis, ut venenatis massa pulvinar. Nulla bibendum leo ut turpis posuere pretium.',
	},
];
