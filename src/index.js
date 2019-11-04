import $ from 'jquery';
import api from './api';
import store from './store.js';
import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

const main = function () {
  

  
  api.getItems()


    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });

  const item = store.items[0];
  console.log('current name: ' + item.name);
  store.findAndUpdate(item.id, { name: 'foobar' });
  console.log('new name: ' + item.name);

 



  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
