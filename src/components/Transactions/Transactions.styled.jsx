import styled from '@emotion/styled';

export const TransactionTable = styled.table`
	table-layout: fixed;
	width: 700px;
	border-collapse: collapse;
	border: 1px solid gray;
	margin: 0 auto;
	text-align: center;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const TransactionHeadRow = styled.th`
	padding: 20px;
`;
export const TransactionHead = styled.thead`
	background-color: dodgerblue;
	color: aliceblue;
	padding: 20px;

	th:nth-of-type(1) {
		width: 35%;
	}
	th:nth-of-type(2) {
		width: 35%;
	}
	th:nth-of-type(3) {
		width: 30%;
	}
`;
export const TransactionCell = styled.td`
	padding: 20px;
`;

export const TransactionBody = styled.tbody`
	tr:nth-of-type(odd) {
		background-color: whitesmoke;
	}

	tr:nth-of-type(even) {
		background-color: lightslategray;
	}

	tr:hover {
		background-color: tomato;
		color: white;
	}
`;

export const TransactionRow = styled.tr``;
