export interface Category {
  id: number;
  title: string;
  is_active: 0 | 1;
  created_at: Date;
  updated_at: Date;
}

export type CategoryCreateRequest = Omit<
  Category,
  'id' | 'created_at' | 'updated_at' | 'is_active'
> & {
  is_active?: 0 | 1;
};

export type CategoryUpdateRequest = Partial<Omit<Category, 'id' | 'created_at'>> & { id: number };
