export const parseData = ({ data, column }) => {
  const parseRecord = record =>
    Object.fromEntries(column.map(({ name }, index) => [name, record[index]]));
  return data.map(parseRecord);
};
