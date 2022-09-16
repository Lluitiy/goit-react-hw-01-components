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
	gap: 8px;
	width: 400px;
	margin: 0 auto;
`;

export const StatItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 7px;
	padding: 10px;
	width: 20%;
	border: 1px solid lightgray;
	border-left: none;
	background-color: ${setBgColor};
	box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	&:nth-of-type(1) {
		border-left: 1px solid gray;
	}
`;

export const StatLabel = styled.span``;

export const StatPercentage = styled.span``;

function setBgColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
