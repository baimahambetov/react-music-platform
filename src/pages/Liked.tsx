import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import Card from '../components/Card';
import Tag from '../components/Tag';
import styles from '../styles/Home.module.css';

interface LikedProps {}

const tags = [
	{ text: 'Songs' },
	{ text: 'Pop, R&B, Hip-Hop, Dance' },
	{ text: 'Recent' },
];

const cards = [
	{
		id: 1,
		name: 'All the Right Moves',
		author: 'Leonardo Lastra',

		image: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXJwdW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		bgImage: '/images/bg.jpg',

		likes: 62,
		followers: 23,
		plays: 11,
	},
];

function Liked({}: LikedProps): JSX.Element {
	return (
		<div>
			<div className={styles.header}>
				<h1 className={styles.title}>Liked tracks</h1>
				<button className={styles.searchBtn}>
					<SearchIcon fontSize='large' viewBox='0 0 20 20' />
				</button>
			</div>

			<div className={styles.tags}>
				{tags.map((tag, index) => (
					<Tag key={index} text={tag.text} />
				))}
			</div>

			<div className={styles.cards}>
				{cards.map((card) => (
					<Card key={card.id} {...card} />
				))}
			</div>
		</div>
	);
}

export default Liked;
