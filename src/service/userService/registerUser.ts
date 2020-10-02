import api from "../axiosConfig";
import { INewUser } from "../../model/INewUser";

const RegisterUser = async (newUser: INewUser) => {
  const response = await api.post("users", newUser);
  return response.data;
};

export default RegisterUser;
