import { JSX } from 'react';
import { BodyRowsProps } from '@/components/back-components/Table/body-rows/body-rows.props';
import { Category, DishWithCategory } from '@/types';
import { useRouter } from 'next/navigation';

export const BodyRows = <T extends DishWithCategory | Category>({
  rowItems,
}: BodyRowsProps<T>): JSX.Element => {
  const router = useRouter();

  const handleRowClick = (item: T): void => {
    if ('price' in item) {
      router.push(`/admin/dishes/edit/${item.id}`);
    } else {
      router.push(`/admin/categories/edit/${item.id}`);
    }
  };

  return (
    <>
      {rowItems.map((item) => (
        <tr key={item.id} onClick={() => handleRowClick(item)}>
          <td>{item.id}</td>
          {'image_link' in item && <td>{item.image_link}</td>}
          <td>{item.title}</td>
          <td>{item.is_active ? 'Активен' : 'Неактивен'}</td>
          {'price' in item && (
            <>
              <td>{item.price}</td>
              <td>{item.weight}</td>
              <td>{item.count_portion}</td>
              <td>{item.ingredients?.join(', ')}</td>
              <td>{item.category_title}</td>
            </>
          )}
        </tr>
      ))}
    </>
  );
};
