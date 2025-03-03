import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
console.log(backendUrl);

const fetchTags = async () => {
  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.get(`${backendUrl}/tags`);
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve filters", error);
  }

};

const fetchPhotos = async () => {
  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.get(`${backendUrl}/photos`);
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve pictures", error);
  }
};

const fetchPhotoById = async (id) => {
  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.get(
      `${backendUrl}/photos/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve picture details", error);
  }
};

const fetchComments = async (id) => {
  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.get(
      `${backendUrl}/photos/${id}/comments`
    );
    return response.data;
  } catch (error) {
    console.error("Unable to retrieve comments", error);
  }
};

const postComment = async (id, comment) => {
  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.post(
      `${backendUrl}/photos/${id}/comments`,
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