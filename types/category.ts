export interface Category {
  id: number;
  title: string;
  is_active: 0 | 1;
  created_at: Date;
  updated_at: Date;
}

interface BaseCategory {
  title: string;
  is_active: 0 | 1;
}

export type CategoryFormData = {
  is_active: string;
} & Omit<BaseCategory, 'is_active'>;

export type CreateOrUpdateCategory = {
  id?: number;
} & BaseCategory;
