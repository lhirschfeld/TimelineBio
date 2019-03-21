class Detail {
  name: string;
  description: string;
  link: string | null;
  category: Category;

  constructor(
    name: string,
    description: string,
    link: string | null,
    category: Category
  ) {
    this.name = name;
    this.description = description;
    this.link = link;
    this.category = category;
  }
}

export enum Category {
  "Biography",
  "Education",
  "Employment",
  "Publications",
  "Projects"
}

export class Event extends Detail {
  date: Date;

  constructor(
    name: string,
    description: string,
    link: string | null,
    category: Category,
    date: Date
  ) {
    super(name, description, link, category);
    this.date = date;
  }
}

export class Context extends Detail {
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
}

export default Detail;
