"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(){
    const path = usePathname();

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">MAIN</Link>{path === "/" ? "✔️" : ""}
                </li>
                <li>
                    <Link href="/movie_list">MOVIE</Link>{path === "/movie_list" ? "✔️" : ""}
                </li>
                <li>
                    <Link href="/drama_list">DRAMA</Link>{path === "/drama_list" ? "✔️" : ""}
                </li>
                <li>
                    <Link href="/ani_list">ANIMATION</Link>{path === "/ani_list" ? "✔️" : ""}
                </li>
            </ul>
        </nav>
    )
}