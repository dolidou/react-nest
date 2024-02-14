import React, { useState, useEffect } from 'react';
import InputForm from './components/client/InputForm';
import ClientList from './components/client/ClientList';
import ClientDetail from './components/client/ClientDetail';
import ClientEdit from './components/client/ClientEdit';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ClientManagement from './components/client/ClientManagement';

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <ClientManagement />

    </div>
  );
};

export default App;