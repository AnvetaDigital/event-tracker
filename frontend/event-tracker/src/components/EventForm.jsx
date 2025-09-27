import { useState } from "react";
import { createEvent } from "../api/eventApi";

const EventForm = ({ refresh }) => {
  const [form, setForm] = useState({
    title: "",
    dateTime: "",
    location: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();

    if (!form.title || !form.dateTime || !form.location) {
      setMessage("Please fill in all fields");
      return;
    }
    try {
      await createEvent(form);
      setForm({ title: "", dateTime: "", location: "", description: "" });
      setMessage("Event added successfully!");

      setTimeout(() => {
        setMessage("");
        refresh();
      }, 2000);
    } catch (err) {
      console.error("Failed to create event", err);
      setMessage("Failed to create event");
      setTimeout(() => setMessage(""), 2000); 
    }
  };

  return (
    <form className="event-form">
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="datetime-local"
        value={form.dateTime}
        onChange={(e) => setForm({ ...form, dateTime: e.target.value })}
      />
      <input
        placeholder="Location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />
      <input
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />{" "}
      <button onClick={handleSave}>Add Event</button>
      {message && (
        <p
          className={
            message.toLowerCase().includes("success")
              ? "success-msg"
              : "error-msg"
          }
        >
          {message}
        </p>
      )}
    </form>
  );
};
export default EventForm;
