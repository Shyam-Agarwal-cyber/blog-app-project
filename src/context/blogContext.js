import { createContext, useState } from "react";

const BlogContext = createContext()

export function BlogProvider({ children }) {

    const [blogData, setBlogData] = useState()

    const fetchBlog = (id) => {
        fetch(`http://localhost:3500/blogs/${id}`).then((res) => {
            return res.json();
        }).then((data) => {
            setBlogData(data)
            console.log(data)
        }).catch((err) => console.log(err))
    }


    return (
        <BlogContext.Provider value={{ blogData, fetchBlog }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext
