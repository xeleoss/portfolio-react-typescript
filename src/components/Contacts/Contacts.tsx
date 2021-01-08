import React from 'react';
import './Contact.scss';
import github from '../../assets/icons/github.svg';
import vk from '../../assets/icons/vk.svg';

enum ContactType {
  Site
}

type Contact = {
  name: string;
  url?: string;
  type?: ContactType;
  icon: any;
};

const contacts: Contact[] = [
  {
    name: '',
    url: 'https://github.com/xeleoss',
    type: ContactType.Site,
    icon: github,
  },
  {
    name: '',
    url: 'https://vk.com/soelex',
    type: ContactType.Site,
    icon: vk,
  },
];

export default function Contacts() {
  return (
    <div className="contacts">
      {contacts.map((c) => (
        <a
          href={c.url ?? '*'}
          className="contacts__contact"
          key={c.name}
          rel="noreferrer"
          target="_blank"
        >
          <img src={c.icon} alt="logo" /> <span>{c.name}</span>
        </a>
      ))}
    </div>
  );
}
