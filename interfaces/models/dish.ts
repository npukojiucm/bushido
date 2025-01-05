export interface Dish {
  id: number;
  title: string;
  image_link?: string;
  price?: number;
  weight?: number;
  ingredients?: string[];
  count_portion?: number;
  category_id?: number | null;
  is_active?: 0 | 1;
  created_at: Date;
  updated_at: Date;
}

export type DishCreateRequest = Omit<Dish, 'id' | 'created_at' | 'updated_at'>;

export type DishUpdateRequest = Partial<Omit<Dish, 'created_at'>> & { id: number };
