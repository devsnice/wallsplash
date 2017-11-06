/*eslint no-restricted-globals: ["error", "event", "fdescribe"]*/
const storageService = {
  set: (key, value) => {
    return window.localStorage.setItem(key, value);
  },
  get: key => {
    return window.localStorage.getItem(key);
  }
};

export default storageService;
