"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Numbers, PowerBall } from "./Powerball";
import LottoTable from "../Table/LottoTable";
import { Input } from "@/components/ui/input";

// Define the type for the prediction data
type Prediction = {
  PowerBall: number;
  NormalNumber: string;
};

export type LottoTableProps = {
  TableData: Prediction[];
};

export default function ButtonGen() {
  const [TableData, setTableData] = useState<Prediction[]>([]);
  const [games, setGames] = useState(0); // Initialize with a default value
  const numOfRep = games;

  const generatePredictions = () => {
    if (typeof games !== "number" || games <= 0) {
      // Handle invalid input
      return;
    }

    const predictions: Prediction[] = [];
    for (let i = 0; i < games; i++) {
      const PowerBallNumber =
        PowerBall[Math.floor(Math.random() * PowerBall.length)];

      const filterNumber: Number[] = [];
      const randomNumberIndex = 7;

      while (filterNumber.length < randomNumberIndex) {
        const NormalNumber =
          Numbers[Math.floor(Math.random() * Numbers.length)];
        if (!filterNumber.includes(NormalNumber)) {
          filterNumber.push(NormalNumber);
        }
      }

      predictions.push({
        PowerBall: PowerBallNumber,
        NormalNumber: filterNumber.join(" "),
      });
    }
    setTableData(predictions);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newGames = parseInt(event.target.value);
    setGames(newGames);
  };

  return (
    <section className="text-center mt-[7rem]">
      <h1>Generate the number of games for PowerBall</h1>

      <div className="flex flex-col justify-center items-center border">
        <Input
          name="games"
          type="number"
          placeholder="Enter the number of Games"
          value={games}
          onChange={handleOnChange}
          className="w-1/2"
        />
        <Button onClick={generatePredictions}>Generate</Button>
      </div>

      <div className="mt-[7rem]">
        <LottoTable TableData={TableData} />
      </div>
    </section>
  );
}
