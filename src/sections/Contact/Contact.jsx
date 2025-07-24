import { useState } from "react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaEnvelope, FaMapLocationDot, FaMobileScreenButton, FaPhone } from "react-icons/fa6";

import Button from "../../components/Button/Button";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import styles from "./Contact.module.css";

function GMaps() {
  // URL gerada diretamente do Google Maps (recomendado)
  // Vá em maps.google.com, busque o local, clique em "Compartilhar" > "Incorporar um mapa"
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1401132048168!2d-46.65633242388825!3d-23.563410778798563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c88a48db2b%3A0xfe5dd8ea86910839!2sAv.%20Paulista%2C%201234%20-%2010%C2%BA%20andar%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1753399956480!5m2!1spt-BR!2sbr";

  return (
    <div>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{
          border: 0,
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização no Google Maps"
      />
    </div>
  );
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
    <section
      id="contact"
      className={`section ${styles.section}`}
    >
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <SectionHeader
            section={"Contato"}
            title={"Estamos prontos para ajudar você a alcançar seus objetivos. Fale conosco e descubra como podemos transformar seu negócio."}
          />

          {/* Bloco com os endereços e contatos */}
          <div className={styles.localization}>
            {/* Endereço */}
            <div className={styles.addressContainer}>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <FaMapLocationDot
                    size={40}
                    className={styles.locIcons}
                  />
                  <p>Av. Paulista, 1234 10º andar Bela Vista São Paulo/SP CEP: 01310-100</p>
                </div>
                <div className={styles.card}>
                  <FaPhone
                    size={25}
                    className={styles.locIcons}
                  />
                  <p>11 3123-4567 | 11 98765-4321</p>
                </div>
                <div className={styles.card}>
                  <FaEnvelope
                    size={25}
                    className={styles.locIcons}
                  />
                  <p>contato@simonsenbrasil.com.br</p>
                </div>
              </div>
              <hr className={styles.line} />

              <div className={styles.socialContainer}>
                <p>Social media:</p>
                <div className={styles.socialIcons}>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className={styles.icon} />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className={styles.icon} />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className={styles.icon} />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className={styles.icon} />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className={styles.icon} />
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <GMaps />
          </div>
        </div>

        {/* Bloco com o Formulario */}
        <div className={styles.formContainer}>
          <div className={styles.titleForm}>
            <h3>Faça uma Pergunta</h3>
            <p>Por favor, preencha o formulário abaixo e nos envie caso tenha alguma dúvida.</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <input
              type="text"
              name="name"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />{" "}
            <input
              type="email"
              name="email"
              placeholder="Seu Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Sua Mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className={styles.space}></div>
            <Button text="Enviar" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
