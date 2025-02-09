import React, { JSX } from 'react';
import { Table } from '@/components/back-components/Table/table';
import { getAllDishes } from '@/libs/db/dishes/get-all-dishes';
import { HeaderRows } from '@/components/back-components/Table/header-rows/header-rows';
import { BodyRows } from '@/components/back-components/Table/body-rows/body-rows';
import { DishWithCategory } from '@/types';

const DishesPage = async (): Promise<JSX.Element> => {
  const dishes = await getAllDishes();

  return (
    <>
      <Table
        headRows={<HeaderRows type={'dishes'} />}
        bodyRows={<BodyRows<DishWithCategory> rowItems={dishes} />}
      />
    </>
  );
};

export default DishesPage;
