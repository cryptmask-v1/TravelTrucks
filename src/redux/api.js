import axios from "axios";

const baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchTrucks = async () => {
  try {
    const response = await axios.get(`${baseURL}/campers`);
    return response.data;
  } catch (error) {
    console.error("Error fetching trucks:", error);
    throw error;
  }
};

export const fetchTruckById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/campers/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching truck by ID:", error);
    throw error;
  }
};
