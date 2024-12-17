"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const KeysLayout = () => {
  const [operations, setOperations] = useState("");

  useEffect(() => {
    const savedOperations = localStorage.getItem("operations");
    if (savedOperations) {
      setOperations(savedOperations);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("operations", operations);
  }, [operations]);

  const handleOperations = (op: string) => {
    setOperations((prev) => prev + op);
  };

  const handleCalculation = () => {
    try {
      const result = eval(operations);

      if (isNaN(result)) {
        throw new Error("Invalid calculation");
      }
      setOperations(String(Math.round(Number(result) * 10 ** 10) / 10 ** 10));
    } catch {
      alert("Invalid operation! Please check your input.");
    }
  };

  const handleDelete = () => {
    setOperations((prev) => prev.slice(0, -1).trimEnd());
  };

  const handleClear = () => {
    setOperations("");
    localStorage.removeItem("operations");
  };

  return (
    <div>
      {operations && (
        <div className="text-5xl text-white mb-5">
          <span className="mr-4">{operations}</span>
        </div>
      )}
      <div className="mb-5">
        <button className="btn" onClick={() => handleOperations("1")}>
          1
        </button>
        <button className="btn" onClick={() => handleOperations("2")}>
          2
        </button>
        <button className="btn" onClick={() => handleOperations("3")}>
          3
        </button>
        <button
          className="btn-operation"
          onClick={() => handleOperations(" + ")}
        >
          +
        </button>
      </div>
      <div className="mb-5">
        <button className="btn" onClick={() => handleOperations("4")}>
          4
        </button>
        <button className="btn" onClick={() => handleOperations("5")}>
          5
        </button>
        <button className="btn" onClick={() => handleOperations("6")}>
          6
        </button>
        <button
          className="btn-operation"
          onClick={() => handleOperations(" - ")}
        >
          -
        </button>
      </div>
      <div className="mb-5">
        <button className="btn" onClick={() => handleOperations("7")}>
          7
        </button>
        <button className="btn" onClick={() => handleOperations("8")}>
          8
        </button>
        <button className="btn" onClick={() => handleOperations("9")}>
          9
        </button>
        <button
          className="btn-operation"
          onClick={() => handleOperations(" * ")}
        >
          *
        </button>
      </div>
      <div className="mb-5">
        <button className="btn" onClick={() => handleOperations("0")}>
          0
        </button>
        <button className="btn" onClick={() => handleOperations(".")}>
          .
        </button>
        <button className="btn" onClick={handleCalculation}>
          =
        </button>
        <button
          className="btn-operation"
          onClick={() => handleOperations(" / ")}
        >
          /
        </button>
      </div>

      <div className="flex">
        <button className="btn-clear" onClick={handleClear}>
          Clear
        </button>
        <div
          className="h-14 w-14 rounded-full bg-white flex items-center justify-center cursor-pointer"
          onClick={handleDelete}
        >
          <Image
            src={"/delete1.png"}
            alt="delete-image"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};
