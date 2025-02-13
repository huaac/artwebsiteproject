import React from "react";
import './LocationsStudio.css';
import Footer from './Footer';

import santeeLocationInside from "./img/santeelocationinside.jpg";
import referAFriendPicture from "./img/referafriendpicture.jpg";

const LocationsSantee = () => {
  return (
    <div className="locations-studio">
        <div className="title-text">
            <h2>Santee Location</h2>
            <p>Established in 2009</p>
        </div>
        <div className="studio-photo">
            <img src={santeeLocationInside} className="studio-pic"></img>
        </div>
        <div className="top-content">
            <h4>We offer a free introductory lesson to students ages 5-17!</h4>
            <p>Call us today to schedule your first lesson!</p>
        </div>
        <div className='line-container'>
            <div className='line'></div>
        </div>
        <div className="details">
            <div className="detail-text">
                <h2>Details</h2>
            </div>
            <div className="detail-rect">
                <div className="detail-top-rect">
                    <div className="address-text">
                        <h4 className="detail-topic">Address:</h4>
                        <p className="detail-content">9225 Carlton Hill Blvd. Ste. 5</p>
                        <p className="detail-content">Santee, CA 92071</p>
                    </div>
                    <div className="contact-info-text">
                        <h4 className="detail-topic">Contact Information:</h4>
                        <p className="detail-content">(619) 855-2787</p>
                    </div>
                </div>
                <div className="detail-middle-rect">
                    <div className="schedule-text">
                        <h4 className="detail-topic">Schedule:</h4>
                    </div>
                    <div className="schedule-boxes">
                        <div className="schedule-box-index">
                            <p>Monday</p>
                            <h4>3:30 - 4:45 PM</h4>
                            <h4>5:00 - 6:15 PM</h4>
                        </div>
                        <div className="schedule-box-index">
                            <p>Tuesday</p>
                            <h4>2:00 - 3:15 PM</h4>
                            <h4>3:30 - 4:45 PM</h4>
                            <h4>5:00 - 6:15 PM</h4>
                        </div>
                        <div className="schedule-box-index">
                            <p>Wednesday</p>
                            <h4>10:00 - 11:15 AM</h4>
                            <h4>11:30 - 12:45 PM</h4>
                            <h4>3:30 - 4:45 PM</h4>
                            <h4>5:00 - 6:15 PM</h4>
                        </div>
                        <div className="schedule-box-index">
                            <p>Thursday</p>
                            <h4>2:30 - 3:45 PM</h4>
                            <h4>4:00 - 5:15 PM</h4>
                            <h4>5:30 - 6:45 PM</h4>
                        </div>
                        <div className="schedule-box-index">
                            <p>Friday</p>
                            <h4>3:30 - 4:45 PM</h4>
                            <h4>5:00 - 6:15 PM</h4>
                        </div>
                        <div className="schedule-box-index">
                            <p>Saturday</p>
                            <h4>9:00 - 10:15 AM</h4>
                            <h4>10:30 - 11:45 AM</h4>
                            <h4>12:00 - 1:15 PM</h4>
                        </div>
                    </div>
                </div>
                <div className="detail-bottom-rect">
                    <h4>Notes:</h4>
                    <ul>
                        <li>Class time slots are 1 hour and 15 minutes long.</li>
                        <li>The first hour is for art instruction. The last 15 minutes of class is for clean up. Please plan to be at the studio 1 hour after the start of class and students will exit when they are done cleaning up.</li>
                        <li>If you are looking for more information regarding adult classes, please click here.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="refer-a-friend-section">
                <div className="refer-a-friend-content">
                    <div className="refer-a-friend-title-text">
                        <h2>Refer a Friend Program:</h2>
                    </div>
                    <div className="refer-a-friend-content-text">
                        <p>For each family/friend who signs up for at least one month (not including the free art lesson) using your referral, you get a free art lesson!</p>
                        <p style={{fontSize: '15px'}}>(There are no limits to the number of free art lessons you can earn!)</p>
                    </div>
                </div>
                <div className="refer-a-friend-photo">
                    <img src={referAFriendPicture} className="refer-a-friend-pic"></img>
                </div>
            </div>
    </div>
  )
}

export default LocationsSantee