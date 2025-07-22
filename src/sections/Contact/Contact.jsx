import { useState } from "react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaEnvelope, FaMapLocationDot, FaMobileScreenButton } from "react-icons/fa6";

import image from "../../assets/landscape.jpg";
import Button from "../../components/Button/Button";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import styles from "./Contact.module.css";

function GMaps() {
  return <iframe title="Localização" width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.2766236042503!2d-34.92521692414682!3d-8.174862691856262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae1a50efc2b9d%3A0xb6bac518961d9db4!2sR.%20Francisco%20Mendes%20-%20Piedade%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%20Brazil!5e0!3m2!1sen!2sus!4v1751653974581!5m2!1sen!2sus"></iframe>;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          {/* Bloco com título e descrição da seção */}
          <SectionHeader section={"Contato"} title={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit est quo commodi earum. Vel!"} description={"Somos especialistas em desenvolvimento web, com foco em performance, design e UX. Nosso time conta com profissionais experientes em frontend, backend e UI/UX."} />

          {/* Bloco com os endereços e contatos */}
          <div className={styles.localization}>
            {/* Endereço */}
            <div className={styles.address}>
              <p>
                <FaMapLocationDot className={styles.locIcons} /> 4517 Washington Ave. Manchester, Kentucky 39495
              </p>
              <p>
                <FaMobileScreenButton className={styles.locIcons} /> (303) 555-0105
              </p>
              <p>
                <FaEnvelope className={styles.locIcons} /> alma.lawson@example.com
              </p>
              <hr className={styles.line} />

              <div className={styles.socialContainer}>
                <p>Social media:</p>
                <div className={styles.socialIcons}>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className={styles.icon} />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className={styles.icon} />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className={styles.icon} />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className={styles.icon} />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className={styles.icon} />
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className={styles.map}>
              <GMaps />
            </div>
          </div>
        </div>

        {/* Bloco com o Formulario */}
        <div className={` card ${styles.formContainer}`}>

          <div className={styles.titleForm}>
						<h3>Faça uma Pergunta</h3>
						<p>Por favor, preencha o formulário abaixo e nos envie caso tenha alguma dúvida.</p>
					</div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} required /> <input type="email" name="email" placeholder="Seu Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Sua Mensagem" value={formData.message} onChange={handleChange} required />
            <div className={styles.space}></div>
            <Button text="Enviar" />
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
