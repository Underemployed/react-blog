const Home = () => {

    const handleClick = () => {
        console.log("fcuk ");
    }

    const handleClickAgain = (name = "wut",e ) => {
        console.log("fcuk", name , e.target);
    }


    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick()}>Click Me</button>
            <button onClick={() => {handleClickAgain()}}>Click Me</button>
            <button onClick={(e) => {handleClickAgain("mario again",e)}}>Click Me Again</button>
        </div>
     );
}
 
export default Home;