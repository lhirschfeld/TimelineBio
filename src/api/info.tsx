import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

import { colors } from "./constants";

export enum Category {
	"Biography",
	"Education",
	"Employment",
	"Publications",
	"Projects"
}

export class Event {
	name: string;
	description: string;
	link: string | null;
	category: Category;
	date: Date;

	constructor(name: string, description: string, link: string | null, category: Category, date: Date) {
		this.name = name;
		this.description = description;
		this.link = link;
		this.category = category;
		this.date = date;
	}

	getColor(context: Context[]): string {
		for (let c of context) {
			if (c.startDate <= this.date && this.date <= c.endDate) {
				return c.color;
			}
		}

		return colors.offBlack;
	}

	icon(): [IconPrefix, IconName] {
		switch (this.category) {
			case Category.Biography:
				return [ "fas", "heart" ];
			case Category.Education:
				return [ "fas", "school" ];
			case Category.Employment:
				return [ "fas", "briefcase" ];
			case Category.Projects:
				return [ "fas", "palette" ];
			case Category.Publications:
				return [ "fas", "newspaper" ];
		}
	}
}

export class Context {
	name: string;
	startDate: Date;
	endDate: Date;
	color: string;

	constructor(name: string, startDate: Date, endDate: Date, color: string) {
		this.name = name;
		this.startDate = startDate;
		this.endDate = endDate;
		this.color = color;
	}
}
