<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Database\TodoList;

class HomeController extends Controller
{
  public function index()
  {
    return response()->view('welcome');
  }

  public function get_todolist( TodoList $todo )
  {
    $getodo = $todo->orderBy('todo_id', 'desc')
    ->get();

    $res = [
      'results' => [
        'data' => $getodo,
        'total' => $getodo->count()
      ]
    ];

    return response()->json( $res, 200 );
  }

  public function add_todo( Request $request, TodoList $todo )
  {
    $newtodo = $request->newtodo;
    $todo->todo_name = $newtodo;
    $todo->save();

    $res = [
      'status' => 200,
      'statusText' => 'success',
      'request' => $newtodo
    ];

    return response()->json($res, $res['status']);
  }

  public function delete_todo( Request $request, TodoList $todo )
  {
    $todos = $request->todos;

    foreach( $todos as $t )
    {
      $todo->where('todo_id', $t)
      ->delete();
    }

    $res = [
      'status' => 200,
      'statusText' => 'success'
    ];

    return response()->json($res, $res['status']);
  }
}
