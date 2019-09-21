const dom = {
  url: document.URL,
  domain: document.domain
};
const token = $("meta[name='csrf-token']").attr('content');

// jquery
const formTodo_jq = $('#formTodo_jq');
const deleteSelectedTodo_jq = $('#deleteSelectedTodo_jq');
const msg_jq = $('.msg_jq');
const todolist_jq = $('.todolist_jq');
msg_jq.hide();
deleteSelectedTodo_jq.hide();

// jquery with ajax
const formTodo_ajx = $('#formTodo_ajx');
const deleteSelectedTodo_ajx = $('#deleteSelectedTodo_ajx');
const msg_ajx = $('.msg_ajx');
const todolist_ajx = $('.todolist_ajx');
let todolist_array = [];
msg_ajx.hide();
deleteSelectedTodo_ajx.hide();

formTodo_jq.on('submit', (e) => {
  e.preventDefault();
  var newtodo = $("#newtodo_jq");
  if( newtodo.val() === '' )
  {
    msg_jq.show();
    msg_jq.html('Item must be required');
    setTimeout(() => { msg_jq.hide(); }, 3000);
  }
  else
  {
    const li = document.createElement('li');
    li.className = 'items_jq';
    li.innerHTML = '<label><input type="checkbox" class="uk-checkbox todojq_selected" name="todojq_selected[]" /> <span class="uk-margin-small-left">'
    + newtodo.val();
    todolist_jq.append(li);
    deleteSelectedTodo_jq.show();
    newtodo.val('');
    alert('Todo has been added.');
  }
});

deleteSelectedTodo_jq.on('click', (e) => {
  const li = $(".items_jq");
  const selectedItem = $('.todojq_selected');
  if( confirm('Are you sure want to delete?') )
  {
    for( let i = 0; i < selectedItem.length; i++ )
    {
      if( selectedItem[i].checked === true )
       li[i].remove();
    }
  }
});

function getTodoList()
{
  var param = {
    method: 'get',
    url: dom.url + 'get_todo',
    dataType: 'json', cache: true, processData: true,
    beforeSend: function() {}
  };

  var d = $.ajax(param);
  d.done(res => {
    let result = res.results;
    var li = '';
    $.each(result.data, (index, value) => {
      li += '<li>'
        + '<label><input type="checkbox" class="uk-checkbox todoajx_selected" value="' + value.todo_id + '" name="todoajx_selected[]" /> <span class="uk-margin-small-left">'
        + value.todo_name
        + '</li>';
    });
    todolist_ajx.html(li);
    if( result.total !== 0 ) deleteSelectedTodo_ajx.show();
  });
  d.fail(err => {
    console.log( err.statusText );
  });
};

setTimeout(() => { getTodoList() }, 1000);

formTodo_ajx.on('submit', (e) => {
  e.preventDefault();
  var newtodo = $("#newtodo_ajx");
  if( newtodo.val() === '' )
  {
    msg_ajx.show();
    msg_ajx.html('Item must be required');
    setTimeout(() => { msg_ajx.hide(); }, 3000);
  }
  else
  {
    var param = {
      method: 'post',
      url: dom.url + 'add_todo',
      data: {
        newtodo: newtodo.val()
      },
      headers: { 'X-CSRF-TOKEN': token },
      dataType: 'json', cache: true, processData: true,
      beforeSend: function() {}
    };

    var d = $.ajax(param);
    d.done(res => {
      newtodo.val('');
      getTodoList();
    });
    d.fail(err => {
      console.log( err.statusText );
    });
  }
});


deleteSelectedTodo_ajx.on('click', (e) => {
  const selectedItem = $('.todoajx_selected');
  let arr = [];
  for( let i = 0; i < selectedItem.length; i++ )
  {
    if( selectedItem[i].checked === true )
      arr.push(selectedItem[i].value);
  }

  if( confirm('Are you sure want to delete?') )
  {
    var param = {
      method: 'delete',
      url: dom.url + 'delete_todo',
      data: {
        todos: arr
      },
      headers: { 'X-CSRF-TOKEN': token }, dataType: 'json',
      cache: true, processData: true
    };

    var d = $.ajax(param);
    d.done(res => {
      getTodoList();
    });
    d.fail(err => {
      console.log( err.statusText );
    });
  }
});
