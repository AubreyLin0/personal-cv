export const ageHandler = () => {
  const birthday = new Date("1991-12-17");

  const today = new Date();

  let age = today.getFullYear() - birthday.getFullYear();

  if (
    today.getMonth() < birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() &&
      today.getDate() < birthday.getDate())
  ) {
    age--;
  }

  return age;
};
