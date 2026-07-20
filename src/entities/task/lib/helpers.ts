export const formatDisplayDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  return [day, month, year].join("/");
};
