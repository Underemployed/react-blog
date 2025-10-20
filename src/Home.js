import { useState } from "react";

const Home = () => {

    let [name, setName] = useState("mario");
    
    let [age, setAge] = useState(18);

    function handleClick() {
        name = (name === "me") ? "Escape" : "me";
        setName(name)
        console.log("Name changed to ", name)

        setAge(age+10)
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is { age} old</p>
            <button onClick={handleClick}>Update name</button>
        </div>
     );
}
 
export default Home;