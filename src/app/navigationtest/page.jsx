"use client"
import Link from "next/link";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";

export default function page() {
    // Client Side Navigation
    //by default next fetches all link pages but we can disable it using prefetch attribute 
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams(); //get the search queries starts with "?" in url
    const q = searchParams.get("q") //get query starting from ?q
    console.log(pathname); //returns current page path
    console.log(q);
    // searchParams.set(); //can be used to set search queries in url
    const handleClick = ()=>{
        // router.push("/"); //push the new location into browser history stack
        // router.replace("/"); //replace current location with the new location into browser history stack so back button won't take to the current page
        router.refresh(); //refreshes the current page (doesn't reload)
        // router.back(); //goto previous page (works as back button of browser)
        // router.forward(); //goto next page (works as forward button of browser)
    }
  return (
    <div>
        <Link href={"/"} prefetch={false}>GOTO Homepage</Link><br/>
        <button onClick={handleClick}>click me</button>
    </div>
  )
}
