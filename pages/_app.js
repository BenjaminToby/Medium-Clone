/**
 * Imports
 */
import React from "react"; // For react hooks

import Head from "next/head";
import { MantineProvider } from "@mantine/core";

import "../styles/main.css"; // Global css file
import "../styles/tailwind.css"; // Tailwind css export file

import theme from "../functions/theme"; // Mantine Theme Customization Object

/**
 * Main app component
 * =====================================================================
 * @description This is the main app component that wraps all the pages
 *
 * @param {object} params - The parameters
 * @param {object} params.Component - The component
 * @param {object} params.pageProps - The page props (from "getServersideProps" or "getStaticProps")
 *
 * @returns {import("react").ReactComponentElement}
 */
export default function MediumClone(props) {
    const { Component, pageProps } = props;
    return (
        <React.Fragment>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={theme}
            >
                <Component {...pageProps} />
            </MantineProvider>
        </React.Fragment>
    );
}
