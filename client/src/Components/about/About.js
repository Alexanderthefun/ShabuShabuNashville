import React from "react";
import './About.css'

export const About = () => {
    return (
        <div className="aboutParent">
            <div className="hoursOfOperation">
                <h2>Hours of Operation:</h2>
                <p>Mon-Thurs: 5pm-10pm</p>
                <p>Fri: 5pm-10:30pm</p>
                <p>Sat-Sun: 12pm-10:30pm</p>
                <p className="bold">...::: PLEASE NOTE :::...</p>
                <p> WE STOP SEATING at <br />
                    9PM on SUNDAY-THURSDAY<br />
                    AND 9:30pm Friday-Saturday</p>
                <p>We do this because the dining experience typically <br />
                    takes about a minimum of 45 minutes to an hour. Seating people <br />
                    too late could cause our guests to not enjoy the full experience.</p>
            </div>
            <div className="reservations">
                <h2>Reservations</h2>
                <li>We will take reservations for parties of 6 or more. Otherwise it's first come, first serve.
                if your party is larger than 8 we kindly ask that you call at least 24 hours in advance to ensure we can accommodate your party.</li>
                <li>Parties of 6+ include an 18% gratuity (before tax) on the check at the end of the meal. The option to add an additional tip will be provided.</li>
                <li>Because of limited space, we cannot seat you until your entire party has arrived.
                reservations can be made by calling 615-655-8888 .</li>
                <li>Shabu Shabu is an all-you-can eat style restaurant. To be fair to all patrons, we ask our guests to refrain from exceeding our 2 hour dining limit, which begins when the first guest is sat at the table regardless of wether or not the rest of their party has arrived..</li>
            </div>
            <div>

            </div>
        </div>
    )
}