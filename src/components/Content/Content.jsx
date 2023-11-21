import React from "react";
import "./Content.css";
import HeartIco from "../../assets/Heart.svg";

export const Content = (props) => {
	const { data } = props;
	let cnt = 1;
	return (
		<>
			{data.map((items) => (
				<div className="container__cards-card">
					<span className="card__heart">
						<img src={HeartIco} alt="Сердечко" />
					</span>
					{items.sale > 0 ? (
						<span class="card__info card__info_sale">
							{items.sale}% скидка
						</span>
					) : (
						""
					)}
					{items.isNew === true ? (
						<span class="card__info card__info_isNew">Новинка</span>
					) : (
						""
					)}
					<img src={"images/" + cnt++ + ".png"} alt={items.name} />
					<div className="wrapper">
						<div className="card__header">
							<h2 className="card__header-title">{items.name}</h2>
							<span className="card__header-price">
								{items.price}
							</span>
						</div>
						<div className="card__description">
							<p>{items.description}</p>
							<button className="card__description-button">
								Купить
							</button>
						</div>
					</div>
				</div>
			))}
		</>
	);
};
