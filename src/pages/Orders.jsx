import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { FaHandHoldingUsd } from 'react-icons/fa';
import { employeesData, employeesGrid } from '../data/dummy';

import { Header } from '../components';
const Orders = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div>
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-30 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-400">Total Donatur</p>
            <p className="text-lg font-bold mt-1">1231</p>
          </div>
          <div style={{ color: '#fff', backgroundColor: '#9CE6D5' }} className="text-2xl opacity-0.9 rounded-full float-right p-4 hover:drop-shadow-xl">
            <FaHandHoldingUsd size={50} />
          </div>
        </div>
      </div>

      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div>

          <Header title="Riwayat Transaksi" />

          <div className="flex-wrap lg:flex-nowrap justify-center">
            <button className="mx-2 my-2 ml-70 bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-6 py-2 text-xs">Filter By</button>
            <button className="mx-2 my-2 ml-20	 bg-white transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-6 py-2 text-xs">Download Tabel</button>
            <button className="mx-2 my-2 ml-20	 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">Perminataan Tarik Saldo</button>
          </div>
        </div>

        <GridComponent
          dataSource={employeesData}
          width="auto"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 5 }}
          editSettings={editing}
          toolbar={toolbarOptions}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          <Inject services={[Search, Page]} />

        </GridComponent>
      </div>
    </div>
  );
};
export default Orders;
