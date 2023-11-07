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

export default function LottoTable({ PowerBallNumber, formattedNumber }) {
  return (
    <Table>
      <TableCaption>Recent PowerBall Wins</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Game</TableHead>
          <TableHead>Numbers</TableHead>

          <TableHead className="text-left">PowerBall</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell>{formattedNumber}</TableCell>
          <TableCell className="text-left">{PowerBallNumber}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
