import { Link } from "react-router-dom"

function Header() {
    return(
        <>
            <div className="container">
                <div className="wrapper">
                    <div className="logo">flex<span>Beauty</span></div>
                    <div className="">
                        <Link className="links" to="/home">home</Link>
                        <Link className="links" to="/Products">Products</Link>
                        <Link className="links" to="/BookingPage">Appointment</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header