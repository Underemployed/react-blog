import { useEffect, useState } from "react";
import BlogList from "./blogList";
import useFetch from "./useFetch";
const Home = () => {
    // order not matter if name same in destructuring
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");


    return ( 
        <div className="home">
            {error && <h2>{error}</h2>}
            {isPending && <h2>Loading...</h2>}
            {/*  logical and evaluates left first. if its false it doesnt check right */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}         
        </div>

     );
}
 
export default Home;