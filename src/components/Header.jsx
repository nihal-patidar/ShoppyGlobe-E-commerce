
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header(){

    const items = useSelector((state)=>state.cart.items);
    return (
        <>
        <header >
            <h1 >ShoppyGlobe</h1>

            <nav>
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart {items.length}</Link>
            </nav>
        </header>
    </>
    )
}

export default Header ;