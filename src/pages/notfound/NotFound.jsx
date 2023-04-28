import NavBar from '../../components/navBar/Navbar';
import Mainfooter from '../../components/footer/Mainfooter';
import styled from './notFound.module.css';

function NotFound(){
return(
    <>
    <NavBar title='Not Found'/>
    

    <div className={styled.notFound}>
    <h1>404</h1>
    <h2>PAGE NOT FOUND</h2>
    </div>


<Mainfooter />

</>
)
}

export default NotFound;