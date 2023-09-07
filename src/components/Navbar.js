import React from 'react'
import { Link } from 'react-router-dom'

export default function (props) {
  return (
    <div>
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.Title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.about}  </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex ">
        <div className = {`d-flex`}>
          <div className = "mx-2" style = {{backgroundColor: 'red' , width : '30px' , height : '30px '}} onClick={()=>{props.changeMode('red')}}></div>
          <div className = "mx-2" style = {{backgroundColor: 'blue' , width : '30px' , height : '30px '}} onClick={()=>{props.changeMode('blue')}}></div>

          <div className = "mx-2" style = {{backgroundColor: 'green' , width : '30px' , height : '30px '}} onClick={()=>{props.changeMode('green')}}></div>

          <div className = "mx-2" style = {{backgroundColor: 'orange' , width : '30px' , height : '30px '}} onClick={()=>{props.changeMode('orange')}}></div>

        {/* <button className="btn btn-primary  rounded-circle mx-2" onClick={()=>props.changeMode('red')} style = {{backgroundColor : 'red'}}></button>
        <button className="btn btn-primary  rounded-circle mx-2" onClick={()=>props.changeMode('blue')} style = {{backgroundColor : 'blue'}}></button>
        <button className="btn btn-primary  rounded-circle mx-2" onClick={()=>props.changeMode('green')} style = {{backgroundColor : 'green'}}></button>
          <button className="btn btn-primary  rounded-circle mx-2" onClick={()=>props.changeMode('orange')} style = {{backgroundColor : 'orange'}}></button> */}
          <strong className = {` text-${props.mode==='light'?'dark':'light'}`} >Choose BackGround Theme</strong>
        </div>
      {/* <div className = {`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className = "form-check-input" type="checkbox" onClick={props.changeMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className = "form-check-label" htmlFor="flexSwitchCheckDefault" >DarkMode</label> 
</div> */}
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

// Navbar.propTypes = {
//     Title : PropTypes.string, 
//     about : PropTypes.string
// }

// Navbar.defaultProps = {
//     Title: "Home"
// };

