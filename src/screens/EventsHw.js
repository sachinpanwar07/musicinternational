import React from "react";
import imagePath from "../constants/imagePath";
import "../Style/eventsHw.css"; 

const EventsHw = ({ onSeeMoreClick }) => {
  const upcomingEvents = [
    { id: 1, title: "Event 1", image: imagePath.ic_event1 },
    { id: 2, title: "Event 2", image: imagePath.ic_event2 },
    { id: 3, title: "Event 3", image: imagePath.ic_event3 },
    { id: 4, title: "Event 4", image: imagePath.ic_event5 },
    { id: 5, title: "Event 5", image: imagePath.ic_event6 },
    { id: 6, title: "Event 4", image: imagePath.ic_event5 },
    { id: 7, title: "Event 5", image: imagePath.ic_event6 },
  ];

  const renderEventList = (events) => (
    <div className="eventsHw-list">
      {events.map((event) => (
        <div key={event.id} className="eventsHw-item">
          <img src={event.image} alt={event.title} className="eventsHw-image" />
          <h4 className="eventsHw-title">{event.title}</h4>
        </div>
      ))}
    </div>
  );

  return (
    <div className="eventsHw">
      <h3>Upcoming Events</h3>
      {renderEventList(upcomingEvents)}
      <button className="ucsee-more-button" onClick={onSeeMoreClick}>
        See More
      </button>
    </div>

  );
};

export default EventsHw;