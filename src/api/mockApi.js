// src/mockApi.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Create an axios instance
const axiosInstance = axios.create();

// Create a mock adapter for the axios instance
const mock = new MockAdapter(axiosInstance);

// Mock users database
const users = [];

// Mock registration endpoint
mock.onPost('/register').reply(config => {
  const { email, password } = JSON.parse(config.data);
  if (users.find(user => user.email === email)) {
    return [400, { message: 'User already exists' }];
  }
  users.push({ email, password });
  return [200, { message: 'Registered successfully' }];
});

// Mock login endpoint
mock.onPost('/login').reply(config => {
  const { email, password } = JSON.parse(config.data);
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    return [200, { message: 'Logged in successfully' }];
  }
  return [401, { message: 'Invalid email or password' }];
});

export default axiosInstance;