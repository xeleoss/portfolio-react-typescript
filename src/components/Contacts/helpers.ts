import github from '../../assets/icons/github.svg';
import vk from '../../assets/icons/vk.svg';
import { ContactType } from './ContactType';
import { Contact } from './Contact';

export const contacts: Contact[] = [
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
