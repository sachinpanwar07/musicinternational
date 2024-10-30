import React from 'react';
import Slider from 'react-slick';
import imagePath from '../constants/imagePath';
import '../Style/eventScreen.css'
import SearchBar from "../Components/SearchBar";
import Footer from '../Components/Footer';
import ContactUs from '../screens/ContactUs';

const EventScreen = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const upcomingEvents = [
    { id: 1, title: "Event 1", image: imagePath.ic_event1 },
    { id: 2, title: "Event 2", image: imagePath.ic_event2 },
    { id: 3, title: "Event 3", image: imagePath.ic_event3 },
    { id: 4, title: "Event 4", image: imagePath.ic_event5 },
    { id: 5, title: "Event 5", image: imagePath.ic_event6 },
  ];

  const annualEvents = [
    { id: 1, title: "Annual Event 1", image: imagePath.ic_event3 },
    { id: 2, title: "Annual Event 2", image: imagePath.ic_event6 },
    { id: 3, title: "Annual Event 3", image: imagePath.ic_event2 },
    { id: 4, title: "Annual Event 4", image: imagePath.ic_event4 },
    { id: 5, title: "Annual Event 5", image: imagePath.ic_event7 },
    { id: 6, title: "Annual Event 5", image: imagePath.ic_event5 },
  ];

  const pastEvents = [
    { id: 1, title: "Past Event 1", image: imagePath.ic_event6 },
    { id: 2, title: "Past Event 2", image: imagePath.ic_post2 },
    { id: 3, title: "Past Event 3", image: imagePath.ic_event3 },
    { id: 4, title: "Past Event 4", image: imagePath.ic_event5 },
    { id: 5, title: "Past Event 5", image: imagePath.ic_event1 },
  ];
  const renderEventList = (events) => (
    <div className="event-list">
      {events.map((event) => (
        <div key={event.id} className="event-item">
          <img src={event.image} alt={event.title} className="event-image" />
          <h4 class="carousel-title">{event.title}</h4>
        </div>
      ))}
    </div>
  );
  return (
    <div className="event-screen">
      <div style={{ marginTop: "1%", marginRight: "1%"}}>
        <SearchBar />
      </div>
      <Slider {...carouselSettings}>
        {upcomingEvents.slice(0, 3).map((event) => (
          <div key={event.id} className="carousel-slide">
            <h2 class="carousel-title">{event.title}</h2>
            <img src={event.image} alt={event.title} className="carousel-image" />

          </div>
        ))}
      </Slider>

      <section className="event-section">
        <h3>Upcoming Events</h3>
        {renderEventList(upcomingEvents)}
      </section>

      <section className="event-section">
        <h3>Annual Events</h3>
        {renderEventList(annualEvents)}
      </section>

      <section className="event-section">
        <h3>Past Events</h3>
        {renderEventList(pastEvents)}
      </section>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default EventScreen;