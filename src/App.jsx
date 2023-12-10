import companies from "./Data/companies.json";
import CompaniesList from "./CompaniesList";

export default function App() {
	return <CompaniesList companies={companies} />;
}
