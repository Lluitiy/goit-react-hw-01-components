import styled from '@emotion/styled';

export const FriendList = styled.ul`
	margin-top: 30px;
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 16px;
`;

export const FiendItem = styled.li`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: #ffffff;
	width: 200px;
	padding: 10px;
	border: 1px solid lightgoldenrodyellow;
	border-radius: 4px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
		rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const FriendIsOnline = styled.span`
	display: block;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	font-size: 0px;
	background-color: ${isOnlineColor};
	margin-right: 5px;
`;

export const FriendAvatar = styled.img`
	border-radius: 4px;
	margin-right: 5px;
`;

export const FriendName = styled.p`
	font-weight: 500;
`;
function isOnlineColor(meta) {
	if (meta.isOnline) {
		return 'green';
	} else {
		return 'red';
	}
}
