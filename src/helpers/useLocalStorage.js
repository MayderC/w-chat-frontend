export const clearLocalStorage = () => {
  localStorage.clear();
};

export const setItemLocalStorage = (item, value) => {
  localStorage.setItem(item, value);
};

export const getToken = () => localStorage.getItem("token");
