import { useEffect, useState } from "react";
import BlogList from "./blogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);

    // can be used to fetch data
    // npx json-server --watch data/db.json --port 8000
    useEffect(() => {
        console.log("Runs when dom changes?");
        fetch("http://localhost:8000/blogs").then(
            (response) => response.json())
            .then((data) => {
                console.log(data);
                setBlogs(data);
            })
        // dont change variables  state
        // state change -> dom change -> call useeffect -> state change
        // loop dont update state here
    },[]) 
    // dependency array variable tracker 
    //  only runs once

    return ( 
        <div className="home">
            {/*  logical and evaluates left first. if its false it doesnt check right */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}         
        </div>

     );
}
 
export default Home;