import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Article(props) {

    const [article,setArticle] = useState([]);

    useEffect(() => {
        const initTaskBoard = ()=>{        
            axios.get('http://localhost:8080/taskBoard')
            .then(
                (response)=>setArticle(response.data)
            )
            .catch(
                (err)=>console.log(err)
            )
        }
        initTaskBoard()
        return () => {
        }
    }, [])

    return (
        <div id="main">
            <section id="one" className="tiles">
                {article.map((item)=>{
                    let articleTemp = 
                        (<article>
                            <span className="image">
                                <img src="images/pic01.jpg" alt="" />
                            </span>
                            <header className="major">
                                <h3 className="text-white"><Link to={`/note/${item._id}`} className="link">{item.title}</Link></h3>
                                <p className="text-white">{item.description}</p>
                            </header>
                        </article>);
                    return articleTemp;
                })}
            </section>
        </div>
    )
}

export default Article
