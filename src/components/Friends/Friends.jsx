import {
	FriendList,
	FiendItem,
	FriendIsOnline,
	FriendAvatar,
	FriendName,
} from 'components/Friends/Friends.styled';

function Friends({ meta }) {
	// const {avatar, name, isOnline, id} = meta
	return (
		<FriendList>
			{meta.map(({ id, isOnline, avatar, name }) => (
				<FiendItem key={id}>
					<FriendIsOnline isOnline={isOnline}></FriendIsOnline>
					<FriendAvatar src={avatar} alt="User avatar" width="48" height="48" />
					<FriendName>{name}</FriendName>
				</FiendItem>
			))}
		</FriendList>
	);
}

export default Friends;
