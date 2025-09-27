import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchEvents } from "../api/eventApi";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false); 
  
  const navigate = useNavigate();

  const loadEvents = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchEvents(filter);
      setEvents(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, [filter]);

   const handleLogout = () => {
     localStorage.removeItem("token");
     localStorage.removeItem("user");
     navigate("/"); 
  };
  
  return (
    <div style={{ padding: "1rem" }}>
      <h2 className="dashboard-title">Your Events</h2>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          onClick={() => setFilter("")}
          className={filter === "" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("upcoming")}
          className={filter === "upcoming" ? "active" : ""}
        >
          Upcoming
        </button>
        <button
          onClick={() => setFilter("past")}
          className={filter === "past" ? "active" : ""}
        >
          Past
        </button>
      </div>

      {/* Toggle Add Event Form */}
      <div className="add-event-toggle">
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "➖ Cancel" : "➕ Add Event"}
        </button>
      </div>

      {showForm && <EventForm refresh={loadEvents} />}

      {/* Events list */}
      {loading && <p>Loading events...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && events.length === 0 && (
        <p className="empty-msg">
          🎉 Welcome! You don’t have any events yet. Click{" "}
          <strong>Add Event</strong> to get started.
        </p>
      )}
      {!loading && events.length > 0 && <EventList events={events} />}
    </div>
  );
};

export default Dashboard;
