import React from "react";

function Verification(props) {
  function handleClick() {
    props.onVerify(props.id);
  }

  return (
    <div className="w-75 me-2 d-flex flex-column ms-4 border p-3 mb-4">
      {/* PRESCRIPTION ID */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h5">Benificiary ID: {props.beneficiaryId}</h2>
        <h2 className="h5">Prescription ID: {props.prescriptionId}</h2>
      </div>

      {/* BILL DETAILS */}
      <h3 className="h6 mb-3 fw-normal">Bill Details</h3>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="w-50">
          <p className="mb-1">
            <strong>Bill Number:</strong> {props.billNumber}
          </p>
        </div>
        <div className="w-50 text-end">
          <p className="mb-1">
            <strong>Date:</strong> {props.date}
          </p>
        </div>
      </div>

      {/* MEDICINE DETAILS */}
      <div className="mb-3">
        <h4 className="h6">Medicine Details</h4>
        <div className="row g-3 align-items-center">
          <div className="col-sm-7">
            <p className="mb-0">
              <strong>Name:</strong> {props.medName}
            </p>
          </div>
          <div className="col-sm-2">
            <p className="mb-0">
              <strong>Quantity:</strong> {props.quantity}
            </p>
          </div>
          <div className="col-sm-3">
            <p className="mb-0">
              <strong>Amount:</strong> {props.amount}
            </p>
          </div>
        </div>
      </div>
      {/* NET AMOUNT */}
      <div className="row g-4 align-items-center">
        <h4 className="col-sm-3 h6">Net Amount:</h4>
        <div className="col-sm-9">
          <p className="h5 text-primary">{props.totalAmount}</p>
        </div>
      </div>

      {/* VERIFY BUTTON  */}
      <div className="row g-4 align-items-center">
        <button
          type="button"
          className="btn btn-outline-primary me-2"
          onClick={handleClick}
        >
          Verify
        </button>
      </div>
    </div>
  );
}

export default Verification;
