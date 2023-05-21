import axios from "axios";

axios.defaults.baseURL =
  "https://6468ba5260c8cb9a2cb077de.mockapi.io/api/users";

export async function fetchUsers(page, limit, filter) {
  try {
    if (page && limit) {
      return await axios
        .get(`/?page=${page}&limit=${limit}&followed=${filter}`)
        .then(({ data }) => {
          return data;
        });
    }

    return await axios.get(`/?followed=${filter}`).then(({ data }) => {
      return data;
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateUserInfo(id, body) {
  try {
    await axios.put(`/${id}`, { ...body }).then(({ data }) => {
      return data;
    });
  } catch (error) {
    console.log(error);
  }
}
