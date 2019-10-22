import axios from 'axios';

const axiosWithAuth = () => {
  const cookie = localStorage.get('cookie');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${cookie}`
    }
  })
}

export default axiosWithAuth;