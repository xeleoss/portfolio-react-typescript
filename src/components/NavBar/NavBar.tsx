import React from 'react';
import './NavBar.scss';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../routes/routes';
import { languages } from '../../localization/i18n';

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).then();
  };

  const langs = (
    <div>
      {languages
        .filter((x) => i18n.language !== x.value)
        .map((lang) => (
          <button
            className="button-lang"
            type="button"
            key={lang.value}
            onClick={() => changeLanguage(lang.value)}
          >
            {lang.label}
          </button>
        ))}
    </div>
  );

  return (
    <header className="header">
      <a href={process.env.PUBLIC_URL} className="header__title">
        {t('name')}
      </a>
      <div className="header__links">
        {routes.map((x) => (
          <Link
            key={x.path}
            className="header__links-link"
            to={x.path}
            data-active={location.pathname === x.path}
          >
            {t(x.label)}
          </Link>
        ))}
      </div>
      {langs}
    </header>
  );
}
