function getDayName(dateString) {
  const date = new Date(dateString);

  const options = {
    weekday: "long"
  };

  return Intl.DateTimeFormat("en-US", options).format(date);
}

console.log(getDayName("10/11/2009")); // => Sunday
