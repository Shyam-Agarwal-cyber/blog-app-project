import React, { useState } from 'react'
import Header from './Header'

const NewBlog = () => {


    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [success, setSuccess] = useState(false);

    const formSubmit = async (e) => {
        e.preventDefault()

        const blog = { title, category, likes: 0, content }

        fetch("http://localhost:3500/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        }).then(() => {
            setSuccess(true)
            console.log("New Blog", blog)
        }).catch((err) => {
            console.log(err)
        })

        setContent("")
        setCategory("")
        setTitle("")

    }

    return (
        <div>
            <Header />
            <div className='new-container'>
                {success ? <p style={{ "color": "green", "fontWeight": "bold", "marginBottom": "18px" }}>New Blog Created Successfully !!!</p> : <></>}
                <h1 style={{ "marginBottom": "28px" }}>New Blog</h1>
                <div className='new-form'>
                    <form onSubmit={formSubmit} method='POST' action="">
                        <label htmlFor="title">Title</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Title" />

                        <label htmlFor="category">Category</label>
                        <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" />

                        <label htmlFor="content">Content</label>
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} name="content" rows="8" cols="50" placeholder='Content' />

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewBlog