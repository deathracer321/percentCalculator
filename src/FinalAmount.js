import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const FinalAmount = () => {
    const [amount, setAmount] = useState("");
    const [perCent, setPerCent] = useState("");
    const [error, setError] = useState("");

    const onChangeHandler = (e) => {
        const value = e.target.value;
        if (e.target.name === "amount") setAmount(value);
        else setPerCent(value);
        setError("");
    };

    const finalAmount =
        amount && perCent
            ? (parseFloat(amount) * (parseFloat(perCent) / 100)).toFixed(2)
            : null;

    const showError = !finalAmount && (amount || perCent);

    return (
        <div className="container my-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="card-title text-success">Calculate Final Amount</h5>
                    <p className="card-text text-muted">
                        Calculate the final amount based on the initial amount and percentage:
                    </p>
                    {/* Center the row containing the input fields */}
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-6 text-center"> {/* Add text-center class */}
                            <label><b>Enter Amount:</b></label>
                            <input
                                type="number"
                                step="any"
                                className="form-control"
                                onChange={onChangeHandler}
                                value={amount}
                                name="amount"
                                placeholder="Enter a decimal number"
                            />
                        </div>
                    </div>
                    <div className="row mb-3 justify-content-center"> {/* Center this row as well */}
                        <div className="col-md-6 text-center"> {/* Add text-center class */}
                            <label><b>Enter Percent:</b></label>
                            <input
                                type="number"
                                step="any"
                                className="form-control"
                                onChange={onChangeHandler}
                                value={perCent}
                                name="percent"
                                placeholder="Enter a percentage"
                            />
                        </div>
                    </div>
                    {showError && (
                        <p className="text-danger">
                            Please enter valid numbers for both amount and percentage.
                        </p>
                    )}
                    <div>
                        <strong>Final Amount: </strong>
                        {finalAmount !== null ? `$${finalAmount}` : "N/A"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalAmount;
