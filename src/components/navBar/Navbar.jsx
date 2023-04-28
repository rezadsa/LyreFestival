import styled from './navbar.module.css';
import {Link} from 'react-router-dom';
function NavBar(props) {
    
    
    
    return (
        <div className={styled.headerWraper}>
            <div className="container">
      <div className={styled.header}>
        <h3>{props.title}</h3>
        <ul>
            <li><Link to='/'>Articles List</Link></li>
            <li><Link to='/create'>Create New</Link></li>
            <li><Link to='/about' >About</Link></li>
        </ul>
      </div>
      </div>
        </div>
    );
  }

  export default NavBar