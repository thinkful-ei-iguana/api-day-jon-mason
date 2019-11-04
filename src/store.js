import item from './item';

const items = [];
let hideCheckeditems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
 
};





const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

function findAndUpdate(id, newData){
  let currentItem = this.findById(id);
  Object.assign(currentItem, newData);
}

/*
const findAndToggleChecked = function (id) { 
  const currentItem = this.findById(id); 
  currentItem.checked = !currentItem.checked; };

const findAndUpdateName = function (id, name) { 
  try { item.validateName(name); 
    const currentItem = this.findById(id); 
    currentItem.name = name; 
  } catch (e) { console.log('Cannot update name: ' + e.message); } };
  */







export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate,
};