import {
	UserProfile,
	UserDescription,
	UserAvatar,
	UserName,
	UserTag,
	UserLocation,
	UserStatsList,
	UserStatsItem,
	UserStatsLabel,
	UserStatsQuantity,
} from 'components/User/User.styled';

const User = ({ avatar, username, tag, location, stats: { followers, views, likes } }) => {
    return (
			<UserProfile>
				<UserDescription>
					<UserAvatar
						src={avatar}
						alt="User avatar"
						width="40"
						height="40"
					/>
					<UserName>{username}</UserName>
					<UserTag>@{tag}</UserTag>
					<UserLocation>{location}</UserLocation>
				</UserDescription>
				<UserStatsList>
					<UserStatsItem>
						<UserStatsLabel> Followers</UserStatsLabel>
						<UserStatsQuantity> {followers}</UserStatsQuantity>
					</UserStatsItem>
					<UserStatsItem>
						<UserStatsLabel> Views</UserStatsLabel>
						<UserStatsQuantity> {views}</UserStatsQuantity>
					</UserStatsItem>
					<UserStatsItem>
						<UserStatsLabel> Likes</UserStatsLabel>
						<UserStatsQuantity> {likes}</UserStatsQuantity>
					</UserStatsItem>
				</UserStatsList>
			</UserProfile>
		);
}

export default User