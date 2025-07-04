<?php

namespace App\View\Components;

use Illuminate\View\Component;

class HostingLayout extends Component
{
    public $title;
    public $description;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($title = null, $description = null)
    {
        $this->title = $title ?? 'Hosting Solutions';
        $this->description = $description ?? 'Reliable hosting solutions for your website';
    }

    /**
     * Get the view / contents that represents the component.
     *
     * @return \Illuminate\View\View
     */
    public function render()
    {
        return view('layouts.hosting');
    }
}