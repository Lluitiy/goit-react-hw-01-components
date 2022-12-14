import {
	TransactionTable,
	TransactionHead,
	TransactionHeadRow,
	TransactionCell,
	TransactionBody,
	TransactionRow,
} from 'components/Transactions/Transactions.styled';
import PropTypes from 'prop-types';

function Transactions({ charges }) {
	return (
		<TransactionTable>
			<TransactionHead>
				<TransactionRow>
					<TransactionHeadRow>Type</TransactionHeadRow>
					<TransactionHeadRow>Amount</TransactionHeadRow>
					<TransactionHeadRow>Currency</TransactionHeadRow>
				</TransactionRow>
			</TransactionHead>
			<TransactionBody>
				{charges.map(({ id, type, amount, currency }) => (
					<TransactionRow key={id}>
						<TransactionCell>{type}</TransactionCell>
						<TransactionCell>{amount}</TransactionCell>
						<TransactionCell>{currency}</TransactionCell>
					</TransactionRow>
				))}
			</TransactionBody>
		</TransactionTable>
	);
}
export default Transactions;

Transactions.propTypes = {
	charges: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		})
	).isRequired,
};
