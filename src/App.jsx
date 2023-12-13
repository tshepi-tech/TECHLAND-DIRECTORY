import companies from "./Data/companies.json";
import CompaniesList from "./CompaniesList";
import "./App.css";

export default function App() {
	return <CompaniesList companies={companies} />;
}
