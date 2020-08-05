import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem = (): JSX.Element => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://kprofiles.com/wp-content/uploads/2019/12/WhatsApp-Image-2019-12-03-at-4.13.01-PM-799x800.jpeg"
          alt="Professor"
        />
        <div>
          <strong>Professor Exemplo</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em labolatório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma de minhas explosões.
      </p>

      <footer>
        <p>
          Valor/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
