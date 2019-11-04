const BASE_URL = 'https://thinkful-list-api.herokuapp.com/mason';

function createItem(name){
  let newItem = JSON.stringify({
    name, 
  });
  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: newItem
  });
}

const getItems = function () {
  return fetch (`${BASE_URL}/items`)
    .then(response => response.json());
  
  // return Promise.resolve('A successful response!');
};

export default {
  getItems,
  createItem
};