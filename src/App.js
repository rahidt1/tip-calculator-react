import { useState } from "react";
import BillInput from "./BillInput.js";
import Percentage from "./Percentage.js";
import Output from "./Output.js";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [bill, setBill] = useState("");

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />

      <Percentage percentage={percentage1} onSetPercentage={setPercentage1}>
        How did you like the service?
      </Percentage>

      <Percentage percentage={percentage2} onSetPercentage={setPercentage2}>
        How did your friend like it?
      </Percentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset
            setBill={setBill}
            setPercentage1={setPercentage1}
            setPercentage2={setPercentage2}
          />
        </>
      )}
    </div>
  );
}

function Reset({ setBill, setPercentage1, setPercentage2 }) {
  function handlReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return <button onClick={handlReset}>Reset</button>;
}
