import axios from 'axios';

const getBaseUrl = () => {
  switch (window.location.hostname) {
    default:
      return '';
  }
};

const instance = axios.create({
  baseURL: getBaseUrl(),
});

export default instance;
