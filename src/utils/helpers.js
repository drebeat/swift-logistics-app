export const titleCase = (str) => {
  if (str === undefined || !str) {
    return str;
  }

  const words = str?.split(" ");

  const result = words.map((word) => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  });

  // const result = words.map(word => {
  //   return word[0].toUpperCase() + word.substring(1)
  // })

  return result.join(" ");
};

export const timestampToYYYYMMDD = (createdAt) => {
  const myDate = new Date(createdAt);
  let day = myDate.getDate();
  let month = myDate.getMonth() + 1;

  if (day <= 9) {
    day = `0${day}`;
  }

  if (month <= 9) {
    month = `0${month}`;
  }

  return `${myDate.getFullYear()}/${month}/${day}`;
};

export const timestampToDate = (createdAt) => {
  const myDate = new Date(createdAt);
  const dateSuffix = getDateSuffix(myDate.getDate());
  const month = myDate.toLocaleString("default", { month: "short" });

  return `${myDate.getDate()}${dateSuffix} ${month} ${myDate.getFullYear()}`;
};

const getDateSuffix = (day) => {
  switch (day) {
    case 1:
    case 21:
    case 31:
      return "st";
    case 2:
    case 22:
      return "nd";
    case 3:
    case 23:
      return "rd";
    default:
      return "th";
  }
};
