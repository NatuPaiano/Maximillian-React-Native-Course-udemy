interface ICategoryArgs {
	id: string;
	title: string;
	color: string;
};

export default class Category {
	constructor(data: Category) {
		//Object.assign is dangerous if we don't validate inputs 
		//because we could override variables inside a class which we assign a value to in the constructor
		Object.assign(this, data);
	};
};

export default interface Category extends ICategoryArgs {};