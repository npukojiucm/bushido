export type DropDownItemStatus =
  | { value: '1'; title: 'Активный' }
  | { value: '0'; title: 'Неактивный' };

type CategoriesTableHeaders = ['ID', 'Наименование', 'Статус'];
type DishesTableHeaders = [
  'ID',
  'Изображение',
  'Наименование',
  'Статус',
  'Цена',
  'Вес',
  'Количество порций',
  'Ингредиенты',
  'Категория',
];

export type TableHeaders = CategoriesTableHeaders | DishesTableHeaders;
