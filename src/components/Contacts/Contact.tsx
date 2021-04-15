import { ContactType } from './ContactType';

export interface Contact {
  name: string;
  url?: string;
  type?: ContactType;
  icon: any;
}
