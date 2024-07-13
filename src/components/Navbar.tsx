import Link from "next/link";

import { getServerSession } from "next-auth";
import NavDropDown from "./NavDropdown";
export default async function NavBar() {

    const session = await getServerSession()
    console.log(session)

    return (
        <header>
            <nav className="py-8 flex justify-between items-end">
                <Link
                    href={'/'}
                >
                    <h1 className=' text-[2rem] font-mono font-bold'>Blogger</h1>
                </Link>
                <div className="flex gap-2 justify-center items-center">
                    <NavDropDown />
                </div>
            </nav>
        </header>
    )
}