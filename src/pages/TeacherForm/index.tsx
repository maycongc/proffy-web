import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';

const TeacherForm = (): JSX.Element => {
  const history = useHistory();

  const [name, setName] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [bio, setBio] = useState<string>('');

  const [subject, setSubject] = useState<string>('');
  const [cost, setCost] = useState<string>('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '', key: 0 },
  ]);

  function handleNewScheduleItem() {
    const schedule = [
      ...scheduleItems,
      { week_day: 0, from: '', to: '', key: scheduleItems.length },
    ];

    setScheduleItems(schedule);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: number | string,
  ) {
    const updatedScheduleItems = scheduleItems.map((item, index) => {
      if (index === position) {
        return { ...item, [field]: value };
      }
      return item;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleNewClass(e: FormEvent) {
    e.preventDefault();

    const schedule = {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    };

    api
      .post('/classes', schedule)
      .then(() => {
        alert('Cadastro realizado com sucesso!');
        setTimeout(() => {
          history.push('/');
        }, 1500);
      })
      .catch(() => {
        alert('Erro ao cadastrar a aula.');
      });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo, é preencher esse
        formulário de inscrição."
      />

      <main>
        <form onSubmit={handleNewClass}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input
              label="Nome completo"
              name="name"
              onChange={e => {
                setName(e.target.value);
              }}
            />

            <Input
              label="Avatar"
              name="avatar"
              onChange={e => {
                setAvatar(e.target.value);
              }}
            />

            <Input
              label="Whatsapp"
              name="whatsapp"
              onChange={e => {
                setWhatsapp(e.target.value);
              }}
            />

            <Textarea
              label="Biografia"
              name="bio"
              onChange={e => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              label="Matéria"
              name="subject"
              onChange={e => {
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
            <Input
              label="Custo da sua hora por aula"
              name="cost"
              onChange={e => {
                setCost(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={() => handleNewScheduleItem()}>
                + Adicionar horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div key={scheduleItem.key} className="schedule-item">
                <Select
                  label="Dia da Semana"
                  name="week_day"
                  onChange={e =>
                    setScheduleItemValue(
                      index,
                      'week_day',
                      Number(e.target.value),
                    )
                  }
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
                  label="Das"
                  name="from"
                  type="time"
                  onChange={e =>
                    setScheduleItemValue(index, 'from', e.target.value)
                  }
                />

                <Input
                  label="Até"
                  name="to"
                  type="time"
                  onChange={e =>
                    setScheduleItemValue(index, 'to', e.target.value)
                  }
                />
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
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
