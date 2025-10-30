import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404 - This page doesn't exist</h2>
            <p>Contact if you dont think this a mistake</p>
            <Link exact to="/">Return to home page...</Link>
        </div>
     );
}
 
export default NotFound
