export const capitalize = (word: string) => {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
};

export const parseLabel = (label: string) => {
  if (!label) return '';
  return label.split('_').map(capitalize).join(' ');
};
