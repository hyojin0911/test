"use client"

import Link from "next/link"

export default function LoginNavigation(){
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/login">LOGIN</Link>
                </li>
            </ul>
        </nav>
    )
}