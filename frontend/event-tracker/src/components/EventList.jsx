const EventList = ({ events }) => {
  return (
    <div className="event-list">
      {events.map((e) => (
        <div
          key={e._id}
          className={`event-card ${
            new Date(e.dateTime) < new Date() ? "past" : "upcoming"
          }`}
        >
          <h3 className="event-title">{e.title}</h3>
          <p className="event-date">
            📅{" "}
            {new Date(e.dateTime).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
          <p className="event-location">📍 {e.location}</p>
          {e.description && <p className="event-desc">📝 {e.description}</p>}
        </div>
      ))}
    </div>
  );
};
export default EventList;
