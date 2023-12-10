export default function CompanyItem({ company }) {
	const { name, city, quote } = company;
	return (
		<div>
			<div>
				<h3>{name}</h3>
				<p>{city}</p>
				<p>{quote}</p>
				<button popovertarget="details">more</button>
			</div>
			<div></div>
		</div>
	);
}
