import React from "react";
import { useState } from "react";
import Application from "./Applicatoin";

function PastApplication() {
  const [application, setApplication] = useState([
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
    <div className="pastApplication">
      <h1 className="h3 mb-3 fw-normal ms-4 mt-4">Past Applicatons</h1>
      {application.map((application, index) => {
        return (
          <Application
            key={index}
            id={index}
            prescriptionId={application.prescriptionId}
            billNumber={application.billNumber}
            date={application.date}
            medName={application.med.name}
            quantity={application.med.quantity}
            amount={application.med.amount}
            totalAmount={application.totalAmount}
          />
        );
      })}
    </div>
  );
}

export default PastApplication;
