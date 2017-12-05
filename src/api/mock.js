import data from './data.json';

const TIMEOUT = 100;

export default {
  getData: timeout => setTimeout(() => data, timeout || TIMEOUT)
};