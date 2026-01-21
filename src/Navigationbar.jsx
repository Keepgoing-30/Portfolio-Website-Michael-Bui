import React, { useRef } from 'react';
import styles from './App.module.css';

function Navigationbar() {
	const navRef = useRef(null);

	const handleMouseMove = (e) => {
		if (!navRef.current) return;

		const rect = navRef.current.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;

		// Cập nhật trực tiếp vào style của DOM, cực kỳ nhanh
		navRef.current.style.setProperty('--mouse-x', `${x}%`);
	};

	return (
		<nav
			ref={navRef} // Gán ref để truy cập DOM
			className={styles.navWrapper}
			onMouseMove={handleMouseMove}
		>
			<ul>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#'>Projects</a>
				</li>
				<li>
					<a href='#'>About</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigationbar;
