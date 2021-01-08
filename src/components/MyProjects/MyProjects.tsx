import React from 'react';
import './MyProjects.scss';
import { useTranslation } from 'react-i18next';

export default function MyProjects() {
  const { t } = useTranslation();

  return (
    <section className="my-projects">
      <dl>
        <dt>{t('my projects')}:</dt>
        <dd>
          <a
            href="https://cm.animebots.com/"
            rel="noreferrer"
            target="_blank"
          >
            {t('amadeus')}
          </a>
        </dd>
        <dd>{t('other')}..</dd>
      </dl>
    </section>
  );
}
