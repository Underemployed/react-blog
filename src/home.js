import { useState } from "react";



const Home = () => {    
    // let name = "baaaaaaaaaaaaaaaa";
    // const handleClick = () => {
    //     name = (name === "luigi") ? "baaaa" : "luigi"
    //     console.log(name)
    // }
    
    const [name, setName] = useState("mario");
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName("luigi")
        setAge(31)
    }


    
    return (
        <div className="home">
            <h2>Homepage</h2>
            <h2>{name} is {age}yrs old</h2>
            <button onClick={
                handleClick
            }>CLick me</button>
        </div>
    );
}

export default Home;