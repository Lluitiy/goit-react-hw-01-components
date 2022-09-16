import styled from '@emotion/styled';

export const UserProfile = styled.div`
	margin: 0 auto;
	width: 180px;
	border: 1px solid gray;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const UserDescription = styled.div`
	width: 100%;
	padding-top: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	color: gray;
	margin-bottom: 20px;
`;

export const UserAvatar = styled.img`
	border-radius: 50%;
`;
export const UserName = styled.p`
	color: black;
	font-weight: 700;
	letter-spacing: 0.03;
`;

export const UserTag = styled.p``;
export const UserLocation = styled.p``;

export const UserStatsList = styled.ul`
	display: flex;
	flex-direction: row;
	margin: 0;
	padding: 0;
	background-color: lightgray;
	width: 100%;
`;

export const UserStatsItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 33.3333%;
	padding: 5px;
	border-top: 1px solid gray;
	border-right: 1px solid gray;

	&:nth-of-type(3) {
		border-right: none;
	}
`;

export const UserStatsLabel = styled.span`
	font-size: 10px;
	color: gray;
`;

export const UserStatsQuantity = styled.span`
	font-size: 10px;
	color: black;
	font-weight: 700;
`;
