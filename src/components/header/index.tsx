import React from "react";
import Link from "next/link";
import { HeaderItemsTypes } from "./types";

export default function Header() {
  const headerItems: HeaderItemsTypes[] = [
    {
      name: "Table",
      href: "/table",
    },
    {
      name: "Add teams",
      href: "/add-teams",
    },
    {
      name: "Results",
      href: "/results",
    },
    {
      name: "Fixtures",
      href: "/fixtures",
    },
  ];
  return (
    <div className="bg-teal w-full flex justify-start p-4 px-12">
      <div className=" flex max-w-xl w-full justify-between">
        {headerItems.map((item: HeaderItemsTypes, index: number) => (
          <Link
            key={index}
            className="text-xl text-white uppercase font-bold px-2.5 py-1.5"
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
