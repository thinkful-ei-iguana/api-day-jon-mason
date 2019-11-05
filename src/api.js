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
  return fetch (`${BASE_URL}/items`);
   
  
  // return Promise.resolve('A successful response!');
};

function updateItem(id, updateData){
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(updateData),
  });
}


export default {
  getItems,
  createItem,
  updateItem
};
