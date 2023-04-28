import { useEffect, useState } from "react";
import Navbar from "../../components/navBar/Navbar";
import Mainfooter from "../../components/footer/Mainfooter";
import styled from "./home.module.css";
import Article from "../../components/article/Article";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setArticles(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className={styled.homeWraper}>
      <Navbar title="Reza Safarkhani" />

      <div className="container">
        <h2>New Articles</h2>

        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styled.articles}>
            {articles.map((resualt) => (
              <Link to={`/article/${resualt.id}`}>
                <Article key={resualt.id} article={resualt} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <Mainfooter />
    </div>
  );
}

export default Home;
