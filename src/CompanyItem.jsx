export default function CompanyItem({ company }) {
	const { id, name, city, quote } = company;
	return (
		<ul>
			<li>{id}</li>
			<li>{name}</li>
			<li>{city}</li>
			<li>{quote}</li>
		</ul>
	);
}
