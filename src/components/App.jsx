import User from './User';
import DataList from './DataList';
import Friends from './Friends';
import Transactions from './Transactions';
import user from '../userCollection';
import data from '../dataCollection';
import friendsCollection from '../friendsCollection';
import transactionsCollection from '../transactionsCollection';

const App = () => {
	return (
		<>
			<User
				avatar={user.avatar}
				username={user.username}
				tag={user.tag}
				location={user.location}
				stats={user.stats}
			/>
			<DataList stats={data} />
			<Friends meta={friendsCollection} />
			<Transactions charges={ transactionsCollection} />
		</>
	);
};

export default App;
