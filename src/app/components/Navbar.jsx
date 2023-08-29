import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const currentpath = usePathname()
    return (
        <div>
            <div className="flex space-x-6">
                <div><Link href={'/'} className={currentpath === '/'?"text-red-500":"text-white"}>HOME</Link></div>
                <div><Link href={'/about'} className={currentpath === '/about'?"text-red-500":"text-white"}>COOKIES</Link></div>
                <div><Link href={'/Blog'} className={currentpath === '/Blog'?"text-red-500":"text-white"}>JSON RESPONSE</Link></div>
                <div><Link href={'/Contact'} className={currentpath === '/Contact'?"text-red-500":"text-white"}>REDIRECT TO HOME</Link></div> 
                 
            </div>
        </div>
    );
};

export default Navbar;