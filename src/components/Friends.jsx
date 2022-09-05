function Friends({ meta }) {
	// const {avatar, name, isOnline, id} = meta
	return (
		<ul className="friend-list">
			{meta.map(({ id, isOnline, avatar, name }) => (
				<li className="friend-item" key={id}>
					<span
						className={isOnline ? 'friend-status' : 'friend-status offline'}
					></span>
					<img
						className="friend-avatar"
						src={avatar}
						alt="User avatar"
						width="48"
						height="48"
					/>
					<p className="friend-name">{name}</p>
				</li>
			))}
		</ul>
	);
}

export default Friends;
