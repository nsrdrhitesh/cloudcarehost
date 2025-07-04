<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HostingController extends Controller
{
    public function index()
    {
        return view('hosting.index');
    }

    public function shared()
    {
        return view('hosting.shared');
    }

    public function wordpress()
    {
        return view('hosting.wordpress');
    }

    public function cloud()
    {
        return view('hosting.cloud');
    }

    public function vps()
    {
        return view('hosting.vps');
    }

    public function dedicated()
    {
        return view('hosting.dedicated');
    }

    public function compare()
    {
        return view('hosting.compare');
    }
}