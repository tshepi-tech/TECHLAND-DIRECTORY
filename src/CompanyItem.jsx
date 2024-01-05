import placeholder from "./Assets/starmap.png";

export default function CompanyItem({ company }) {
	const { name, city, quote, contact, image } = company;
	let thumbnail = image;
	try {
		thumbnail = require(`./Assets/${image}`);
	} catch {
		thumbnail = placeholder;
	}
	console.log(thumbnail);
	return (
		<div className="company_card">
			<div className="image_title">
				<img src={thumbnail}></img>
				<div className="title">
					<p className="name">{name}</p>
					<p className="city">{city}</p>
				</div>
			</div>
			<div className="quote_contact">
				<p className="quote">"{quote}"</p>
				<a href={`${contact}`} target="_blank">
					Contact
				</a>
			</div>
		</div>
	);
}
