import React from 'react';
import './Contact.scss';
import { contacts } from './helpers';

export default function Contacts() {
  return (
    <div className="contacts">
      {contacts.map((c) => (
        <a
          href={c.url ?? '*'}
          className="contacts__contact"
          key={c.name + c.url}
          rel="noreferrer"
          target="_blank"
        >
          <img src={c.icon} alt="logo" /> <span>{c.name}</span>
        </a>
      ))}
    </div>
  );
}
