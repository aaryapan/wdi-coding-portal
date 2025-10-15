import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
title: "WDI Coding Portal",
description: "Stepwise code generation with scope gates"
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}
