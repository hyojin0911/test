"use client"

import Link from "next/link";

export default function AdminNavigation(){
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">LOGIN</Link>
                </li>
                <li>
                    <Link href="/">CANCLE</Link>
                </li>
            </ul>
        </nav>
    )
}