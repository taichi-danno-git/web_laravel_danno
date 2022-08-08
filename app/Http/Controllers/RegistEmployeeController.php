<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RegistEmployeeController extends Controller
{
    //
    public function index()
   {
    return view('employee-regist');
   }
}
