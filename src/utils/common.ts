export const capitalize = (word: string) => {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
};

export const parseLabel = (label: string) => {
  if (!label) return '';
  return label.split('_').map(capitalize).join(' ');
};

export const fileToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
