import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MDBDataTable } from 'mdbreact';

const ArticleList = ({ articles, viewArticle, editArticle, deleteArticle }) => {
  // Définissez les données pour le composant MDBDataTable
  const data = {
    columns: [
      {
        label: 'Code',
        field: 'code',
        sort: 'asc',
      },
      {
        label: 'Designation',
        field: 'designation',
        sort: 'asc',
      },
      {
        label: 'Quantité',
        field: 'qte',
        sort: 'asc',
      },
      {
        label: 'Prix unitaire',
        field: 'prix_unitaire',
        sort: 'asc',
      },
      {
        label: 'Fournisseur',
        field: 'fournisseur',
        sort: 'asc',
      },
      {
        label: 'Actions',
        field: 'actions',
        sort: 'asc',
      },
    ],
    rows: articles.map((article) => ({
      code: article.code,
      designation: article.designation,
      qte: article.articleFournisseurs.map((articleFournisseur) => articleFournisseur.qte).join(', '), // Joindre les quantités si plusieurs fournisseurs
      prix_unitaire: article.articleFournisseurs.map((articleFournisseur) => articleFournisseur.prix_unitaire).join(', '), // Joindre les prix unitaires
      fournisseur: article.articleFournisseurs.map((articleFournisseur) => articleFournisseur.fournisseur.nom).join(', '), // Joindre les noms des fournisseurs
      actions: (
        <>
          <button className="btn btn-sky" onClick={() => viewArticle(article)}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button className="btn btn-pink" onClick={() => editArticle(article)}>
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button className="btn btn-purple" onClick={() => deleteArticle(article.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      ),
    })),
  };

  return (
    <div>
      <br />
      <div className="card">
        <div className="card-header bg-sky">
          <h3>Liste des Articles</h3>
        </div>
        <div className="card-body">
          {/* Utilisez le composant MDBDataTable avec les données définies */}
          <MDBDataTable className="custom-mdb-table" responsive striped bordered data={data} />
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
