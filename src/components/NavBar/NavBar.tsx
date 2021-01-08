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

  return (
    <header className="header">
      <span className="header__title">{t('name')}</span>
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
      <div>
        {languages.map((lang) => (
          <>
            {i18n.language !== lang && <button
              className="button-lang"
              type="button"
              key={lang}
              onClick={() => changeLanguage(lang)}
            >
                {lang.toUpperCase()}
            </button>}
          </>
        ))}
      </div>
    </header>
  );
}
