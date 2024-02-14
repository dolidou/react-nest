import React from 'react';
import Card from 'react-bootstrap/Card';


const ClientDetail = ({ client }) => {
  return (
    <Card>
  <Card.Body>
    <Card.Title>Nom: {client.nom}</Card.Title>
    <Card.Title>Prenom: {client.prenom}</Card.Title>
    <Card.Title>Adresse: {client.adresse}</Card.Title>
    <Card.Title>Numéro de téléphone: {client.num_tel}</Card.Title>
  </Card.Body>
</Card>
  );
};

export default ClientDetail;