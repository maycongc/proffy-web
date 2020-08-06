import React, { useState, useEffect } from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

interface IClasses {
  id: string;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: string;
}

const TeacherList = (): JSX.Element => {
  const [subject, setSubject] = useState<string>('');
  const [week_day, setWeekDay] = useState<string>('');
  const [time, setTime] = useState<string>('');

  const [classes, setClasses] = useState<IClasses[]>([]);

  useEffect(() => {
    let paramsVerification = true;
    if (week_day === '' || time === '' || subject === '') {
      paramsVerification = false;
    }

    if (paramsVerification) {
      api
        .get('/classes', {
          params: {
            subject,
            week_day,
            time,
          },
        })
        .then(res => {
          setClasses(res.data.classes);
        });
    }
  }, [week_day, time, subject]);

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            label="Dia da Semana"
            name="week_day"
            value={week_day}
            onChange={e => {
              e.preventDefault();
              setWeekDay(e.target.value);
            }}
            options={[
              { value: '1', label: 'Domingo' },
              { value: '2', label: 'Segunda-Feira' },
              { value: '3', label: 'Terça-Feira' },
              { value: '4', label: 'Quarta-Feira' },
              { value: '5', label: 'Quinta-Feira' },
              { value: '6', label: 'Sexta-Feira' },
              { value: '7', label: 'Sábado' },
            ]}
          />

          <Input
            label="Hora"
            name="time"
            type="time"
            value={time}
            onChange={e => {
              e.preventDefault();
              setTime(e.target.value);
            }}
          />

          <Select
            label="Matéria"
            name="subject"
            value={subject}
            onChange={e => {
              e.preventDefault();
              setSubject(e.target.value);
            }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Fisica', label: 'Educação Fisica' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />
        </form>
      </PageHeader>

      <main>
        {classes.map(data => (
          <TeacherItem
            key={data.id}
            id={data.id}
            name={data.name}
            subject={data.subject}
            avatar={data.avatar}
            bio={data.bio}
            cost={data.cost}
            whatsapp={data.whatsapp}
          />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;
