import styles from './Products.module.css';
import { services } from '../../data/data';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

export default function Products() {
	return (
		<section id="services" className={`section ${styles.section}`}>
			<div className={`container ${styles.container}`}>
				<SectionHeader section={'Nosso Serviços'} title={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit est quo commodi earum. Vel!'} align="left" />

				<div className={styles.cards}>
					{services.map((service, index) => {
						const Icon = service.icon; // pegar a referência do componente
						return (
							// Bloco Card
							<div className={`card ${styles.card}`} key={index}>
								<img src={service.foto} alt={service.title} />

								<div className={styles.cardText}>
									<h3>{service.title}</h3>
									<p className={styles.cardDesc}>{service.desc}</p>

									{/* Banner dentro do Card */}
									<div className={styles.banner}>
										{Icon && <Icon size={24} className={styles.icon} />}
										<p>{service.banner}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

/* 
// Importação Nomeada

import { services } from '../../data/data'; -> "Pegue apenas a variável services que está sendo exportada de um arquivo chamado data.js, localizado em ../../data/".

<div>{services.map((service, index) => (<Card key={index} {...service} />))}</div>;
  |           |        |             |               |           |                                   
  01          02      03             04              05          06         

01. Crio um container para renderizar o elemento;
02. Chamo o Array "services" e utilizo o método ".map()" para iterar(percorrer cada elemento);
03. O  Parametro "service" representa cada item. Poderia ter qualquer nome;
    Index é uma palavra resevada que representa a posição do elemento no Array;
04. Para cada item é esecutada uma função que renderiza um elemento;    
05. Key é obrigatorio no React para identificar itens na ByteLengthQueuingStrategy;
06. Spread Operator é uma forma de "espalhar" os valores de um objeto ou array;
*/
