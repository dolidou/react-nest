import React from 'react';
import InputFormUpdateFournisseur from './InputFormUpdateFournisseur';

const FournisseurEdit = ({ fournisseur, updateFournisseur}) => {
  return (
    <div>
      <InputFormUpdateFournisseur initialData={fournisseur} updateFournisseur={updateFournisseur} />
    </div>
  );
};

export default FournisseurEdit;