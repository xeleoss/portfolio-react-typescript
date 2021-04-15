import React from 'react';
import AppRouter from './routes/AppRouter';
import NavBar from './components/NavBar/NavBar';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <>
      <main className="app-content">
        <NavBar />
        <AppRouter />
      </main>
      <footer className="pageFooter">
        <Contacts />
        <div className="pageFooter__branding">© copyright 2021</div>
      </footer>
    </>
  );
}

export default App;
