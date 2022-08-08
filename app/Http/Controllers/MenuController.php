<?php

namespace App\Http\Conrollers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class MenuController extends Controller
{
   /*  @return */

   public function index()
   {
    return view('menu');
   }
}

?>