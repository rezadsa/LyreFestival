import NavBar from "../../components/navBar/Navbar";
import Mainfooter from "../../components/footer/Mainfooter";
import styled from "./createNew.module.css";
import { useState } from "react";
import TextInput from "../../components/inputs/text/TextInput";
import DateInput from "../../components/inputs/date/DateInput";
import UrlInput from "../../components/inputs/urlInput/UrlInput";
import axios from "axios";

function CreateNew() {
  const [article, setArticle] = useState({
    title: "",
    text: "",
    BOD: "",
    imageUrl: "",
    bio: "",
  });
  const handelChangeArticle = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handelChangeBio = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      bio: e.target.value,
    }));
  };

  const  handleCreateNew=()=>{
  
axios.post('http://localhost:3000/articles',{

id:Math.floor(Math.random()*(50-10)+9) ,
      imageUrl: article.imageUrl,
      title:article.title,
      text: article.text,
      DOB: article.BOD,
      bio: article.bio
})
  };
  return (
    <>
      <NavBar title="Reza Safarkhani" />
      <div className={styled.createNewPage}>
        <div className="container">
          <h1>Create New</h1>
          <div className={styled.line}></div>
          <div className={styled.inputWrapper}>
            <DateInput
              caption="Event Date"
              name="text"
              handelChange={handelChangeArticle}
            />
            <div className={styled.line}></div>
            <TextInput
              name="title"
              placeholder="Full Name"
              handelChange={handelChangeArticle}
            />
            <UrlInput
              name="imageUrl"
              placeholder="Image URL (http://sample.com/...)"
              handelChange={handelChangeArticle}
            />
            <DateInput
              caption="BirthDay"
              name="BOD"
              handelChange={handelChangeArticle}
            />
            <textarea
              name="bio"
              id=""
              placeholder="Bioghraphy"
              cols="30"
              onChange={handelChangeBio}
            ></textarea>
          </div>
          <div className={styled.buttonHolder}>
            <button onClick={handleCreateNew}>Send Event</button>
          </div>
        </div>
      </div>
      <Mainfooter />
    </>
  );
}

export default CreateNew;
