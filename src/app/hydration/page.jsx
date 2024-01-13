"use client"

import dynamic from "next/dynamic"

// import Hydration from "@/components/hydration/Hydration";

export default function page() {
    const HydrationNoSSR = dynamic(()=>import("@/components/hydration/Hydration.jsx"),{ssr: false})
  return (
    <div>
        {/* throws hydration error */}
        {/* <Hydration></Hydration> */}
        {/* no hydration error */}
        <HydrationNoSSR></HydrationNoSSR>
    </div>
  )
}
