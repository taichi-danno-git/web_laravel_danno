<?php


use App\Http\Controllers\MenuController;
use App\Http\Controllers\RegistController;
use App\Http\Controllers\ListController; 
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

Route::get('/menu',[MenuController::class, 'index'])/* ->name('menu') */;

Route::get('/employee-regist',[RegistController::class, 'index'])/* ->name('employee-regist') */;

Route::get('/employee-list',[ListController::class, 'index'])/* ->name('employee-list') */;

