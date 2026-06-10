
import { Link } from "react-router-dom";

function Header(){
    return (
        <>
        <header >
            <h1 >ShoppyGlobe</h1>

            <nav>
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart</Link>
            </nav>
        </header>
    </>
    )
}

export default Header ;