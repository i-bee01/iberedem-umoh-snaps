import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const port = import.meta.env.VITE_PORT;
const apiUrl = `${backendUrl}:${port}`;

const fetchTags = async () => {
  try {
    
    const response = await axios.get(`${apiUrl}/tags`);
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve filters", error);
  }

};

const fetchPhotos = async () => {
  try {
    const response = await axios.get(`${apiUrl}/photos`);
    console.log("api photoData");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve pictures", error);
  }
};

const fetchPhotoById = async (id) => {
  try {
    
    const response = await axios.get(
      `${apiUrl}/photos/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve picture details", error);
  }
};

const fetchComments = async (id) => {
  try {
    
    const response = await axios.get(
      `${apiUrl}/photos/${id}/comments`
    );
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve comments", error);
  }
};

const postComment = async (id, comment) => {
  try {
    
    const response = await axios.post(
      `${apiUrl}/photos/${id}/comments`,
      { name: comment.name, comment: comment.comment }
    );
    return response.data;
  } catch (error) {
    console.error("Unable to submit comment", error);
  }
};

export default {
  fetchTags,
  fetchPhotos,
  fetchPhotoById,
  fetchComments,
  postComment,
};