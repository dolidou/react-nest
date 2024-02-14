import React, { useState, useEffect } from 'react';
import { Modal, Card } from 'react-bootstrap'; 
import { Redirect, useNavigate, withRouter } from 'react-router-dom';
import ArticleList from './ArticleList';
import InputFormArticle from './InputFormArticle';



const ArticleManagement = ({  }) => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showArticleDetailModal, setShowArticleDetailModal] = useState(false);
  const [showArticleEditModal, setShowArticleEditModal] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const navigate= useNavigate()


  useEffect(() => {

      fetchData();
  }, []);
  const token=JSON.parse(localStorage.getItem('token'))
  const userid=JSON.parse(localStorage.getItem('user'))
 

console.log(userid.id);
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/article`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log('Response: auto', response);
  
      if (!response.ok) {
        console.error(`Error fetching fournisseur. Status: ${response.status}`);
        return;
      }
  
      const data = await response.json();
      setArticles(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };
  

  // Create a new user
  const addArticle = async (articleData) => {
    try {
    
      console.log('Adding fournisseur:', articleData);

      const response = await fetch(`http://localhost:3000/article`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(articleData),
      });
      console.log('Response: auto', response);

      const data = await response.json();
      console.log('Data:', data);

      setArticles([...articles, data]);
    } catch (error) {
      console.error('Error adding articles:', error);
    }
  };

  // Update an existing user
  const updateArticle = async (articleData) => {
    console.log('UPDATING article:', articleData);

    try {
      const response = await fetch(`http://localhost:3000/article/${articleData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify(articleData),
      });
      console.log('Response:', response);

      const updatedArticle = await response.json();
      console.log('Data1:', updateArticle);

      const updatedArticles = articles.map((article) =>
        article.id === updatedArticle.id ? updatedArticle : article
      );
      console.log('Data2:', updatedArticles);

      setArticles(updatedArticles);
      setSelectedArticle(null);
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };


  // Delete a user
  const deleteArticle = async (articleId) => {
    try {
      await fetch(`http://localhost:3000/article/${articleId}`, {
        headers: {
          Authorization: `Bearer ${token}`,

        },
        method: 'DELETE',
      });
      const updatedArticles = articles.filter((article) => article.id !== articleId);
      setArticles(updatedArticles);
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };
  // Functions to handle modals
  const openArticleDetailModal = (article) => {
    console.log('Opening article Detail Modal');
    setSelectedArticle(article);
    setShowArticleDetailModal(true);
  };

  const closeArticleDetailModal = () => {
    setShowArticleDetailModal(false);
  };

  const openArticleEditModal = (article) => {
    setSelectedArticle(article);
    setShowArticleEditModal(true);
  };

  const closeArticleEditModal = () => {
    setShowArticleEditModal(false);
  };

  return (
    <div>

      <div className="row">
        <div className="col-8">
        <ArticleList
          articles={articles}
          viewArticle={openArticleDetailModal}
          editArticle={(article) => openArticleEditModal(article)}  
          deleteArticle={deleteArticle}/>        
       </div>
        <div className="col-4">
        {/* <InputFormArticle addArticle={addArticle} updateArticle={updateArticle} initialData={{ code: '', designation: '', qte: '', prix_unitaire: '', fournisseur: '' } }/> */}
        </div>

      </div>
    
     {/* Fournisseur Detail Modal */}
     <Modal show={showArticleDetailModal} onHide={closeArticleDetailModal}>
        <Modal.Header closeButton>
          <Modal.Title>Article Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <ArticleDetail article={selectedArticle} onHide={closeArticleDetailModal} /> */}
        </Modal.Body>
      </Modal>

      {/* Fournisseur Edit Modal */}
      <Modal show={showArticleEditModal} onHide={closeArticleEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modification Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card>
            <Card.Body>
          {/* <ArticleEdit article={selectedArticle} updateArticle={updateArticle} onHide={closeArticleEditModal} /> */}
          </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default ArticleManagement;
