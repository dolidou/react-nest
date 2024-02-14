import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MDBDataTable } from 'mdbreact';

const ClientList = ({ clients, viewClient, editClient, deleteClient }) => {
  // Définissez les données pour le composant MDBDataTable
  const data = {
    columns: [
      {
        label: 'Nom',
        field: 'nom',
        sort: 'asc',
      },
      {
        label: 'Prenom',
        field: 'prenom',
        sort: 'asc',
      },
      {
        label: 'Adresse',
        field: 'adresse',
        sort: 'asc',
      },
      {
        label: 'Téléphone',
        field: 'num_tel',
        sort: 'asc',
      },
      {
        label: 'Actions',
        field: 'actions',
        sort: 'asc',
      },
    ],
    rows: clients.map((client) => ({
      nom: client.nom,
      prenom: client.prenom,
      adresse: client.adresse,
      num_tel: client.num_tel,
      actions: (
        <>
          <button className="btn btn-sky" onClick={() => viewClient(client)}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button className="btn btn-pink" onClick={() => editClient(client)}>
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button className="btn btn-purple" onClick={() => deleteClient(client.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      ),
    })),
  };

  return (
    <div>
      <br></br>
      <div className="card">
        <div className="card-header bg-sky">
          <h3>Liste des clients</h3>
        </div>

        {/* Utilisez le composant MDBDataTable avec les données définies */}
        <MDBDataTable  className="custom-mdb-table" responsive striped bordered data={data} />
      </div>
    </div>
  );
};

export default ClientList;
