const baseUrl = 'https://reqres.in/api/';
export default {
  usersUrl: baseUrl + 'users?per_page=10',
  fetchOptions: {
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  }
};