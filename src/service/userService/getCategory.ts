import api from "../axiosConfig";

const GetCategory = async () => {
  const category = await api.get("category");

  return category.data;
};

export default GetCategory;
