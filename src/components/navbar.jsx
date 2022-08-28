
import { Link } from "react-router-dom";
function Navbar() {
    return (
 
        <nav class="navbar navbar-expand-lg bg-secondary">
            <div class="one container-fluid ">
                
                <a className="navbar-brand text-white" href="#">Navbar</a>
              
                <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                        <Link to="/shop"><a class=" links nav-link active text-white" aria-current="page" >Shop</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/counter"><a class=" links nav-link active text-white"aria-current="page">Counter</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/aboutus"><a class=" links nav-link active text-white" aria-current="page">About us</a></Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/signup"><a class=" links nav-link active text-white" aria-current="page">SignUp</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  
    );
}

export default Navbar;