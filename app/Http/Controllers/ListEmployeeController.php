<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

class ListEmployeeController extends Controller
{
    //
    public function index()
   {
    return view('employee-list');
   }
}

?>
