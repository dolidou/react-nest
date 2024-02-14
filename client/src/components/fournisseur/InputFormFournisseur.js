import React, { useState } from 'react';

const InputFormFournisseur = ({ addFournisseur, updateFournisseur, initialData }) => {
    const [formData, setFormData] = useState(initialData);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      console.log(`Input changed - Name: ${name}, Value: ${value}`);

      console.log('Name:', name);
      console.log('Value:', value);
      setFormData((prevData) => {
        const updatedData = {
          ...prevData,
          [name]: value,
        };
        console.log('Updated Data:', updatedData);
        return updatedData;
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (formData.id) {
        console.log('essaye' + formData.id);
        updateFournisseur(formData);
      } else {
        addFournisseur(formData);
      }
  
      // Réinitialiser le formulaire après la soumission
      setFormData({  code: '',nom: '', adresse: '',num_tel: '' , rc: '', ai: '', nif: '' });
    };
  
    return (
    <div>
        <br></br>
      
            <div className="card">
            <div className="card-header bg-sky">
            <h3>Création fournisseur</h3>
            </div>
                <div className="card-body">
                <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className="col-md-3">
                    <label className="form-label">Code:</label>
                    </div>
                    <div className="col-md-9">
                    <input className="input-field form-control" type="text" name="code" value={formData.code} onChange={handleInputChange}  style={{ marginBottom: '10px' }} />
                    </div>

                </div>
                <div className='row'>
                  <div className="col-md-3">
                    <label className="form-label">Nom:</label>
                    </div>
                    <div className="col-md-9">
                    <input type="text" name="nom" value={formData.nom} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }} />
                    </div>
                </div>
                <div className='row'>
                  <div className="col-md-3">
                    <label className="form-label">Adresse:</label>
                    </div>
                    <div className="col-md-9">
                    <input type="text" name="adresse" value={formData.adresse} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }} />
                    </div>
                </div>
                <div className='row'>
                  <div className="col-md-3">
                    <label className="form-label">N° Téléphone:</label>
                    </div>
                    <div className="col-md-9">
                    <input type="number" name="num_tel" value={formData.num_tel} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }} />
                    </div>
                </div>
                <div className='row'>
                  <div className="col-md-3">
                    <label className="form-label">Registre de commerce:</label>
                    </div>
                    <div className="col-md-9">
                    <input type="text" name="rc" value={formData.rc} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }} />
                    </div>
                </div>
                <div className='row'>
                  <div className="col-md-3">
                    <label className="form-label">Article Imposable:</label>
                    </div>
                    <div className="col-md-9">
                    <input type="text" name="ai" value={formData.ai} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }} />
                    </div>
                </div>
                <div className='row'>
                  <div className="col-md-3">
                    <label className="form-label">Nif :</label>
                    </div>
                    <div className="col-md-9">
                    <input type="text" name="nif" value={formData.nif} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }} />
                    </div>
                </div>
                    <button className="btn btn-submit" type="submit">Submit</button>
                </form>
                </div>
            </div>
        </div>


      
    );
  };
  
  export default InputFormFournisseur;
  