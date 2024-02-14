import React from 'react';
import Card from 'react-bootstrap/Card';


const ArticleDetail = ({ article }) => {
  return (
    <Card>
  <Card.Body>
    <Card.Title>Code: {article.code}</Card.Title>
    <Card.Title>Nom: {article.designation}</Card.Title>
    {/* <Card.Title>Adresse: {fournisseur.adresse}</Card.Title>
    <Card.Title>Numéro de téléphone: {fournisseur.num_tel}</Card.Title>
    <Card.Title>Registre de commerce: {fournisseur.rc}</Card.Title>
    <Card.Title>Article imposable: {fournisseur.ai}</Card.Title>
    <Card.Title>NIF: {fournisseur.nif}</Card.Title> */}
  </Card.Body>
</Card>
  );
};

export default ArticleDetail;