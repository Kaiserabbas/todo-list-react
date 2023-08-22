const LocalStorage = {
  get: (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

export default LocalStorage;
