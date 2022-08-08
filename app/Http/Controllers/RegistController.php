<?php

namespace App\Http\Conrollers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RegistController extends Controller
{
   /*  @return */

   public function index()
   {
    return view('employee-regist');
   }
}

?>