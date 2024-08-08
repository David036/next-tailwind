"use server";

import React from "react";

export default async function AddClub() {
  const AddClubToTable = async (data: FormData) => {
    "use server";
    const clubName = data.get("clubName");
    console.log("Club Name:", clubName);
  };

  return (
    <form
      action={AddClubToTable}
      className="gap-y-4 flex flex-col max-w-96 p-2.5"
    >
      <input
        className="rounded border-teal border-2 px-4 py-2"
        name="clubName"
        placeholder="Club name"
      />
      <button
        className="max-w-40 text-xl text-white bg-teal rounded px-4 py-2"
        type="submit"
      >
        Add{" "}
      </button>
    </form>
  );
}
