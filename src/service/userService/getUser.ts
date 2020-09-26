import api from "../axiosConfig";

const User = async () => {
  const user = await api.get("user", {
    params: {
      type: "json",
    },
  });

  return user.data.data;
};

export default User;
