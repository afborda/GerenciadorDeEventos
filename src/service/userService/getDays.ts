import api from "../axiosConfig";

const getWeekDays = async () => {
  const weekDays = await api.get("week_days");
  return weekDays.data;
};

export default getWeekDays;
