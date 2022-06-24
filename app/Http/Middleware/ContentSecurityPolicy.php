<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ContentSecurityPolicy
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public static function handle($request, Closure $next)
    {
        $response = $next($request);
        // dd(Auth::user()->name);
        if(Auth::user()){
            $response->headers->set('Content-Security-Policy', "frame-ancestors" . ' https://'.Auth::user()->name . ' https://admin.shopify.com');
        }

        return $response;
    }

}
