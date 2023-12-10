import CompanyItem from "./CompanyItem";

export default function CompaniesList({ companies }) {
	const listCompanies = companies.map((company) => (
		<CompanyItem key={company.id} company={company} />
	));
	return <ul>{listCompanies}</ul>;
}
