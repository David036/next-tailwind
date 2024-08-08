"use server";

import React from "react";

export default async function Fixtures() {
  const addResult = async (result: FormData) => {
    "use server";
    const firstResult = result.get("first-result");
    const secondResult = result.get("second-result");
    console.log(firstResult, secondResult, "result");
  };

  return (
    <div className="p-2.5 flex flex-col gap-y-2">
      <form action={addResult} className="flex gap-x-2">
        <div className="flex gap-x-2 items-center">
          <p>Arsenal</p>
          <div className="flex gap-x-1 px-1.5 py-0.5 bg-teal font-bold rounded text-teal-950">
            <input
              name="first-result"
              type="number"
              className="text-center max-w-5 bg-white rounded"
            />
            <p className="text-white">-</p>
            <input
              name="second-result"
              type="number"
              className="text-center max-w-5 bg-white rounded"
            />
          </div>
          <p>Manchester United</p>
        </div>
        <button className="max-w-40 text-x text-white bg-teal rounded px-2 py-1">
          Finish{" "}
        </button>
      </form>
    </div>
  );
}
