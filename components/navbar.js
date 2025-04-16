// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed w-full p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-black text-lg font-bold">Noor Blog</div>
                <ul className="hidden md:flex space-x-4">
                    <li><Link href="/" className="text-black hover:underline">Home</Link></li>
                    <li><Link href="/about" className="text-black hover:underline">About</Link></li>
                    <li><Link href="/contact" className="text-black hover:underline">Contact</Link></li>
                </ul>
                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        {/* Add a hamburger icon here if needed */}
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
