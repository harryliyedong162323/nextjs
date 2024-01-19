"use client";

import React, { useEffect, useState } from "react";
import Head from 'next/head';






function SeoMeta() {
    const [isBrowser, setIsBrowser] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setIsBrowser(true);
        }, 50);
    }, []);

    return (
        <>
            <Head>
                <title>页面标题</title>
                <meta name="description" content="页面描述" />
                {/* 其他头部元数据 */}
            </Head>

        </>


    );
}

export default SeoMeta;
