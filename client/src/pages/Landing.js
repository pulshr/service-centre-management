import main from '../assets/images/main.svg'
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from '../components';
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Service Centre<span> Management</span> App</h1>
          <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="service center management logo landing" className="img main-img"></img>
      </div>
    </Wrapper>
  )
}

export default Landing
