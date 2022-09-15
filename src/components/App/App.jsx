import User from 'components/User/User';
import DataList from 'components/DataList/DataList';
import Friends from 'components/Friends/Friends';
import Transactions from 'components/Transactions/Transactions';
import user from 'components/User/userCollection';
import data from 'components/DataList/dataCollection';
import friendsCollection from 'components/Friends/friendsCollection';
import transactionsCollection from 'components/Transactions/transactionsCollection';
import Container from 'components/App/App.styled';

const App = () => {
	return (
		<Container>
				<User
					avatar={user.avatar}
					username={user.username}
					tag={user.tag}
					location={user.location}
					stats={user.stats}
				/>
				<DataList stats={data} />
				<Friends meta={friendsCollection} />
				<Transactions charges={transactionsCollection} />
		</Container>
	);
};

export default App;
