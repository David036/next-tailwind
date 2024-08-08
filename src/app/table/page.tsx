import React from "react";
import Table from "@/components/table";

export default function TablePage() {
  const tableColumns = [
    "Position",
    "Club",
    "Played",
    "Won",
    "Drawn",
    "Lost",
    "GF",
    "GA",
    "GD",
    "Points",
    "Next",
    "More",
  ];

  const tableResult = [
    {
      club: "Arsenal",
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
      next: "icon",
    },
    {
      club: "Chelsea",
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
      next: "icon",
    },
    {
      club: "Manchester United",
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
      next: "icon",
    },
  ];

  return <Table columns={tableColumns} data={tableResult} />;
}
