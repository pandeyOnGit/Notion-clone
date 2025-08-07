import { db } from "@/firebase"
import { doc } from "firebase/firestore"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { useDocument, useDocumentData } from "react-firebase-hooks/firestore"

function SidebarOption({ href, id }: { href: string; id: string }) {
  const [data, loading, error] = useDocumentData(doc(db, "documents", id));
  const pathname = usePathname();
  const isActive = href.includes(pathname) && pathname !== "/" ;
  return (
    <div>
      <Link
        href={href}
        className={`block border p-3 rounded-md mb-2 transition-colors ${
          isActive
            ? "bg-blue-100 font-bold border-blue-500 text-blue-900"
            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700"
        }`}
      >
        <p className="truncate">{data?.title || "Untitled Document"}</p>
      </Link>
    </div>
  );
};

export default SidebarOption;
