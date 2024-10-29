import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const FinalPercent = () => {
    const [amount1, setAmount1] = useState("");
    const [amount2, setAmount2] = useState("");
    const [error, setError] = useState("");

    const onChangeHandler = (e) => {
        const value = e.target.value;
        if (e.target.name === "amount1") setAmount1(value);
        else setAmount2(value);
        setError("");
    };

    const finalPercent =
        amount1 && amount2 && parseFloat(amount2) !== 0
            ? ((parseFloat(amount1) / parseFloat(amount2)) * 100).toFixed(2)
            : null;

    const showError = !finalPercent && (amount1 || amount2);

    return (
        <div className="container my-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="card-title text-primary">Calculate Percentage</h5>
                    <p className="card-text text-muted">Calculate the percentage of Value 1 in Value 2:</p>
                    {/* Center the row containing the input fields */}
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-6 text-center"> {/* Add text-center class */}
                            <label><b>Enter Value 1:</b></label>
                            <input
                                type="number"
                                step="any"
                                className="form-control"
                                onChange={onChangeHandler}
                                value={amount1}
                                name="amount1"
                                placeholder="Enter a decimal number"
                            />
                        </div>
                    </div>
                    <div className="row mb-3 justify-content-center"> {/* Center this row as well */}
                        <div className="col-md-6 text-center"> {/* Add text-center class */}
                            <label><b>Enter Value 2:</b></label>
                            <input
                                type="number"
                                step="any"
                                className="form-control"
                                onChange={onChangeHandler}
                                value={amount2}
                                name="amount2"
                                placeholder="Enter a decimal number"
                            />
                        </div>
                    </div>
                    {showError && (
                        <p className="text-danger">
                            Please enter valid numbers, and Value 2 must not be zero.
                        </p>
                    )}
                    <div>
                        <strong>Final Percent: </strong>
                        {finalPercent !== null ? `${finalPercent}%` : "N/A"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalPercent;
