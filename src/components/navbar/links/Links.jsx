"use client"
import styles from "./links.module.css";
import NavLink from './navLink/NavLink';
import { useState } from 'react';

const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];
function Links() {
    const [open,setOpen] = useState(false);
    // temporary
    const isAdmin = true;
    const session = true;
  return (
    <div className={styles.container}>
    <div className={styles.links}>{links.map((link=>(
        <NavLink item={link} key={link.title}></NavLink>
    )))}
    {
        session ? (
            <>
            {isAdmin && <NavLink item={{title: "Admin" , path: "/admin"}}></NavLink>}
            <button className={styles.logout}>Logout</button>
            </>
        ) :
        (
            <NavLink item={{title:"Login", path: "/login"}}></NavLink>
        )
    }
    </div>
    <button className={styles.menuButton} onClick={()=>setOpen((prev)=> !prev)}>Menu</button>
    {open && 
    <div className={styles.mobileLinks}>
        {links.map((link)=>(
            <NavLink item={link} key={link.title}></NavLink>
        ))}
    </div>
    }
    </div>
  )
}

export default Links