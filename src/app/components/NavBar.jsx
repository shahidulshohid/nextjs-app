import Link from "next/link";

const NavBar = () => {
    return (
        <div>
            <nav className="flex justify-center">
                <ul className="flex justify-between w-1/2">
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/services'><li>Services</li></Link>
                    <Link href='/about'><li>About Us</li></Link>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;