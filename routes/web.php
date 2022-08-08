<?php


use App\Http\Controllers\MenuEmployeeController;
use App\Http\Controllers\RegistEmployeeController;
use App\Http\Controllers\ListEmployeeController; 
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('menu');
});



Route::get('/menu',[MenuEmployeeController::class, 'index'])->name('menu');

Route::get('/employee-regist',[RegistEmployeeController::class, 'index'])->name('employee-regist');

Route::get('/employee-list',[ListEmployeeController::class, 'index'])->name('employee-list');

