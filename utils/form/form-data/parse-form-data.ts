import { CategoryFormData } from '@/types';

export const transformCategory = (data: Record<string, string>): CategoryFormData => ({
  title: data.title,
  is_active: data.is_active === '1' ? 1 : 0,
});

export const parseFormData = <T extends Record<string, any>>(
  formData: FormData,
  // eslint-disable-next-line no-unused-vars
  transform: (data: Record<string, string>) => T,
): T => {
  const data = Object.fromEntries(formData.entries()) as Record<string, string>;

  return transform(data);
};
