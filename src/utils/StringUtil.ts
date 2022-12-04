export const stringFormatter = (value: string | undefined) => {
  return value !== undefined && value.length >= 40 ? `${value.substring(0, 39)}...` : value;
};
