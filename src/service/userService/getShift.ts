import api from "../axiosConfig";

const GetShift = async () => {
  const shift = await api.get("day_shift");
  return shift.data;
};

export default GetShift;
