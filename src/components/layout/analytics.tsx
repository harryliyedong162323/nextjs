"use client";

import React, { useEffect, useState } from "react";

import { initGA, logPageView } from "@/utils/analytics";


function Analytics(props:any) {
    const [isBrowser, setIsBrowser] = useState(false);
    const pageView = props.pageView;
    useEffect(() => {
        if (isBrowser) {
            // 初始化 GA4
            initGA();

            // 记录页面浏览
            logPageView(pageView);
        }
    }, [isBrowser]);
    useEffect(() => {
        setTimeout(() => {
            setIsBrowser(true);
        }, 50);
    }, []);

    return (
        <div>

        </div>
    );
}

export default Analytics;
