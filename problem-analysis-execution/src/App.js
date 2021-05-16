import React from "react";
import groupBy from "./groupBy";

function App() {
	const posts = [
		{
			id: 1,
			name: "Post 1.1",
			author: {
				id: 1,
				name: "Author 1",
			},
		},
		{
			id: 2,
			name: "Post 1.2",
			author: {
				id: 1,
				name: "Author 1",
			},
		},
		{
			id: 3,
			name: "Post 2.1",
			author: {
				id: 2,
				name: "Author 2",
			},
		},
		{
			id: 4,
			name: "Post 3.1",
			author: {
				id: 3,
				name: "Author 3",
			},
		},
		{
			id: 5,
			name: "Post 2.2",
			author: {
				id: 2,
				name: "Author 2",
			},
		},
		{
			id: 6,
			name: "Post 1.3",
			author: {
				id: 1,
				name: "Author 1",
			},
		},
	];

	const postsGroupedByAuthor = groupBy(posts, post => post.author.name);

	return (
		<div>
			{Object.keys(postsGroupedByAuthor).map((authorName, index) => {
				return (
					<React.Fragment key={index}>
						<h2>{authorName}:</h2>
						<React.Fragment>
							{postsGroupedByAuthor[authorName].map((post, index) => (
								<p style={{ marginLeft: "30px" }} key={index}>
									{post.name}
								</p>
							))}
						</React.Fragment>
					</React.Fragment>
				);
			})}
		</div>
	);
}

export default App;
