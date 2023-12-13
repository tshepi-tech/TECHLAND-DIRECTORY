import companies from "./Data/companies.json";
import CompaniesList from "./CompaniesList";
import "./App.css";

export default function App() {
	return (
		<div>
			<h1>GotCake?</h1>
			<div className="filter_group">All malmo lund other</div>
			<CompaniesList companies={companies} />;
		</div>
	);
}
