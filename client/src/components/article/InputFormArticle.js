import React, { useState } from 'react';

const InputFormArticle = ({ addArticle, updateFournisseur, initialData, fournisseurs }) => {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez votre logique pour l'insertion dans la table pivot ici
    addArticle(formData);
    // Réinitialiser le formulaire après la soumission
    setFormData({ code: '', designation: '', qte: '', prix_unitaire: '', fournisseur: '' });
  };

  return (
    <div>
      <br />
      <div className="card">
        <div className="card-header bg-sky">
          <h3>Création Article</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className="col-md-3">
                <label className="form-label">Code:</label>
              </div>
              <div className="col-md-9">
                <input className="input-field form-control" type="text" name="code" value={formData.code} onChange={handleInputChange} style={{ marginBottom: '10px' }} />
              </div>
            </div>
            <div className='row'>
              <div className="col-md-3">
                <label className="form-label">Designation:</label>
              </div>
              <div className="col-md-9">
                <input type="text" name="designation" value={formData.designation} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }} />
              </div>
            </div>
            <div className='row'>
              <div className="col-md-3">
                <label className="form-label">qte:</label>
              </div>
              <div className="col-md-9">
                <input type="text" name="qte" value={formData.qte} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }} />
              </div>
            </div>
            <div className='row'>
              <div className="col-md-3">
                <label className="form-label">Prix unitaire:</label>
              </div>
              <div className="col-md-9">
                <input type="text" name="prix_unitaire" value={formData.prix_unitaire} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }} />
              </div>
            </div>
            <div className='row'>
              <div className="col-md-3">
                <label className="form-label">Fournisseur:</label>
              </div>
              <div className="col-md-9">
                <select name="fournisseur" value={formData.fournisseur} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }}>
                  {/* Utilisez la liste des fournisseurs pour générer les options du select */}
                  {fournisseurs.map(fournisseur => (
                    <option key={fournisseur.id} value={fournisseur.id}>{fournisseur.nom}</option>
                  ))}
                </select>
              </div>
            </div>

            <button className="btn btn-submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputFormArticle;
