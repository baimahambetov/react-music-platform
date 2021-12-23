import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import cn from 'classnames';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

interface SidebarProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string;
}

const links = [
	{ href: '/liked', text: 'Liked', icon: <FavoriteIcon /> },
	{ href: '/popular', text: 'Most Played', icon: <MusicNoteIcon /> },
	{
		href: '/recently',
		text: 'Recently Played',
		icon: <WatchLaterIcon />,
	},
	{ href: '/suggested', text: 'Suggested', icon: <BookmarkIcon /> },
];

const playlists = [
	{
		href: '/playlist/1',
		text: 'Acoustic Favorite',
		icon: <LibraryMusicIcon />,
	},
	{
		href: '/playlist/2',
		text: 'Mountain Trip 2019',
		icon: <LibraryMusicIcon />,
	},
	{
		href: '/playlist/3',
		text: 'Top Alternative Rock',
		icon: <LibraryMusicIcon />,
	},
	{ href: '/playlist/4', text: 'Sunday Turn-Up', icon: <LibraryMusicIcon /> },
];

function Sidebar({ className }: SidebarProps) {
	return (
		<div className={cn(className, styles.sidebar)}>
			<div className={styles.nav}>
				<Link to='/'>
					<h1 className={styles.title}>Library</h1>
				</Link>

				{links.map((link) => (
					<Link
						key={link.href}
						to={link.href}
						className={styles.link}
					>
						{link.icon} {link.text}
					</Link>
				))}
			</div>

			<div className={styles.playlists}>
				<Link to='/playlists'>
					<h1 className={styles.title}>Playlists</h1>
				</Link>

				{playlists.map((playlist) => (
					<Link
						key={playlist.href}
						to={playlist.href}
						className={styles.link}
					>
						{playlist.icon} {playlist.text}
					</Link>
				))}
			</div>

			<button className={styles.createPlaylistBtn}>
				<Link to='/create-playlist'>Create playlist</Link>
			</button>
		</div>
	);
}

export default Sidebar;
