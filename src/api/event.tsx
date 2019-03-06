class Event {
  name: string;
  description: string;
  link: string | null;
  category: Category;
  date: Date;

  constructor(
    name: string,
    description: string,
    link: string | null,
    category: Category,
    date: Date
  ) {
    this.name = name;
    this.description = description;
    this.link = link;
    this.category = category;
    this.date = date;
  }
}

export enum Category {
  'Biography',
  'Education',
  'Publications',
  'Projects'
}

export default Event;
