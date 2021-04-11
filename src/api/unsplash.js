import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID wwYM7P_TAAf4SVbFpEwoO40SlBCWwJi2W5m_35b9-1o",
  },
});
