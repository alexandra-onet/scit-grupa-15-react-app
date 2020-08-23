import React from "react";
import { Counter } from "./Counter";
import { Timer } from "./Timer";

export function Home() {
  return (
    <div className="page home">
      <Counter />
      <Timer />
    </div>
  );
}
