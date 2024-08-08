import React from "react";
import { TableTypes } from "./types";

export default function Table({ columns, data }: TableTypes) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="font-bold text-xs text-gray-700 bg-teal-200">
          <tr>
            {columns?.map((item: string, index: number) => (
              <th key={index} scope="col" className="text-teal-950 px-6 py-3">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((position: any, index: number) => {
            return (
              <tr key={index} className="bg-white border-b border-teal-200">
                <td className="px-6 py-4">{index + 1}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap"
                >
                  {position.club}
                </th>
                <td className="px-6 py-4">{position.played}</td>
                <td className="px-6 py-4">{position.won}</td>
                <td className="px-6 py-4">{position.drawn}</td>
                <td className="px-6 py-4">{position.lost}</td>
                <td className="px-6 py-4">{position.gf}</td>
                <td className="px-6 py-4">{position.ga}</td>
                <td className="px-6 py-4">{position.gd}</td>
                <td className="px-6 py-4 font-bold text-gray-900">
                  {position.points}
                </td>
                <td className="px-6 py-4">{position.next}</td>
                <td className="px-6 py-4">Click</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
