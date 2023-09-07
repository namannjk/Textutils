import Navbar from './components/Navbar';
import Inputarea from './components/Inputarea';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const [mode , setMode] =  useState('light')
  const [alert , setAlert] = useState(null)
  const showAlert = (message,type)=>{
        setAlert({
          message:  message,
          type : type
        })
        setTimeout(()=>{
          setAlert(null);
        },1000);
  }
  const removeClasses = ()=>{
    document.removeClasses('bg-dark');
    document.removeClasses('bg-light');
    document.removeClasses('bg-dark');
    document.removeClasses('bg-dark');
    document.removeClasses('bg-dark');
    document.removeClasses('bg-dark');

  }
  const changeMode = (cls)=>{
   // removeClasses();
    if(mode==='light')
    {
      setMode('dark');
      //  document.body.classList.add('bg-danger');
      document.body.style.backgroundColor = cls;
      showAlert("Dark Mode has been enabled","success");
    }
    else
    {
      setMode('light');
      //  document.body.classList.add('bg-danger');
      document.body.style.backgroundColor = cls;

      showAlert("light Mode has been enabled","success");
    }
  }
  return (
    <>
         {/* <Router> */}
      <Navbar Title = "NamanReact" about = "about us" mode = {mode} changeMode = {changeMode}/>
      <Alert alert = {alert}/>
      <div className="container">
      <Inputarea Title = "Insert Your Text" mode = {mode} showAlert = {showAlert}/>
      {/* <Routes>
      <Route path='/' element={ <Inputarea Title = "Insert Your Text" mode = {mode} showAlert = {showAlert}/>} />
      <Route path='/about' element={<About/>} /> */}
    
      {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
