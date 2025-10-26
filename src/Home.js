import { useState } from "react";
import BlogList from "./blogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "Wut", body: "Lorem ipsum wtvr", author: "Mario" },
        { id: 2, title: "Why", body: "Another blog body", author: "Luigi" },
        { id: 3, title: "How", body: "Yet another blog post", author: "Yoshi" },
        { id: 4, title: "When", body: "More blog content here", author: "Peach" },
        { id: 5, title: "Where", body: "Final blog post content", author: "Mario" }
    ]);


    const handleDelete = (id) => {
        const newBlogs = blogs.filter((x) => x.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={ blogs} handleDelete={handleDelete} title= "All Blogs"/>
            <BlogList blogs={ blogs.filter((x)=> (x.author === "Mario"))}  title= "Mario's Blogs"/>
        </div>
     );
}
 
export default Home;