"use client";

import React, { useEffect, useState } from "react";

import { initGA, logPageView } from "@/utils/analytics";


function Analytics() {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        if (isBrowser) {
            // 初始化 GA4
            initGA();

            // 记录页面浏览
            logPageView(`home`);
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
