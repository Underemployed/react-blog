import { useEffect, useState } from "react";
import BlogList from "./blogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "Wut", body: "Lorem ipsum wtvr", author: "Mario" },
        { id: 2, title: "Why", body: "Another blog body", author: "Luigi" },
        { id: 3, title: "How", body: "Yet another blog post", author: "Yoshi" },
        { id: 4, title: "When", body: "More blog content here", author: "Peach" },
        { id: 5, title: "Where", body: "Final blog post content", author: "Mario" }
    ]);

    const [name, setName] = useState("luigi");


    const handleDelete = (id) => {
        const newBlogs = blogs.filter((x) => x.id !== id);
        setBlogs(newBlogs);
    }
    // can be used to fetch data
    // npx json-server --watch data/db.json --port 8000
    useEffect(() => {
        console.log("Runs when dom changes?");
        console.log(name);
        // dont change variables  state
        // state change -> dom change -> call useeffect -> state change
        // loop dont update state here
    },[name]) 
    // dependency array variable tracker 
    //  only runs once

    return ( 
        <div className="home">
            <BlogList blogs={blogs} handleDelete={handleDelete} title="All Blogs" />
            <button onClick={()=>setName("Mario")}>Change Name</button>
            <p>Name: {name}</p>
        </div>

     );
}
 
export default Home;