import React from 'react';
import { useTranslation } from 'react-i18next';
import MyProjects from '../MyProjects/MyProjects';
import './AboutMe.scss';
import Skills from './Skills/Skills';

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <main className="about-me">
      <section className="my-info">
        <div className="my-info_text">
          <span className="my-info_text-profession">{t('profession')}</span>
        </div>
      </section>
      <Skills />
      <MyProjects />
    </main>
  );
}
