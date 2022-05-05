import React, { useContext } from "react";
import { Context } from "../../store/appContext.js";
import PropTypes from "prop-types";
import actorCardStyles from "./actor-card.module.css"

export const ActorCard = prop => {
	const { store, actions } = useContext(Context);

	return (
		<div className={actorCardStyles.actor}>
			<img
				src={
					prop.actor.profile_path
						? `${store.IMG_ACTOR}${prop.actor.profile_path}`
						: "https://www.intra-tp.com/wp-content/uploads/2017/02/no-avatar.png"
				}
				alt={prop.name}
			/>
			<div className={actorCardStyles.character_container}>
				<span className={actorCardStyles.actor_name}>{prop.actor.name}</span>
				<span> as </span>
				<span className={actorCardStyles.actor_character}>
					{prop.actor.character
						? prop.actor.character
						: prop.actor.name}
				</span>
			</div>
		</div>
	);
};

ActorCard.propTypes = {
	profile_path: PropTypes.string,
	name: PropTypes.string,
	character: PropTypes.string
};
