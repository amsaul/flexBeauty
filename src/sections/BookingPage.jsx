import React from "react"
import '../../src/assets/styles/booking.css'
function BookingPage() {
    return(
        <div className="booking-container"> 
            <div className="bookingform">
                <h2>book appointment</h2>
                <form action="">
                    <label> name </label>
                    <input type="text" placeholder="enter your name" />
                    <label> email </label>
                    <input type="email" placeholder="enter email" />
                    <label> phone number </label>
                    <input type="text" placeholder="enter your phone number" />
                    <label> message </label>
                    <textarea type="text-area" placeholder="enter text" />
                    <button>send</button>
                </form>
            </div>
        </div>
    )
}

export default BookingPage