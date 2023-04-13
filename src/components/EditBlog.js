import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import { useSelector } from 'react-redux';
import BlogContext from '../context/blogContext';

const EditBlog = () => {

    const params = useParams()
    const editId = params.editId

    const { blogData } = useContext(BlogContext)

    const [editTitle, setEditTitle] = useState(blogData.title);
    const [editCategory, setEditCategory] = useState(blogData.category);
    const [editContent, setEditContent] = useState(blogData.content);
    const [success, setSuccess] = useState(false);

    const reduxLikes = useSelector(state => state.likes)

    const formSubmit = async (e) => {
        e.preventDefault()

        const editBlog = {
            title: editTitle,
            category: editCategory,
            content: editContent,
            likes: reduxLikes
        }

        fetch(`http://localhost:3500/blogs/${editId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editBlog)
        }).then(() => {
            setSuccess(true)
            console.log("Edited Blog", editBlog)
        }).catch((err) => {
            console.log(err)
        })

        setEditContent("")
        setEditCategory("")
        setEditTitle("")

    }

    return (
        <div>
            <Header />
            <div className='new-container'>
                {success ? <p style={{ "color": "green", "fontWeight": "bold", "marginBottom": "18px" }}>Blog #{editId} Edited Successfully !!!</p> : <></>}
                <h1 style={{ "marginBottom": "28px" }}>Edit Blog #{editId}</h1>
                <div className='new-form'>
                    <form onSubmit={formSubmit} method='POST' action="">
                        <label htmlFor="title">Title</label>
                        <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} type="text" name="title" placeholder="Title" />

                        <label htmlFor="category">Category</label>
                        <input value={editCategory} onChange={(e) => setEditCategory(e.target.value)} type="text" name="category" placeholder="Category" />

                        <label htmlFor="content">Content</label>
                        <textarea value={editContent} onChange={(e) => setEditContent(e.target.value)} name="content" rows="8" cols="50" placeholder='Content' />

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditBlog