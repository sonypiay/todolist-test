const dom = {
  url: document.URL,
  domain: document.domain
};
const token = $("meta[name='csrf-token']").attr('content');

// vanilla javascript
const formTodo_vn = document.querySelector('#formTodo_vn');
const deleteSelectedTodo_vn = document.querySelector('#deleteSelectedTodo_vn');
const msg_vn = document.querySelector('.msg_vn');
const todolist_vn = document.querySelector('.todolist_vn');
msg_vn.style.display = 'none';
deleteSelectedTodo_vn.style.display = 'none';

formTodo_vn.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('#newtodo_vn');
  const todoElement = document.querySelector('.todolist_vn');
  const li = document.createElement('li');

  if( input.value === '' )
  {
    msg_vn.innerHTML = 'Item must be required';
    msg_vn.style.display = 'block';
    setTimeout(() => {
      msg_vn.style.display = 'none';
    }, 3000);
  }
  else
  {
    li.className = 'items_vn';
    li.innerHTML = '<label><input type="checkbox" class="uk-checkbox todovn_selected" name="todovn_selected[]" /> <span class="uk-margin-small-left">'
    + input.value;
    todolist_vn.appendChild(li);
    input.value = '';
    deleteSelectedTodo_vn.style.display = 'block';
  }
});

deleteSelectedTodo_vn.addEventListener('click', () => {
  const items_vn = document.querySelectorAll('.items_vn');
  const selectedItem = document.querySelectorAll('.todovn_selected');
  selectedItem.forEach( (f, i) => {
    if( f.checked === true )
      todolist_vn.removeChild(items_vn[i]);
  });
});

// jquery
