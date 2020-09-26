import api from "../axiosConfig";

const RegisterUser = async (newUser: any) => {
  const response = await api.post("user-add", newUser, {
    params: {
      type: "json",
    },
  });

  return response.data.data;
};

export default RegisterUser;
