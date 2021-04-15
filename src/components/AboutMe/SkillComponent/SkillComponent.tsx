import React from 'react';
import Skill from '../../../interfaces/Skill';
import './SkillComponent.scss';
import { showDefault } from '../../../common/toasters';

interface Props {
  skill: Skill;
}

export default function SkillComponent({ skill }: Props) {
  return (
    <div className="skill" onClick={() => showDefault(skill.toast)}>
      {skill.icon && <skill.icon />}&nbsp;{skill.label}
    </div>
  );
}
