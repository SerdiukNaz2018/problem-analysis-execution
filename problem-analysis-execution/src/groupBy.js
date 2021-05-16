const groupBy = (collection, criteria) => {
	return collection.reduce((accumulator, currentValue) => {
		(accumulator[criteria(currentValue)] = accumulator[criteria(currentValue)] || []).push(currentValue);
		return accumulator;
	}, {});
};

export default groupBy;
