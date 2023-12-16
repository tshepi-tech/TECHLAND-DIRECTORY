import companies from "./Data/companies.json";
import CompaniesList from "./CompaniesList";
import "./App.css";
import { useState } from "react";
import City from "./City";

export default function App() {
	const [value, setValue] = useState("All");

	function onSelect(event) {
		setValue(event?.target?.value);
	}

	return (
		<div>
			<h1>GotCake?</h1>
			<div className="filter_group">
				<select name="cities" id="cities" value={value} onChange={onSelect}>
					<option value="All">All</option>
					<option value="Malmö">Malmö</option>
					<option value="Lund">Lund</option>
					<option value="other">Other</option>
				</select>
			</div>
			{value === "All" ? (
				<CompaniesList companies={companies} />
			) : (
				<City companies={companies} value={value} />
			)}
			;
		</div>
	);
}
