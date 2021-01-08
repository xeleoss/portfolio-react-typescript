import React from 'react';
import Skill from '../../../interfaces/Skill';
import './SkillComponent.scss';

export default function SkillComponent(skill: Skill) {
  return (
    <div className="skill">
      {skill.icon && <skill.icon />}&nbsp;{skill.label}
    </div>
  );
}
