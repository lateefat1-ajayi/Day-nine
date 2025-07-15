const STORAGE_KEY = 'shoppingItems';

export const saveToLocalStorage = (items) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

export const loadFromLocalStorage = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};
