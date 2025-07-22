// **useState**: permite que o componente tenha variáveis que mudam ao longo do tempo (ex: se o menu está aberto ou fechado).
// **useEffect**: permite executar algo quando o componente é montado na tela (por exemplo, detectar se o usuário rolou a página).

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { navbarLinks } from '../../data/data'; // importando APENAS uma variável chamada navbarLinks de outro arquivo (importação nomeada)

export default function Navbar() {
	// o useState é como criar uma caixinha que guarda um valor no seu componente React. É como dizer: “Ei React, guarda esse valor aqui e me avisa quando ele mudar.”

	// isOpen: indica se o menu (hambúrguer) está aberto. Começa como false (fechado).
	const [isOpen, setIsOpen] = useState(false);
	// scrolled: indica se o usuário rolou a página para baixo. Começa como false.
	const [scrolled, setScrolled] = useState(false);

	// Quando chamada, essa função alterna o valor de isOpen entre true e false.
	const toggleMenu = () => setIsOpen(!isOpen);

	// -------------------------------------------------------
	// ROLAGEM DE PAGINA

	// useEffects - permite executar efeitos colaterais em componentes funcionais. Em outras palavras, ele serve para lidar com ações que acontecem fora do fluxo principal da renderização, como:

	// - Buscar dados de uma API
	// - Adicionar/remover event listeners (como o scroll)
	// - Atualizar o document.title da aba
	// - Criar timers ou intervals
	// - Fazer animações ou manipulações diretas no DOM

	// Quando o usuário rola a página, essa função checa se a rolagem (scrollY) passou de 50 pixels.
	// Se passou, ele muda scrolled para true, o que pode aplicar um estilo diferente na barra.
	// Quando o componente é removido da tela, ele remove o "escutador de rolagem" para não deixar código rodando à toa.

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50); //1 - propriedade do navegador que retorna a quantidade de pixels que a janela foi rolada
		};

		window.addEventListener('scroll', handleScroll); //2 - fica monitorando! ao rolar aciona "handleScroll"

		return () => window.removeEventListener('scroll', handleScroll); //3 - para para não ficar em loop
	}, []);
	// -------------------------------------------------------

	return (
		<nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
			<div className={`container ${styles.container}`}>
				<div
					className={styles.logo}
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				>
					LOGOMARCA
				</div>

				{/* RENDERIZAÇÃO DE LISTAS DINÂMICA */}
				<div className={`${styles.links} ${isOpen ? styles.active : ''}`}>
					{navbarLinks.map((link) => (
						<a
							key={link.id}
							href={link.url}
							onClick={() => setIsOpen(false)}
						>
							{link.title}
						</a>
					))}
				</div>
			</div>

			{/* MENU RESPONSIVO */}
			<div
				className={`${styles.hamburger} ${isOpen ? styles.ativo : ''}`}
				onClick={toggleMenu}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
}
