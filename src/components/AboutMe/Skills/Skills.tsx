import React from 'react';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import './Skills.scss';
import { useTranslation } from 'react-i18next';
import SkillComponent from '../SkillComponent/SkillComponent';
import Skill from '../../../interfaces/Skill';

const mySkills: Skill[] = [
  {
    label: 'C#',
    icon: TagFacesIcon,
    toast: 'Любимый язык, с его помощью пишу Амадеуса начиная с 2019 года',
  },
  {
    label: 'TypeScript',
    icon: TagFacesIcon,
    toast: 'Основной язык, который использую на работе',
  },
  {
    label: 'JavaScript',
    toast:
      'Из-за использования TypeScript его знаю тоже, но стараюсь на нём ничего не писать, так как типизация ванлав',
  },
  { label: 'React', toast: 'Пишу на хуках, классы уже не помню' },
  { label: 'Angular', toast: 'Использовал на работе с 8 по 10 версии' },
];

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section className="skills">
      <div>
        <h2>{t('skills title')}</h2>
        <div className="skills__list">
          {mySkills.map((data) => (
            <SkillComponent key={data.label} skill={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
