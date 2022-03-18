import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface TopPageModel extends Base {}
export class TopPageModel extends TimeStamps {
  firstLevelCategory: TopLevelCategory;

  secondCategory: string;
  title: string;
  category: string;
  seoText: string;

  hh?: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };

  advantages: Array<{
    title: string;
    description: string;
  }>;

  tags: Array<string>;
}
