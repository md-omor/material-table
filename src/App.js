import { Menu, Transition } from "@headlessui/react";
import AddIcon from "@material-ui/icons/Add";
import GetAppIcon from "@material-ui/icons/GetApp";
import MaterialTable from "material-table";
import React, { Fragment, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";

function App() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [tableData, setTableData] = useState([
    {
      name: "Raj",
      email: "Raj@gmail.com",
      phone: 7894561230,
      age: null,
      gender: "M",
      city: "Chennai",
      fee: 78456,
    },
    {
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      age: 35,
      gender: "M",
      city: "Delhi",
      fee: 456125,
    },
    {
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      fee: 458796,
    },
    {
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      age: 20,
      gender: "M",
      city: "Mumbai",
      fee: 874569,
    },
    {
      name: "Neha",
      email: "neha@gmail.com",
      phone: 7845621301,
      age: 25,
      gender: "F",
      city: "Patna",
      fee: 748521,
    },
    {
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      age: 35,
      gender: "M",
      city: "Delhi",
      fee: 456125,
    },
    {
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      fee: 458796,
    },
    {
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      age: 20,
      gender: "M",
      city: "Mumbai",
      fee: 874569,
    },
    {
      name: "Raj",
      email: "Raj@gmail.com",
      phone: 7894561230,
      age: null,
      gender: "M",
      city: "Chennai",
      fee: 78456,
    },
    {
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      age: 35,
      gender: "M",
      city: "Delhi",
      fee: 456125,
    },
    {
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      fee: 458796,
    },
    {
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      age: 20,
      gender: "M",
      city: "Mumbai",
      fee: 874569,
    },
  ]);
  const columns = [
    {
      title: "Name",
      field: "name",
      sorting: false,
      filtering: false,
      cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" },
    },
    { title: "Email", field: "email", filterPlaceholder: "filter" },
    { title: "Phone Number", field: "phone", align: "center", grouping: false },
    {
      title: "Age",
      field: "age",
      emptyValue: () => <em>null</em>,
      render: (rowData) => (
        <div
          style={{
            background: rowData.age >= 18 ? "#008000aa" : "#f90000aa",
            borderRadius: "4px",
            paddingLeft: 5,
          }}
        >
          {rowData.age >= 18 ? "18+" : "18-"}
        </div>
      ),
      searchable: false,
      export: false,
    },
    { title: "Gender", field: "gender", lookup: { M: "Male", F: "Female" } },
    { title: "City", field: "city", filterPlaceholder: "filter" },
    {
      title: "School Fee",
      field: "fee",
      type: "currency",
      currencySetting: { currencyCode: "INR", minimumFractionDigits: 1 },
      cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" },
    },
  ];
  return (
    <>
      <div className="">
        <div className=" ">
          <div className="container mx-auto flex w-full bannerBg h-[120px]  items-center p-5">
            <div className="">
              <img src="/images/DAINTREE.svg" alt="w-full h-full" />
            </div>
            <h1 className="text-white font-primary font-bold text-4xl w-full text-center">
              Lorem ipsum dolor sit amet consectetur officiis.
            </h1>
          </div>
        </div>

        {/* this is the navbar section  */}

        <div className="flex justify-between items-center container mx-auto  p-5 border-b border-black">
          <h1 className="text-black font-primary font-bold text-base">
            navbar
          </h1>
          <div className="flex gap-10">
            <div className="flex items-center gap-2 justify-center">
              <FiSettings />
              <h2 className="text-black font-primary font-bold text-sm">
                settings{" "}
              </h2>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <SlCalender />
              <h2 className="text-black font-primary font-bold text-sm">
                events{" "}
              </h2>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex gap-2 items-center justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    <FaRegUser />
                    <h2 className="text-black font-primary font-bold text-sm">
                      profile
                    </h2>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        {/* this is the search box and dropdown  */}

        <div className="container mx-auto py-5 flex justify-between items-center border-b border-black">
          <div className="">
            <input
              type="text"
              placeholder="search"
              className="outline-none bg-white rounded-md py-2 px-3 border border-black"
            />
          </div>

          {/* this is the button with dropdown  */}

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                Options
                <BiChevronDown className="-mr-1 ml-2 h-5 w-5" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <MaterialTable
          columns={columns}
          data={tableData}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                setTableData([...tableData, newRow]);

                setTimeout(() => resolve(), 500);
              }),
            onRowUpdate: (newRow, oldRow) =>
              new Promise((resolve, reject) => {
                const updatedData = [...tableData];
                updatedData[oldRow.tableData.id] = newRow;
                setTableData(updatedData);
                setTimeout(() => resolve(), 500);
              }),
            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                const updatedData = [...tableData];
                updatedData.splice(selectedRow.tableData.id, 1);
                setTableData(updatedData);
                setTimeout(() => resolve(), 1000);
              }),
          }}
          actions={[
            {
              icon: () => <GetAppIcon />,
              tooltip: "Click me",
              onClick: (e, data) => console.log(data),
              // isFreeAction:true
            },
          ]}
          onSelectionChange={(selectedRows) => console.log(selectedRows)}
          options={{
            sorting: true,
            search: true,
            searchFieldAlignment: "right",
            searchAutoFocus: true,
            searchFieldVariant: "standard",
            filtering: true,
            paging: true,
            pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
            pageSize: 5,
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            paginationPosition: "both",
            exportButton: true,
            exportAllData: true,
            exportFileName: "TableData",
            addRowPosition: "first",
            actionsColumnIndex: -1,
            selection: true,
            showSelectAllCheckbox: false,
            showTextRowsSelected: false,
            selectionProps: (rowData) => ({
              disabled: rowData.age == null,
              // color:"primary"
            }),
            grouping: true,
            columnsButton: true,
            rowStyle: (data, index) =>
              index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: "#f44336", color: "#fff" },
          }}
          title="Student Information"
          icons={{ Add: () => <AddIcon /> }}
        />
      </div>
    </>
  );
}

export default App;
