import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faEdit, faTrash } from '@fortawesome/fontawesome-free-solid'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header'
import { fetchLikes } from '../redux/like/likeAction'
import BlogContext from '../context/blogContext';


const Blog = () => {

    const { blogData } = useContext(BlogContext)
    const { fetchBlog } = useContext(BlogContext)

    const [success, setSuccess] = useState(false);

    const params = useParams()
    const blogId = params.id

    const navigate = useNavigate();

    const reduxLikes = useSelector(state => state.likes)

    const dispatch = useDispatch()

    useEffect(() => {

        fetchBlog(blogId)

        dispatch(fetchLikes(blogId))
        // eslint-disable-next-line
    }, [blogId]);

    const deleteBlog = () => {
        fetch(`http://localhost:3500/blogs/${blogId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(() => {
            navigate('/')
            console.log("Blog Deleted")
        }).catch((err) => {
            console.log(err)
        })
    }

    const likeBlog = () => {
        const updatedLikes = reduxLikes + 1;
        const updatedBlog = {
            title: blogData.title,
            category: blogData.category,
            content: blogData.content,
            likes: updatedLikes
        }

        fetch(`http://localhost:3500/blogs/${blogId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedBlog)
        }).then(() => {
            setSuccess(true)
            console.log("Blog Liked")
        }).catch((err) => {
            console.log(err)
        })
    }




    return (
        <div>
            <Header />
            <div className='blog'>
                <div className='blog-container'>
                    {success ? <p style={{ "color": "green", "fontWeight": "bold", "marginBottom": "18px" }}>Blog Liked Successfully !!!</p> : <></>}
                    {
                        blogData ?
                            <>
                                <p style={{ margin: "10px", fontSize: "64px" }} >Blog #{blogId}</p>
                                <h1 style={{ margin: "10px", textDecoration: "underline" }} id='blog-title'>{blogData.title}</h1>
                                <h3 style={{ margin: "10px" }} id='blog-cat'>{blogData.category}</h3>
                                <p style={{ margin: "10px" }} id='blog-desc'>{blogData.content}</p>
                                <p style={{ margin: "10px" }}><em><b>{reduxLikes}</b> people liked this!!</em></p>
                                <div className='btn-grp'>
                                    <button onClick={likeBlog} style={{ margin: "10px" }} className="button-3 button-like">Like <FontAwesomeIcon icon={faThumbsUp} /></button>
                                    <Link to={`/edit/${blogId}`}>
                                        <button style={{ margin: "10px" }} className="button-3 button-edit">Edit <FontAwesomeIcon icon={faEdit} /></button>
                                    </Link>
                                    <button onClick={deleteBlog} style={{ margin: "10px" }} className="button-3 button-del">Delete <FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                            </>
                            :
                            <p>Loading...</p>
                    }
                </div>
            </div>
        </div>
    )
}



export default Blog