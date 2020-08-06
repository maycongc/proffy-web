import React, { useState } from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import warningIcon from '../../assets/images/icons/warning.svg';

interface IScheduleItem {
  week_day: number;
  from: string;
  to: string;
  key: number;
}

const TeacherForm = (): JSX.Element => {
  const [scheduleItems, setScheduleItems] = useState<IScheduleItem[]>([
    { week_day: 0, from: '', to: '', key: 0 },
  ]);

  function handleNewScheduleItem() {
    const schedule = [
      ...scheduleItems,
      { week_day: 0, from: '', to: '', key: scheduleItems.length },
    ];

    setScheduleItems(schedule);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo, é preencher esse
        formulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input label="Nome completo" name="name" />
          <Input label="Avatar" name="avatar" />
          <Input label="Whatsapp" name="whatsapp" />
          <Textarea label="Biografia" name="bio" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            label="Matéria"
            name="subject"
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
          <Input label="Custo da sua hora por aula" name="cost" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={() => handleNewScheduleItem()}>
              + Adicionar horário
            </button>
          </legend>

          {scheduleItems.map(scheduleItem => (
            <div key={scheduleItem.key} className="schedule-item">
              <Select
                label="Dia da Semana"
                name="week_day"
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
              <Input label="Das" name="from" type="time" />
              <Input label="Até" name="to" type="time" />
            </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso" />
            Importante!
            <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
