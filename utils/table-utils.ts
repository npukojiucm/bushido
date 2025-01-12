import { TableHeader } from '@/types';

export const headerRows: Record<'categories' | 'dishes', TableHeader> = {
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

export const dropDownItemsStatus = [
  { value: '1', title: 'Активна' },
  { value: '0', title: 'Неактивна' },
];
