import React, { useState, useEffect } from 'react';
import { Modal, Card } from 'react-bootstrap';
import { Redirect, useNavigate } from 'react-router-dom';
import ClientList from './ClientList';
import InputForm from './InputForm';
import ClientDetail from './ClientDetail';
import ClientEdit from './ClientEdit';

const ClientManagement = ({ history }) => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showClientDetailModal, setShowClientDetailModal] = useState(false);
  const [showClientEditModal, setShowClientEditModal] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const navigate=useNavigate()

  useEffect(() => {
   
      fetchClients();
   
  }, []);
  const token=JSON.parse(localStorage.getItem('token'))
  console.log(token);
  const fetchClients = async () => {
    try {
      const response = await fetch('http://localhost:3000/client', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
  
      console.log('Response:', response);
      console.log('Data:', data);
  
      if (Array.isArray(data)) {
        setClients(data);
      } else {
        console.error('Invalid data format:', data);
      }
    } catch (error) {
      console.error('Error fetching client:', error);
    }
  };
  
  // Create a new user
  const addClient = async (clientData) => {
    try {
      console.log('Adding client:', clientData);

      const response = await fetch('http://localhost:3000/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(clientData),
      });
      console.log('Response:', response);

      const data = await response.json();
      console.log('Data:', data);

      setClients([...clients, data]);
    } catch (error) {
      console.error('Error adding clients:', error);
    }
  };

  // Update an existing user
  const updateClient = async (clientData) => {
    console.log('UPDATING client:', clientData);

    try {
      const response = await fetch(`http://localhost:3000/client/${clientData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify(clientData),
      });
      console.log('Response:', response);

      const updatedClient = await response.json();
      console.log('Data1:', updatedClient);

      const updatedClients = clients.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      );
      console.log('Data2:', updatedClients);

      setClients(updatedClients);
      setSelectedClient(null);
    } catch (error) {
      console.error('Error updating client:', error);
    }
  };


  // Delete a user
  const deleteClient = async (clientId) => {
    try {
      await fetch(`http://localhost:3000/client/${clientId}`, {
        headers: {
          Authorization: `Bearer ${token}`,

        },
        method: 'DELETE',
      });
      const updatedClients = clients.filter((client) => client.id !== clientId);
      setClients(updatedClients);
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };
  // Functions to handle modals
  const openClientDetailModal = (client) => {
    console.log('Opening Client Detail Modal');
    setSelectedClient(client);
    setShowClientDetailModal(true);
  };

  const closeClientDetailModal = () => {
    setShowClientDetailModal(false);
  };

  const openClientEditModal = (client) => {
    setSelectedClient(client);
    setShowClientEditModal(true);
  };

  const closeClientEditModal = () => {
    setShowClientEditModal(false);
  };

  return (
    <div>

      <div className="row">
        <div className="col-8">
        <ClientList
          clients={clients}
          viewClient={openClientDetailModal}
          editClient={(client) => openClientEditModal(client)}  // Utilisez openClientEditModal ici
          deleteClient={deleteClient}/>        
       </div>
        <div className="col-4">
        <InputForm addClient={addClient} updateClient={updateClient} initialData={{  nom: '', prenom: '', adresse: '',num_tel: '' }} />
        </div>

      </div>
    
     {/* Client Detail Modal */}
     <Modal show={showClientDetailModal} onHide={closeClientDetailModal}>
        <Modal.Header closeButton>
          <Modal.Title>Client Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ClientDetail client={selectedClient} onHide={closeClientDetailModal} />
        </Modal.Body>
      </Modal>

      {/* Client Edit Modal */}
      <Modal show={showClientEditModal} onHide={closeClientEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modification Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card>
            <Card.Body>
          <ClientEdit client={selectedClient} updateClient={updateClient} onHide={closeClientEditModal} />
          </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default ClientManagement;
