import React from 'react';
import LoginPage from './LoginPage.jsx';
import './App.css';
import MainLayout from './layout/MainLayout.jsx';
import Routers from './routes/Routers.jsx';
function App() {
  return (
    
    <MainLayout>
     {/* <LoginPage/> */}

     <Routers />
    
      </MainLayout>
   
     );
}
export default App;
