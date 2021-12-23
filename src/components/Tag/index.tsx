import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { ReactElement } from 'react';
import styles from './Tag.module.css';

interface TagProps {
	text: string;
}

function Tag({ text }: TagProps): ReactElement {
	return (
		<div className={styles.tag}>
			{text} <ArrowDropDownIcon />
		</div>
	);
}

export default Tag;
