import styled from './article.module.css'
function Article(props){
    return(
        <div className={styled.articleWraper}>
            <img src={props.article.imageUrl} className={styled.articleImg} alt="Article pic" srcset='' />
            <h3>{props.article.title}</h3>
            <p>{props.article.text} </p>
           

        </div>
    );
}

export default Article;