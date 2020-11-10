export const inject = (items, sections) => {
  sections
    .sort((a, b) => b.index - a.index)
    .forEach(section => items.splice(section.index, 0, section.content));
  return items;
};
