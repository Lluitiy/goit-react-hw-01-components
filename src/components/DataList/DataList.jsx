import {
	StatSection,
	StatTitle,
	StatList,
	StatItem,
	StatLabel,
	StatPercentage,
} from 'components/DataList/DataList.styled';
import PropTypes from 'prop-types';

function DataList({ stats, title }) {
	return (
		<StatSection>
			{title && <StatTitle>Upload stats</StatTitle>}
			<StatList>
				{stats.map(data => (
					<StatItem key={data.id}>
						<StatLabel>{data.label}</StatLabel>
						<StatPercentage>{data.percentage}%</StatPercentage>
					</StatItem>
				))}
			</StatList>
		</StatSection>
	);
}

export default DataList;

DataList.propTypes = {
	title: PropTypes.string.isRequired,
	stats: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		})
	).isRequired,
};
