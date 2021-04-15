import React from 'react';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import './Skills.scss';
import { useTranslation } from 'react-i18next';
import SkillComponent from '../SkillComponent/SkillComponent';
import Skill from '../../../interfaces/Skill';

const mySkills: Skill[] = [
  { label: 'C#', icon: TagFacesIcon },
  { label: 'TypeScript', icon: TagFacesIcon },
  { label: 'JavaScript' },
  { label: 'React' },
  { label: 'Angular' },
];

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section className="skills">
      <div>
        <h2>{t('skills title')}</h2>
        <div className="skills__list">
          {mySkills.map((data) => (
            <SkillComponent
              key={data.label}
              icon={data.icon}
              label={data.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
