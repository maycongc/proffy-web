import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList = (): JSX.Element => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">
              Matéria
              <input type="text" name="subject" id="subject" />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="week-day">
              Dia da Semana
              <input type="text" name="week-day" id="week-day" />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="time">
              Hora
              <input type="text" name="time" id="time" />
            </label>
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
