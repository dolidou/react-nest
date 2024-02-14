import React, { useState, useEffect } from 'react';
import { Modal, Card } from 'react-bootstrap'; 
import { Redirect, useNavigate, withRouter } from 'react-router-dom';
import FournisseurList from './FournisseurList';
import InputFormFournisseur from './InputFormFournisseur';
import FournisseurDetail from './FournisseurDetail';
import FournisseurEdit from './FournisseurEdit';



const FournisseurManagement = ({  }) => {
  const [fournisseurs, setFournisseurs] = useState([]);
  const [selectedFournisseur, setSelectedFournisseur] = useState(null);
  const [showFournisseurDetailModal, setShowFournisseurDetailModal] = useState(false);
  const [showFournisseurEditModal, setShowFournisseurEditModal] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const navigate= useNavigate()


  useEffect(() => {

      fetchData();
  }, []);
  const token=JSON.parse(localStorage.getItem('token'))
  const userid=JSON.parse(localStorage.getItem('user'))
 

console.log(userid.id);
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/fournisseur/findfournisseur/${userid.userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log('Response: auto', response);
  
      if (!response.ok) {
        console.error(`Error fetching fournisseur. Status: ${response.status}`);
        return;
      }
  
      const data = await response.json();
      setFournisseurs(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching fournisseur:', error);
    }
  };
  

  // Create a new user
  const addFournisseur = async (fournisseurData) => {
    try {
      const userid=JSON.parse(localStorage.getItem('user'))

      console.log(userid);
      console.log('Adding fournisseur:', fournisseurData);

      const response = await fetch(`http://localhost:3000/fournisseur/${userid.userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(fournisseurData),
      });
      console.log('Response: auto', response);

      const data = await response.json();
      console.log('Data:', data);

      setFournisseurs([...fournisseurs, data]);
    } catch (error) {
      console.error('Error adding fournisseurs:', error);
    }
  };

  // Update an existing user
  const updateFournisseur = async (fournisseurData) => {
    console.log('UPDATING fournisseur:', fournisseurData);

    try {
      const response = await fetch(`http://localhost:3000/fournisseur/${fournisseurData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify(fournisseurData),
      });
      console.log('Response:', response);

      const updatedFournisseur = await response.json();
      console.log('Data1:', updatedFournisseur);

      const updatedFournisseurs = fournisseurs.map((fournisseur) =>
        fournisseur.id === updatedFournisseur.id ? updatedFournisseur : fournisseur
      );
      console.log('Data2:', updatedFournisseurs);

      setFournisseurs(updatedFournisseurs);
      setSelectedFournisseur(null);
    } catch (error) {
      console.error('Error updating fournisseur:', error);
    }
  };


  // Delete a user
  const deleteFournisseur = async (fournisseurId) => {
    try {
      await fetch(`http://localhost:3000/fournisseur/${fournisseurId}`, {
        headers: {
          Authorization: `Bearer ${token}`,

        },
        method: 'DELETE',
      });
      const updatedFournisseurs = fournisseurs.filter((fournisseur) => fournisseur.id !== fournisseurId);
      setFournisseurs(updatedFournisseurs);
    } catch (error) {
      console.error('Error deleting fournisseur:', error);
    }
  };
  // Functions to handle modals
  const openFournisseurDetailModal = (fournisseur) => {
    console.log('Opening fournisseur Detail Modal');
    setSelectedFournisseur(fournisseur);
    setShowFournisseurDetailModal(true);
  };

  const closeFournisseurDetailModal = () => {
    setShowFournisseurDetailModal(false);
  };

  const openFournisseurEditModal = (fournisseur) => {
    setSelectedFournisseur(fournisseur);
    setShowFournisseurEditModal(true);
  };

  const closeFournisseurEditModal = () => {
    setShowFournisseurEditModal(false);
  };

  return (
    <div>

      <div className="row">
        <div className="col-8">
        <FournisseurList
          fournisseurs={fournisseurs}
          viewFournisseur={openFournisseurDetailModal}
          editFournisseur={(fournisseur) => openFournisseurEditModal(fournisseur)}  
          deleteFournisseur={deleteFournisseur}/>        
       </div>
        <div className="col-4">
        <InputFormFournisseur addFournisseur={addFournisseur} updateFournisseur={updateFournisseur} initialData={{  code: '',nom: '', adresse: '',num_tel: '' , rc: '', ai: '', nif: ''}} />
        </div>

      </div>
    
     {/* Fournisseur Detail Modal */}
     <Modal show={showFournisseurDetailModal} onHide={closeFournisseurDetailModal}>
        <Modal.Header closeButton>
          <Modal.Title>Fournisseur Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FournisseurDetail fournisseur={selectedFournisseur} onHide={closeFournisseurDetailModal} />
        </Modal.Body>
      </Modal>

      {/* Fournisseur Edit Modal */}
      <Modal show={showFournisseurEditModal} onHide={closeFournisseurEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modification Fournisseur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card>
            <Card.Body>
          <FournisseurEdit fournisseur={selectedFournisseur} updateFournisseur={updateFournisseur} onHide={closeFournisseurEditModal} />
          </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default FournisseurManagement;
