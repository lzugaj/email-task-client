export const dateFormatter = (value: string) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = formatter(date.getMonth() + 1);
  const day = formatter(date.getDate());
  const hours = formatter(date.getHours());
  const minutes = formatter(date.getMinutes());

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};

function formatter(givenNumber: number) {
  return givenNumber >= 10 ? givenNumber : `0${givenNumber}`;
}
