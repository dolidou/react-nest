import React from 'react';
import InputFormUpdate from './InputFormUpdate';

const ClientEdit = ({ client, updateClient }) => {
  return (
    <div>
      <InputFormUpdate initialData={client} updateClient={updateClient} />
    </div>
  );
};

export default ClientEdit;