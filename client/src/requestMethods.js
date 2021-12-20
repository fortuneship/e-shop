import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjg3ODFmNzQxMDJkZjg1ODVjMDdhYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDAxMTg0NiwiZXhwIjoxNjQwMDE1NDQ2fQ.NfldjE7uDH1aoTmnx5pzIL17DSiLo4Q68bYhAoXpgPs";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
