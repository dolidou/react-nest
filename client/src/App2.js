import React from 'react';
import { BrowserRouter as Router, Route, Routes, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ListClientComponent from './components/ListClientComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateClientComponent from './components/CreateClientComponent';
import ViewClientComponent from './components/ViewClientComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
              <Route path="/" element={<ListClientComponent />} />
              <Route path="/client" element={<ListClientComponent />} />
              <Route path="/add-client/:id" element={<CreateClientComponent />} />
              <Route path="/view-client/:id" element={<ViewClientComponent />} />
            {/* <Route path="/update-client/:id" component={UpdateClientComponent} /> */}
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
