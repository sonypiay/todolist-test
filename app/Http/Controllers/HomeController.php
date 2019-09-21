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
    $getodo = $todo->orderBy('id', 'desc')
    ->get();

    return response()->json( $getodo, 200 );
  }

  public function add_todo( Request $request, TodoList $todo )
  {
    $newtodo = $request->newtodo;
    $todo->todo_name = $newtodo;
    $todo->save();

    return response()->json(['statusText' => 'success'], 200);
  }
}
