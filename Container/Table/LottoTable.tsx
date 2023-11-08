import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LottoTableProps } from "../NumberGenerator/Button";

export default function LottoTable({ TableData }: LottoTableProps) {
  return (
    <Table className="border mt-7">
      <TableCaption>Recent PowerBall Wins</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Game</TableHead>
          <TableHead>Numbers</TableHead>
          <TableHead className="text-left">PowerBall</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {TableData.map(({ NormalNumber, PowerBall }, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{NormalNumber}</TableCell>
            <TableCell className="text-left">{PowerBall}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
