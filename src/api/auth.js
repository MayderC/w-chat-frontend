const URL = "http://localhost:3001/api/auth";

export const login = async (user) => {
  try {
    const response = await fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const register = async (user) => {
  try {
    const response = await fetch(`${URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const verify = async (token) => {
  try {
    const response = await fetch(`${URL}/verify`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};
