export const parseFormData = <T extends Record<string, string | File>>(formData: FormData): T => {
  const data = {} as T;

  formData.forEach((value, key) => {
    data[key as keyof T] = (value instanceof File ? value : String(value)) as unknown as T[keyof T];
  });

  return data;
};
