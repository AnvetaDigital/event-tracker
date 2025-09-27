const CREATE_EVENT_URL = "http://localhost:5000/api/events";
const GET_EVENTS_URL = "http://localhost:5000/api/events/list";

function getAuthHeader() {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export const createEvent = async (eventData) => {
  try {
    let response = await fetch(`${CREATE_EVENT_URL}/create`, {
      method: "POST",
      headers: getAuthHeader(),
      body: JSON.stringify(eventData),
    });
    if (!response.ok) {
      throw new Error("Failed to create event");
    }
    return await response.json();
  } catch (error) {
    console.error(`Error while creating event: ${error}`);
    throw error;
  }
};

export const fetchEvents = async (filter = "") => {
  try {
    let url = GET_EVENTS_URL;
    if (filter) {
      url += `?filter=${filter}`;
    }

    const res = await fetch(url, {
      method: "GET",
      headers: getAuthHeader(),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }

    return await res.json();
  } catch (error) {
    console.error(`Error while fetching events: ${error}`);
    throw error;
  }
};
