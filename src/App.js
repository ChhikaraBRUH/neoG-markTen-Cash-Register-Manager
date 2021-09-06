import React, { useState } from "react";
import "./styles.css";

function Table({ remainingChange }) {
	console.log(remainingChange);
	return (
		<table>
			<tbody>
				<tr>
					<th className="notesValue">Note</th>
					<th className="notesNumber">Number of Notes</th>
				</tr>
				<tr>
					<td className="notesValue">1</td>
					<td className="notesNumber">{remainingChange[1]}</td>
				</tr>
				<tr>
					<td className="notesValue">5</td>
					<td className="notesNumber">{remainingChange[5]}</td>
				</tr>
				<tr>
					<td className="notesValue">10</td>
					<td className="notesNumber">{remainingChange[10]}</td>
				</tr>
				<tr>
					<td className="notesValue">20</td>
					<td className="notesNumber">{remainingChange[20]}</td>
				</tr>
				<tr>
					<td className="notesValue">100</td>
					<td className="notesNumber">{remainingChange[100]}</td>
				</tr>
				<tr>
					<td className="notesValue">500</td>
					<td className="notesNumber">{remainingChange[500]}</td>
				</tr>
				<tr>
					<td className="notesValue">2000</td>
					<td className="notesNumber">{remainingChange[2000]}</td>
				</tr>
			</tbody>
		</table>
	);
}

export default function App() {
	const [returnStatus, setReturnStatus] = useState("");
	var notes = {};
	const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
	const [remainingChange, setRemainingChange] = useState({});

	function handleCash() {
		var newBillAmtInput = document.getElementById("billAmtInput").value;
		var newCashInput = document.getElementById("cashInput").value;
		var newReturnAmt = newCashInput - newBillAmtInput;

		if (newBillAmtInput === "" || newCashInput === "") {
			setReturnStatus("");
		} else if(parseFloat(newBillAmtInput) < 0 || parseFloat(newCashInput)<0){
			setReturnStatus("Please enter only positive values!!")
		} else if (newReturnAmt > 0) {
			availableNotes.map(function (currentNote) {
				notes[currentNote] = Math.trunc(newReturnAmt / currentNote);
				newReturnAmt = newReturnAmt % currentNote;
				return null;
			});
			setReturnStatus("The change to be given out is: ");
			setRemainingChange(notes);
		} else if (newReturnAmt === 0) {
			setReturnStatus("Nothing to return!");
		} else {
			setReturnStatus(
				"Cash received should be greater than the Bill Amount!"
			);
		}
	}

	return (
		<div className="App">
			<h1>
				<span role="img" aria-label="cash register">
					📇{" "}
				</span>
				cash register manager
			</h1>
			<hr />
			<div>
				<label htmlFor="#billAmtInput">Bill Amount: </label>
				<input type="number" id="billAmtInput" onChange={handleCash} />
			</div>

			<div>
				<label htmlFor="#cashInput">Total Cash Received: </label>
				<input type="number" id="cashInput" onChange={handleCash} />
			</div>

			<div>
				<div id="outputText">{returnStatus}</div>
				{returnStatus === "The change to be given out is: " && (
					<Table remainingChange={remainingChange} />
				)}
			</div>
			<hr />
			<div>
				Made with{"  "}
				<span role="img" aria-label="Red Heart">
					❤️{" "}
				</span>
				by <a href="https://bruh.dev">Chaitanya</a>
			</div>
			<a href="https://twitter.com/ChhikaraBRUH">
				<img
					alt="Twitter Icon"
					src="https://image.flaticon.com/icons/png/512/1384/1384017.png"
				/>
			</a>
			<a href="https://github.com/ChhikaraBRUH">
				<img
					alt="GitHub Icon"
					src="https://image.flaticon.com/icons/png/512/733/733609.png"
				/>
			</a>
			<a href="https://linkedin.com/in/ChaitanyaChhikara">
				<img
					alt="LinkedIn Icon"
					src="https://image.flaticon.com/icons/png/512/1384/1384014.png"
				/>
			</a>
		</div>
	);
}
