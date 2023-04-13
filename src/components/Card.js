import React from 'react'
import { Link } from "react-router-dom";

const Card = (props) => {


    return (
        <div>
            <div class="card">
                <div class="card-conatimer">
                    <h1 style={{ margin: "10px" }} id='blog-title'>{props.title}</h1>
                    <h3 style={{ margin: "10px" }} id='blog-cat'>{props.category}</h3>
                    <p style={{ margin: "10px" }}><em><b>{props.likes}</b> people liked this!!</em></p>
                    <Link to={`/blogs/${props.id}`}>
                        <button style={{ margin: "10px" }} className="button-3 button-read">Read More</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Card