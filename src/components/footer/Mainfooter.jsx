import styled from './mainfooter.module.css'
function Footer(){
    return(
      <div className={styled.footerWraper}>
        <div className='container'>
        <div className={styled.main}>
        <h3>footer</h3>
        <ul>
            <li><a href="#5">Face Book</a></li>
            <li><a href="#6">Instagram</a></li>
            <li><a href="#7">Whats App</a></li>
            <li><a href="#8">Telegram</a></li>
        </ul>
        </div>
       </div>
      </div>
    );
  }

  export default Footer;