// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Client from './components/Client';

const App = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Appel à l'API pour récupérer la liste initiale des clients
    axios.get('http://localhost:3002/client')
      .then(response => setClients(response.data))
      .catch(error => console.error('Error fetching clients', error));
  }, []);

  const handleAddClient = (newClient) => {
    setClients([...clients, newClient]);
  };

  const handleUpdateClient = (updatedClient) => {
    setClients(clients.map(client => (client.id === updatedClient.id ? updatedClient : client)));
  };

  const handleDeleteClient = (clientId) => {
    setClients(clients.filter(client => client.id !== clientId));
  };

  const handleCreateClient = async (newClientData) => {
    try {
      const response = await axios.post('http://localhost:3002/client', newClientData);
      setClients([...clients, response.data]);
    } catch (error) {
      console.error('Error creating client', error);
    }
  };

  return (
    <div>
      <h2>Liste des Clients</h2>
      {clients.map(client => (
        <Client
          key={client.id}
          client={client}
          onUpdate={handleUpdateClient}
          onDelete={handleDeleteClient}
          onCreate={handleCreateClient}
        />
      ))}
    </div>
  );
};

export default App;
