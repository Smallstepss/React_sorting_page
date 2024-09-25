import React from 'react';

function Articles({articles}) {

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
               {articles.map((article)=>(

                <tr  key={article.id}>
                    <td >{article.title}</td>
                    <td >{article.upvotes}</td>
                    <td >{article.date}</td>
                </tr>

               ))}
                

                </tbody>
            </table>
        </div>
    );

}

export default Articles;
