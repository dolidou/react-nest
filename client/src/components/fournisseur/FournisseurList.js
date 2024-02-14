import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MDBDataTable } from 'mdbreact';

const FournisseurList = ({ fournisseurs, viewFournisseur, editFournisseur, deleteFournisseur }) => {
  // Définissez les données pour le composant MDBDataTable
  const data = {
    columns: [
      {
        label: 'Code',
        field: 'code',
        sort: 'asc',
      },
      {
        label: 'Nom',
        field: 'nom',
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
        label: 'Registre de commerce',
        field: 'rc',
        sort: 'asc',
      },
      {
        label: 'Article Imposable',
        field: 'ai',
        sort: 'asc',
      },
      {
        label: 'NIF',
        field: 'nif',
        sort: 'asc',
      },
      {
        label: 'Actions',
        field: 'actions',
        sort: 'asc',
      },
    ],
    rows: fournisseurs.map((fournisseur) => ({
      code: fournisseur.code,
      nom: fournisseur.nom,
      adresse: fournisseur.adresse,
      num_tel: fournisseur.num_tel,
      rc: fournisseur.rc,
      ai: fournisseur.ai,
      nif: fournisseur.nif,
      actions: (
        <>
          <button className="btn btn-sky" onClick={() => viewFournisseur(fournisseur)}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button className="btn btn-pink" onClick={() => editFournisseur(fournisseur)}>
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button className="btn btn-purple" onClick={() => deleteFournisseur(fournisseur.id)}>
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
          <h3>Liste des fournisseurs</h3>
        </div>
        <div className="card-body">
        {/* Utilisez le composant MDBDataTable avec les données définies */}
        <MDBDataTable className="custom-mdb-table" responsive striped bordered data={data} />
        </div>
      </div>
    </div>
  );
};

export default FournisseurList;
