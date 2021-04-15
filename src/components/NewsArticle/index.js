import React from "react";
import './style.css';

export const NewsArticle = ({data}) => {
    return data ? (
        <article className={'news-article'}>
            <h2 className={'news-article-title'}>{data.title}</h2>
            <p className={'news-article-description'}>{data.description}</p>
            <a href={data.url}>Read more</a>
        </article>
    ) : null;
}