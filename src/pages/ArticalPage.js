import React from 'react';

const ArticalPage = ({match}) => {
    const name = match.params.name;
    return(
        <>
        <h2>Artical Page name is {name}</h2>
        </>
    )
}

export default ArticalPage;