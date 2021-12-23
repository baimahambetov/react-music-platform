import React, {
	DetailedHTMLProps,
	FC,
	HTMLAttributes,
	PropsWithChildren,
	ReactElement,
} from 'react';
import styles from './Layout.module.css';
import Sidebar from './Sidebar';

interface LayoutProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function Layout({ children }: PropsWithChildren<LayoutProps>): ReactElement {
	return (
		<div className={styles.wrapper}>
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>{children}</div>
		</div>
	);
}

export function withLayout<T extends Record<string, unknown>>(
	Component: FC<T>
) {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
}
