import React from 'react';
import ArticalContentArray from './artical-contents';

const ArticalPage = ({match}) => {
    const name = match.params.name;
    const artical = ArticalContentArray.find(a => a.name === name);
    if(!artical)
    return <h1>Artical Doesn't Exist</h1>

    return(
        <>
        <h2>{artical.title}</h2>
        <br/>
        {artical.content.map( (paragraph, key) => 
            <p key={key}>{paragraph}</p>
            )}
        </>
    )
}

export default ArticalPage;