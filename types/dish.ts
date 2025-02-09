export interface Dish {
  id: number;
  title: string;
  image_link: string;
  price: number;
  weight: number;
  ingredients: string[];
  count_portion: number;
  category_id: number | null;
  is_active: 0 | 1;
  created_at: Date;
  updated_at: Date;
}

export interface DishWithCategory extends Dish {
  category_title: string | null;
}

type BaseDishFormData = Omit<Dish, 'created_at' | 'updated_at' | 'image_link'>;

export type DishFormData = {
  title: string;
  category_id: string;
  is_active: string;
} & Partial<Record<keyof Omit<BaseDishFormData, 'title' | 'category_id' | 'is_active'>, string>> & {
    image_file?: File;
  };

export type CreateOrUpdateDish = {
  title: string;
  category_id: number | null;
  is_active: 0 | 1;
} & Partial<Omit<BaseDishFormData, 'title' | 'category_id' | 'is_active'>> & {
    id?: number;
    image_link?: string;
  };
