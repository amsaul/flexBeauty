import { Link } from "react-router-dom"
function Home() {
    return(
        <>
            <div className="body-wrapper hero">
                <div className="left-side">
                    <div className="heading">
                        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit earum in placeat,  quas voluptatibus dolorem ut quibusdam id.</h2>
                    </div>
                    <button className="css-btn">chat</button>
                    <button className="css-btn2" > <Link className="link" to="/BookingPage">book</Link></button>
                </div>
                <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNraW4lMjBjYXJlfGVufDB8fDB8fHww" alt="" />
            </div>

            <div className="services">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h2>services</h2>
                <div className="services-card-container">
                    <div className="service-card">
                        <div className="image">
                            <img src="https://www.byrdie.com/thmb/zrOyPicmh4MtLnc325M4CSr7k98=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/summerwedding8-753f4b93a8284e6fbee814a30886de8c.png" alt="image" />
                        </div>
                        <div className="card-title">
                            <h2>wedding</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad enim tempore!</p>
                            <button className="card-btn"> <Link to="/BookingPage" className="link">Book</Link> </button>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="image">
                            <img src="https://www.byrdie.com/thmb/zrOyPicmh4MtLnc325M4CSr7k98=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/summerwedding8-753f4b93a8284e6fbee814a30886de8c.png" alt="image" />
                        </div>
                        <div className="card-title">
                            <h2>wedding</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad enim tempore!</p>
                            <button className="card-btn"> <Link to="/BookingPage" className="link">Book</Link> </button>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="image">
                            <img src="https://www.byrdie.com/thmb/zrOyPicmh4MtLnc325M4CSr7k98=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/summerwedding8-753f4b93a8284e6fbee814a30886de8c.png" alt="image" />
                        </div>
                        <div className="card-title">
                            <h2>wedding</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad enim tempore!</p>
                            <button className="card-btn"> <Link to="/BookingPage" className="link">Book</Link> </button>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="image">
                            <img src="https://www.byrdie.com/thmb/zrOyPicmh4MtLnc325M4CSr7k98=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/summerwedding8-753f4b93a8284e6fbee814a30886de8c.png" alt="image" />
                        </div>
                        <div className="card-title">
                            <h2>wedding</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ad enim tempore!</p>
                            <button className="card-btn"> <Link to="/BookingPage" className="link">Book</Link> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home