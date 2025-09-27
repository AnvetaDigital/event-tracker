const AUTH_URL = "http://localhost:5000/api/auth";

export const registerUser = async (data) => {
  try {
    let response = await fetch(`${AUTH_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Registration Failed");
    }
    return await response.json();
  } catch (err) {
    console.log(`Error getting while registraion: ${err}`);
    throw err;
  }
};

export const loginUser = async (data) => {
  try {
    const response = await fetch(`${AUTH_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    return await response.json();
  } catch (error) {
    console.log("Error logging in:", error);
    throw error;
  }
};
