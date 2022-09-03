import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { User } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		<User/>

	</React.StrictMode>
);
		// <div>
		// 	<div>
		// 		<img
		// 			src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
		// 			alt="User avatar"
		// 		/>
		// 		<p>Petra Marica</p>
		// 		<p>@pmarica</p>
		// 		<p>Salvador, Brasil</p>
		// 	</div>

		// 	<ul>
		// 		<li>
		// 			<span>Followers</span>
		// 			<span>1000</span>
		// 		</li>
		// 		<li>
		// 			<span>Views</span>
		// 			<span>2000</span>
		// 		</li>
		// 		<li>
		// 			<span>Likes</span>
		// 			<span>3000</span>
		// 		</li>
		// 	</ul>
		// </div>
// const element = React.createElement('div', {
// 	a: 5,
// 	b: 10,
// 	children: 'Hello world'
// });
// console.log('🚀 ~ element', element);
// ReactDOM.render(element, document.querySelector('#root'));
