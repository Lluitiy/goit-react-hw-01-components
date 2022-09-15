import styled from '@emotion/styled';

export const TransactionTable = styled.table`
	table-layout: fixed;
	width: 700px;
	border-collapse: collapse;
	border: 1px solid gray;
	margin: 0 auto;
	text-align: center;
`;

export const TransactionHeadRow = styled.th`
	padding: 20px;
`;
export const TransactionHead = styled.thead`
	background-color: dodgerblue;
	color: aliceblue;
	padding: 20px;

	th:nth-child(1) {
		width: 35%;
	}
	th:nth-child(2) {
		width: 35%;
	}
	th:nth-child(3) {
		width: 30%;
	}
`;
export const TransactionCell = styled.td`
	padding: 20px;
`;

export const TransactionBody = styled.tbody`
	tr:nth-child(odd) {
		background-color: whitesmoke;
	}

	tr:nth-child(even) {
		background-color: lightslategray;
	}

	tr:hover {
		background-color: tomato;
		color: white;
	}
`;

export const TransactionRow = styled.tr``;
