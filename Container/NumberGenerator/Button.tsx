import React from "react";
import { Button } from "@/components/ui/button";
import { Numbers, PowerBall } from "./Powerball";
import LottoTable from "../Table/LottoTable";

export default function ButtonGen() {
  const PowerBallNumber =
    PowerBall[Math.floor(Math.random() * PowerBall.length)];
  console.log(PowerBallNumber);

  const filterNumber: number[] = [];
  const randomNumberIndex = 7;
  while (filterNumber.length < randomNumberIndex) {
    const NormalNumber = Numbers[Math.floor(Math.random() * Numbers.length)];
    if (!filterNumber.includes(NormalNumber)) {
      filterNumber.push(NormalNumber);
    }
  }

  const formattedNumber = filterNumber.join(" ");
  return (
    <section className="text-center mt-[7rem]">
      <h1>Generate PowerBall Prediction</h1>
      <Button>Generate</Button>
      <div className="mt-[7rem]">
        <LottoTable
          PowerBallNumber={PowerBallNumber}
          formattedNumber={formattedNumber}
        />
      </div>
    </section>
  );
}
