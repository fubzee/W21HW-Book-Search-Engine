import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar />
            <Routes>
              <Route 
                path='/' 
                element={<SearchBooks />} 
              />
              <Route 
                path='/saved' 
                element={<SavedBooks />} 
              />
              <Route 
                path='/login' 
                element={<LoginForm />} 
              />
              <Route 
                path='*'
                element={<h1 className='display-2'>Wrong page!</h1>}
              />
            </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
