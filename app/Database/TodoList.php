<?php

namespace App\Database;

use Illuminate\Database\Eloquent\Model;

class TodoList extends Model
{
  public $timestamps = true;
  protected $table = 'todo';
}
