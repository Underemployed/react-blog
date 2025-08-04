import "./index.css"
const Navbar = () => {
    return ( 
        <nav className="nav">
            <div className="title">
                <h1>
                    AniNews
                </h1>
            </div>
            <div className="nav__links">
                <a href="/">Home</a>
                <a href="/create"> Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;