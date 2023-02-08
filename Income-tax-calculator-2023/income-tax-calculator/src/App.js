import "./styles.css";
import { useState } from "react";
import {
  calculateTaxInOldTaxRegime,
  calculateTaxInNewTaxRegime
} from "./utils/utilsFunctions";
export default function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [income, setIncome] = useState("");
  const [deduction, setDeduction] = useState("");
  const [taxInNewTaxRegime, setTaxInNewTaxRegime] = useState(0);
  const [taxInOldTaxRegime, setTaxInOldTaxRegime] = useState(0);
  const [breakDownFrom, setBreakDownFrom] = useState("");
  const handleCalculate = () => {
    if (income !== "") {
      setIsClicked(true);
      setTaxInOldTaxRegime(calculateTaxInOldTaxRegime(income));
      setTaxInNewTaxRegime(calculateTaxInNewTaxRegime(income));
    }
  };
  const handleInputChange = (e) => {
    setIncome(e.target.value);
  };
  const handleDeductionChange = (e) => {
    setDeduction(e.target.value);
  };
  const handleClick = (e) => {
    setBreakDownFrom(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h4>Income</h4>
        <input
          className="box1"
          type="tel"
          required
          placeholder="eg:50000"
          value={income}
          onChange={handleInputChange}
          maxLength={13}
        />
        <h4>Deductions (except standard deduction)</h4>
        <input
          className="box2"
          type="tel"
          placeholder="eg:60000"
          value={deduction}
          onChange={handleDeductionChange}
          maxLength={13}
        />
        <br />
        <input type="checkbox" defaultChecked />
        Apply standard deduction (only salaried income)
        <br />
        <button className="calculate" onClick={handleCalculate}>
          Calculate{" "}
        </button>
      </form>
      {isClicked ? (
        <div>
          Old Tax Regime
          <button className="submit" onClick={handleClick} value="old-regime">
            Show Breakdown
          </button>
          <span>₹{taxInOldTaxRegime.toLocaleString("en-IN")} </span>
          New Tax Regime
          <button className="submit" onClick={handleClick} value="new-regime">
            Show Breakdown
          </button>
          <span>₹{taxInNewTaxRegime.toLocaleString("en-IN")}</span>
          {breakDownFrom !== "" && (
            <table border="1" className="center">
              <thead>
                <th colspan="3">Tax breakdown</th>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">Income</td>
                  <td>₹{income}</td>
                </tr>
                <tr>
                  <td colspan="2">Standard deduction</td>
                  <td>-₹50000</td>
                </tr>
                <tr>
                  <td colspan="2">Taxable Income</td>
                  <td>₹{income - 50000}</td>
                </tr>
                <tr>
                  <td colspan="2">Payable Tax</td>
                  <td>
                    ₹
                    {breakDownFrom === "old-regime"
                      ? taxInOldTaxRegime
                      : taxInNewTaxRegime}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
