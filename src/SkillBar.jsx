import styles from './Skills.module.css';

const SkillBar = ({ name, level, barColor }) => {
	return (
		<div className={styles.skillRow} style={{ backgroundColor: barColor }}>
			<p className={styles.label}>{name}</p>

			<p className={level === 'Basic' ? styles.active : ''}>Basic</p>
			<p className={level === 'Intermediate' ? styles.active : ''}>Intermediate</p>
			<p className={level === 'Advanced' ? styles.active : ''}>Advanced</p>
		</div>
	);
};

export default SkillBar;
