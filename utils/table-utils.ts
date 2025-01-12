import { Category, DropDownItemStatus, TableHeaders } from '@/types';

export const headerRows: Record<'categories' | 'dishes', TableHeaders> = {
  categories: ['ID', 'Наименование', 'Статус'],
  dishes: [
    'ID',
    'Изображение',
    'Наименование',
    'Статус',
    'Цена',
    'Вес',
    'Количество порций',
    'Ингредиенты',
    'Категория',
  ],
};

export const dropDownItemsStatus: DropDownItemStatus[] = [
  { value: '1', title: 'Активный' },
  { value: '0', title: 'Неактивный' },
];

export const isCategory = (item: DropDownItemStatus | Partial<Category>): item is Category => {
  return 'id' in item && 'title' in item;
};
