<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Laravel</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/css/uikit.min.css" />
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit-icons.min.js"></script>
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>
<body>
  <div class="uk-container uk-margin-large-top">
    <div class="uk-grid-small" uk-grid>
      <div class="uk-width-1-2">
        <div class="uk-card uk-card-default">
          <div class="uk-card-header">
            <h3 class="uk-card-title">Todo List - jQuery</h3>
          </div>
          <div class="uk-card-body">
            <div class="uk-alert-danger msg_jq" uk-alert></div>
            <form class="uk-form-stacked" id="formTodo_jq">
              <div class="uk-margin">
                <input type="text" class="uk-input uk-width-1-1" id="newtodo_jq" placeholder="New todo...">
              </div>
              <div class="uk-margin">
                <button type="submit" id="todosubmit_jq" class="uk-button uk-button-primary uk-width-1-1">Add</button>
              </div>
            </form>
            <div class="uk-margin">
              <h4 class="uk-h4 uk-text-center">Todo List</h4>
              <ul class="uk-list uk-list-divider todolist_jq"></ul>
              <button type="button" id="deleteSelectedTodo_jq" class="uk-button uk-button-danger uk-width-1-1">Delete Selected</button>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-width-1-2">
        <div class="uk-card uk-card-default">
          <div class="uk-card-header">
            <h3 class="uk-card-title">Todo List - jQuery</h3>
          </div>
          <div class="uk-card-body">
            <div class="uk-alert-danger msg_ajx" uk-alert></div>
            <form class="uk-form-stacked" id="formTodo_ajx">
              <div class="uk-margin">
                <input type="text" class="uk-input uk-width-1-1" id="newtodo_ajx" placeholder="New todo...">
              </div>
              <div class="uk-margin">
                <button type="submit" id="todosubmit_ajx" class="uk-button uk-button-primary uk-width-1-1">Add</button>
              </div>
            </form>
            <div class="uk-margin">
              <h4 class="uk-h4 uk-text-center">Todo List</h4>
              <ul class="uk-list uk-list-divider todolist_ajx"></ul>
              <button type="button" id="deleteSelectedTodo_ajx" class="uk-button uk-button-danger uk-width-1-1">Delete Selected</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</body>
</html>
