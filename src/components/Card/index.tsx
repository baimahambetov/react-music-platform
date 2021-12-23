import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React, { ReactElement } from 'react';
import styles from './Card.module.css';

interface CardProps {
	id: number;
	name: string;
	author: string;

	image: string;
	bgImage: string;

	likes: number;
	followers: number;
	plays: number;
}

function Card({
	name,
	author,
	image,
	bgImage,
	likes,
	followers,
	plays,
}: CardProps): ReactElement {
	return (
		<div
			style={{ backgroundImage: `url(${bgImage})` }}
			className={styles.card}
		>
			<div className={styles.content}>
				<h1 className={styles.title}>{name}</h1>
				<h3 className={styles.subtitle}>{author}</h3>
				<div className={styles.imageBlock}>
					<PlayArrowIcon
						fontSize='large'
						classes={{ root: styles.playIcon }}
					/>
					<img src={image} alt='Cover track' />
				</div>
				<div className={styles.statistics}>
					<div>
						<span>Likes</span>
						{likes}
					</div>
					<div>
						<span>Followers</span>
						{followers}
					</div>
					<div>
						<span>Plays</span>
						{plays}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
