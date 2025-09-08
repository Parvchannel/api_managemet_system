import Navbar from './components/navbar';
import './App.css';
import LandingPage from './components/landingPage';
import Features from './components/features.js';
import Footer from './components/footer.js';
import { useState } from 'react';

function App() {
  const [showsignup, setShowSignup] = useState(false);
  if(showsignup){
    return (
      <div>
        sign 
      </div>
    );
  }
  return (
   <div>
     <Navbar setShowSignup={setShowSignup}></Navbar>
     <LandingPage setShowSignup={setShowSignup}></LandingPage>
     <Features setShowSignup={setShowSignup}></Features>
     <Footer></Footer>
   </div>
  );
}

export default App;

