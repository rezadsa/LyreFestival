import NavBar from "../../components/navBar/Navbar";
import Mainfooter from "../../components/footer/Mainfooter";
import styled from "./articlePage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";

function ArticlePage() {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((resualt) => {
        setArticle(resualt.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
      
        {isLoading ? (
          <Spinner />
        ) : (
            <div className={styled.content}>
            <h1>{article.title}</h1>
            <h2>{article.text}</h2>
            <img src={article.imageUrl} alt="" />
            <h3>{article.DOB}</h3>
            <p>{article.bio}</p>
            </div>
        )}        
        
      </div>
      <Mainfooter />
    </>
  );
}

export default ArticlePage;
