import styled from '@emotion/styled';

export const StatSection = styled.section`
	margin: 0px auto;
`;

export const StatTitle = styled.h2`
	text-align: center;
`;

export const StatList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
`;

export const StatItem = styled.li`
	display: flex;
	flex-direction: column;
	gap: 7px;
	padding: 10px;

	border: 1px solid gray;
	border-left: none;
    background-color: ${setBgColor};
	&:nth-child(1) {
		border-left: 1px solid gray;
	}
`;

export const StatLabel = styled.span``;

export const StatPercentage = styled.span``;

function setBgColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
