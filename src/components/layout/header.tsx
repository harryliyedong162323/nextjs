"use client";


import React, { useEffect, useState } from "react";

import BaseLink from "@/components/base/link";
function Header(props: any) {

    // useEffect(() => {
    //
    // }, []);

    return (
        <nav className="h-118px w-full fixed left-0 top-0 z-30 invert">
            <div className="bg-[url('/assets/header_logo.png')] w-44px h-44px absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]"></div>
            <div className="bg-[url('/assets/more_menu.png')] w-44px h-44px absolute right-[45px] top-1/2 translate-y-[-50%]"></div>
        </nav>
    );
}

export default Header;
