import { colors } from "./constants";

export enum Category {
	"Biography",
	"Education",
	"Employment",
	"Publications",
	"Projects"
}

export abstract class Info {
	name: string;
	description: string;
	link: string | null;
	category: Category;

	constructor(name: string, description: string, link: string | null, category: Category) {
		this.name = name;
		this.description = description;
		this.link = link;
		this.category = category;
	}

	categoryColor(): string {
		switch (this.category) {
			case Category.Biography:
				return colors.red.default;
			case Category.Education:
				return colors.green.default;
			case Category.Employment:
				return colors.green.darkest;
			case Category.Projects:
				return colors.blue.default;
			case Category.Publications:
				return colors.blue.darkest;
		}
	}

	abstract priority(): Date;
}

export class Event extends Info {
	date: Date;

	constructor(name: string, description: string, link: string | null, category: Category, date: Date) {
		super(name, description, link, category);
		this.date = date;
	}

	priority(): Date {
		return this.date;
	}
}

export class Context extends Info {
	startDate: Date;
	endDate: Date;
	color: string;

	constructor(
		name: string,
		description: string,
		link: string | null,
		category: Category,
		startDate: Date,
		endDate: Date,
		color: string
	) {
		super(name, description, link, category);
		this.startDate = startDate;
		this.endDate = endDate;
		this.color = color;
	}

	priority(): Date {
		return this.startDate;
	}
}

export default Info;
