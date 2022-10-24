import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Budget</h1>
      <label>your Balance: </label>
      <label>1,999,999</label>

      <br />

      <table>
        <tr>
          <th>Income</th>
          <th>Expenses</th>
        </tr>
        <tr>
          <td>100,000,000</td>
          <td>100,000</td>
        </tr>
      </table>

      <br />

      <label>history</label>

      <table>
        <tr>
          <td>Something</td>
          <td>$1,000</td>
          <td>
            <button>edit</button> <button>delete</button>
          </td>
        </tr>

        <tr>
          <td>Something</td>
          <td>$1,000</td>
          <td>
            <button>edit</button> <button>delete</button>
          </td>
        </tr>

        <tr>
          <td>Something</td>
          <td>$1,000</td>
          <td>
            <button>edit</button> <button>delete</button>
          </td>
        </tr>
      </table>

      <h1>Add new transaction</h1>

      <form action="">
        <input type="text" placeholder="new shinny thing " />

        <br />

        <input type="text" placeholder="1,000" />
      </form>

      <button>Cancel</button>
      <label>-</label>
      <button>OK</button>
    </div>
  );
}

export default App;
