
const Navbar = () => {
    const handleClick = () => {;
        console.log("u bored")
    }

    const sayHiTo = (name,e) => {
        console.log(
            "Hi " + name + e.target
        );
    }
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" className="btn">New Blog</a>

                <button onClick={handleClick} className="btn">
                        click me
                </button>
                <button onClick={(e) => {
                    sayHiTo("Bitch",e)
                }} className="btn">
                        im u
                </button>
            </div>
        </nav>
    );
}

export default Navbar;