const dom = {
  url: document.URL,
  domain: document.domain
};
const token = $("meta[name='csrf-token']").attr('content');
let vanilla = {};
let jq = {};

// vanilla javascript
const formTodo_vn = document.querySelector('#formTodo_vn');
const deletetodo_vn = document.querySelector('#deletetodo_vn');
let msg_vn = document.querySelector('.msg_vn');
let todolist_vn = document.querySelector('.todolist_vn');
msg_vn.style.display = 'none';

formTodo_vn.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('#newtodo_vn');
  const todoElement = document.querySelector('.todolist_vn');
  const items = document.querySelectorAll('.items_vn');
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
    const btnDelete = document.createElement('a');
    btnDelete.className = 'uk-float-right deletebtn_vn';
    btnDelete.innerHTML = '<i uk-icon="ratio: 0.8; icon: close"></i>';

    li.className = 'items_vn';
    li.innerHTML = '<label><input type="checkbox" class="uk-checkbox todovn_selected" name="todovn_selected[]" /> <span class="uk-margin-small-left">' + input.value + '</span></label>';
    li.appendChild( btnDelete );

    todolist_vn.appendChild(li);
    input.value = '';
  }
});

deletetodo_vn.addEventListener('click', () => {
  const items = document.querySelectorAll('.items_vn');
  const selectedItem = document.querySelectorAll('.todovn_selected');
  selectedItem.forEach( (f, i) => {
    if( f.checked === true )
      todolist_vn.removeChild(items[i]);
  });
});
