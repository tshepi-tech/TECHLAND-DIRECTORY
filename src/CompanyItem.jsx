import image from "./Assets/starmap.png";

export default function CompanyItem({ company }) {
	const { name, city, quote } = company;
	return (
		<div className="company_card">
			<div className="image_title">
				<img src={image}></img>
				<div className="title">
					<p className="name">{name}</p>
					<p className="city">{city}</p>
				</div>
			</div>
			<div className="quote_contact">
				<p className="quote">{quote}</p>
				<button>Contact</button>
			</div>
		</div>
	);
}
