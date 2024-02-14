import React, { useState } from 'react';

const InputFormUpdateFournisseur = ({  updateFournisseur, initialData }) => {
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
        
      }
  
      // Réinitialiser le formulaire après la soumission
      setFormData({  code: '',nom: '', adresse: '',num_tel: '' , rc: '', ai: '', nif: '' });
    };
  
    return (
    <div>
        <br></br>
      
          
                <div className="card-body">
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Code:</label>
                    <input type="text" name="code" value={formData.code} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }} />
                    </div>
                    <div className="form-group">
                    <label>Nom:</label>
                    <input type="text" name="nom" value={formData.nom} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }} />
                    </div>
                    <div className="form-group">
                    <label>Adresse:</label>
                    <input type="text" name="adresse" value={formData.adresse} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }} />
                    </div>
                    <div className="form-group">
                    <label>Numéro de Téléphone:</label>
                    <input type="number" name="num_tel" value={formData.num_tel} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }} />
                    </div>
                    <div className="form-group">
                    <label>Registre de commerce:</label>
                    <input type="text" name="rc" value={formData.rc} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }} />
                    </div>
                    <div className="form-group">
                    <label>Article Imposable:</label>
                    <input type="text" name="ai" value={formData.ai} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }} />
                    </div>
                    <div className="form-group">
                    <label>Nif :</label>
                    <input type="text" name="nif" value={formData.nif} onChange={handleInputChange} className="form-control" style={{ marginBottom: '10px' }} />
                    </div>
                    <button className="btn btn-submit" type="submit">Submit</button>
                </form>
                </div>
            </div>


      
    );
  };
  
  export default InputFormUpdateFournisseur;
  