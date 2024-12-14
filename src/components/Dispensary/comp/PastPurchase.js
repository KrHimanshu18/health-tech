import React from "react";
import { useState } from "react";
import Purchases from "./Purchases";

function Pastpurchases() {
  const [purchases, setPurchases] = useState([
    {
      prescriptionId: "RX001",
      billNumber: "B1234",
      date: "2024-01-01",
      med: {
        name: "Paracetamol",
        quantity: 2,
        amount: 50,
      },
      totalAmount: 100,
    },
    {
      prescriptionId: "RX002",
      billNumber: "B5678",
      date: "2024-02-15",
      med: {
        name: "Ibuprofen",
        quantity: 3,
        amount: 75,
      },
      totalAmount: 225,
    },
    {
      prescriptionId: "RX003",
      billNumber: "B9101",
      date: "2024-03-10",
      med: {
        name: "Amoxicillin",
        quantity: 1,
        amount: 200,
      },
      totalAmount: 200,
    },
  ]);

  return (
    <div className="pastPurchases">
      <h1 className="h3 mb-3 fw-normal ms-4 mt-4">Past Purchases</h1>
      {purchases.map((purchases, index) => {
        return (
          <Purchases
            key={index}
            id={index}
            prescriptionId={purchases.prescriptionId}
            billNumber={purchases.billNumber}
            date={purchases.date}
            medName={purchases.med.name}
            quantity={purchases.med.quantity}
            amount={purchases.med.amount}
            totalAmount={purchases.totalAmount}
          />
        );
      })}
    </div>
  );
}

export default Pastpurchases;
