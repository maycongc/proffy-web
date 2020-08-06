import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

interface TeacherItemProps {
  id: string;
  name: string;
  subject: string;
  avatar: string;
  bio: string;
  cost: string;
  whatsapp: string;
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  id,
  name,
  subject,
  avatar,
  bio,
  cost,
  whatsapp,
}) => {
  function handleNewConnection() {
    api.post('/connections', {
      user_id: id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt="Professor" />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Valor/hora
          <strong>R$ {cost}</strong>
        </p>
        <a
          onClick={handleNewConnection}
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
