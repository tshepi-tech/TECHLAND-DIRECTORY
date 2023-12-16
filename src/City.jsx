import React from "react";
import CompanyItem from "./CompanyItem";

export default function City({ value, companies }) {
	const city = companies.filter((company) => company.city === `${value}`);
	const selectedCompany = city.map((company) => (
		<CompanyItem key={company.id} company={company} />
	));
	return <ul>{selectedCompany}</ul>;
}
