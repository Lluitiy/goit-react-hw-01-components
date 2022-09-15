import {
	StatSection,
	StatTitle,
	StatList,
	StatItem,
	StatLabel,
	StatPercentage,
} from 'components/DataList/DataList.styled';

function DataList({ stats }) {
	return (
		<StatSection>
			<StatTitle>Upload stats</StatTitle>
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
