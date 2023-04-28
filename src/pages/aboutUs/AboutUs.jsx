import NavBar from '../../components/navBar/Navbar';
import Footer from '../../components/footer/Mainfooter'
import styled  from './aboutUs.module.css';
import ourPhoto from '../../assets/images/image2.png';
function AboutUs(){
return(
<div >
    <NavBar title='Reza'/>
    <div className="container">
        <div className={styled.aboutPage}>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam dolorem tempora ex earum, autem, debitis facilis facere accusantium vitae a accusamus pariatur aut fuga atque. Saepe beatae voluptas blanditiis ratione!
    Magnam officiis ea ratione temporibus amet minus vitae, reiciendis odio deserunt eum est corrupti aperiam possimus laudantium similique quidem ipsum eius porro nesciunt quibusdam, nisi corporis! Rerum odio dolorem consequatur.
    Mollitia quod unde esse, vitae ratione doloremque suscipit, voluptatem dicta nobis ea autem maiores sequi ullam delectus architecto culpa corrupti dignissimos fugit vero vel nesciunt. Fugit iusto ratione maiores atque.
    Laborum nostrum, beatae facere ipsam nesciunt quos sint soluta ut enim fugit in hic corrupti. Nam, quam? Voluptate sapiente voluptatum repudiandae optio porro rerum iusto, eius doloribus, nostrum tempora dolor.
    Dolores id eum, repudiandae qui accusamus natus quod deserunt sit aliquid distinctio porro, blanditiis, quas ad suscipit iure dolore. Molestias molestiae iure illum voluptate nemo fuga quod deserunt, dolorum non.</p>
    
    <img src= {ourPhoto} alt='about photo' />
    
    </div>
    </div>
    <Footer />

</div>
);

}

export default AboutUs;