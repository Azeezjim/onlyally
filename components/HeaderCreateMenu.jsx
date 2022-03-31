import { Menu, Transition, Dialog } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { MdSmartDisplay, MdClose, MdCheck } from "react-icons/md";
import { BsPlusSquare } from "react-icons/bs";
import {BiImageAdd} from "react-icons/bi"
import { HiSelector } from "react-icons/hi";
import { TiVideo } from "react-icons/ti";
import {FaMusic, FaVideo} from "react-icons/fa";
import Button from "./Button";
import { Listbox } from "@headlessui/react";

const people = [
  { id: 1, name: "Choose Category", unavailable: false },
  { id: 2, name: "movies", unavailable: false },
  { id: 3, name: "songs", unavailable: false },
  { id: 4, name: "crypto", unavailable: true },
  { id: 5, name: "travel", unavailable: false },
];

const HeaderMenuDropdown = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(people[0]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      {" "}
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button>
          <div className="icon-bg">
            <BsPlusSquare className="h-5 w-5 text-white" />
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 origin-top-right right-5   w-48 mt-2  bg-[#f9f9f9] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={openModal}
                    className={`${
                      active
                        ? "bg-playRed text-white"
                        : "text-black font-semibold"
                    } group flex rounded-md items-center  w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fff"
                        viewBox="0 0 16 16"
                        className="h-5 w-5 mr-2 text-white"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#BA253D"
                        viewBox="0 0 16 16"
                        className="h-5 w-5 text-playRed mr-2 "
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z"
                        ></path>
                      </svg>
                    )}
                    Create Post
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-playRed text-white"
                        : "text-black font-semibold"
                    } group flex rounded-md items-center  w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <MdSmartDisplay className="h-5 w-5 mr-2 text-white" />
                    ) : (
                      <MdSmartDisplay className="h-5 w-5 text-playRed mr-2 " />
                    )}
                    Channel Post
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-playRed text-white"
                        : "text-black font-semibold"
                    } group flex rounded-md items-center  w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-white"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12,12.75c1.63,0,3.07,0.39,4.24,0.9c1.08,0.48,1.76,1.56,1.76,2.73L18,17c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1l0-0.61 c0-1.18,0.68-2.26,1.76-2.73C8.93,13.14,10.37,12.75,12,12.75z M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2 C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43L0,17 c0,0.55,0.45,1,1,1l3.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2 C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14c-0.39,0-0.76,0.04-1.13,0.1 c0.4,0.68,0.63,1.46,0.63,2.29V18l3.5,0c0.55,0,1-0.45,1-1L24,16.43z M12,6c1.66,0,3,1.34,3,3c0,1.66-1.34,3-3,3s-3-1.34-3-3 C9,7.34,10.34,6,12,6z"
                          fill="#fff"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#BA253D"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-white"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12,12.75c1.63,0,3.07,0.39,4.24,0.9c1.08,0.48,1.76,1.56,1.76,2.73L18,17c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1l0-0.61 c0-1.18,0.68-2.26,1.76-2.73C8.93,13.14,10.37,12.75,12,12.75z M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2 C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43L0,17 c0,0.55,0.45,1,1,1l3.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2 C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14c-0.39,0-0.76,0.04-1.13,0.1 c0.4,0.68,0.63,1.46,0.63,2.29V18l3.5,0c0.55,0,1-0.45,1-1L24,16.43z M12,6c1.66,0,3,1.34,3,3c0,1.66-1.34,3-3,3s-3-1.34-3-3 C9,7.34,10.34,6,12,6z"
                          fill="#BA253D"
                        ></path>
                      </svg>
                    )}
                    Group Post
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-playRed text-white"
                        : "text-black font-semibold"
                    } group flex rounded-md items-center  w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <TiVideo className="text-white h-5 w-5 mr-2" />
                    ) : (
                      <TiVideo className="text-playRed h-5 w-5 mr-2" />
                    )}
                    Go live
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg p-6 my-10 overflow-hidden h-[450px] text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="div"
                  className="flex justify-between text-lg font-medium leading-6 text-gray-900"
                >
                  <div onClick={closeModal}>
                    <MdClose className="h-7 w-7 cursor-pointer" />
                  </div>
                  
                  <Button text="POST" active={true} extraClasses="w-24 h-8" />
                </Dialog.Title>
                <div className="mt-2">
                  <textarea
                    className="
        form-control
        overflow-auto
        block
        max-h-[calc(100vh - 220px)]
        min-h-[130px]
        resize-none
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-transparent bg-clip-padding
        focus:ring-0
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white border border-playRed focus:outline-none
      "
                    rows="3"
                    placeholder="Create new post"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between my-3">
                  <p className="text-lg font-semibold">
                    CATEGORY &#40;OPTIONAL&#41;
                  </p>
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1 w-1/2">
                      <Listbox.Button className="relative w-full py-2 pl-3 pr-10 z-40 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <HiSelector
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute w-full py-1 mt-1 z-40 overflow-y-scroll overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {people.map((person, personIdx) => (
                            <Listbox.Option
                              key={personIdx}
                              className={({ active }) =>
                                `cursor-default select-none relative py-2 pl-10 pr-4 ${
                                  active
                                    ? "text-amber-900 bg-amber-100"
                                    : "text-gray-900"
                                }`
                              }
                              value={person}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <MdCheck
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                <div className="row-container space-x-4 my-4">
                  <div className="row-container space-x-1 bg-gray-100 h-8 w-[130px] rounded-md relative">
                    <BiImageAdd className="w-4 h-4"/>
                    <span className="text-xs">Upload Images</span>
                    <input accept="image/x-png, image/gif, image/jpeg" multiple="multiple" type="file" className="opacity-0 absolute top-0 right-o min-w-full min-h-full text-right bg-white block placeholder:opacity-100"  />
                   
                    {/* onChange={e => setSelectedImage(e.target.files[0])} */}
                  </div>
                  <div className="row-container space-x-1 bg-gray-100 h-8 w-[130px] rounded-md relative">
                    <FaVideo className="w-3 h-3"/>
                    <span className="text-xs">Upload Video</span>
                    <input accept="video/*" type="file" className="opacity-0 absolute top-0 right-o min-w-full min-h-full text-right bg-white block placeholder:opacity-100" placeholder="Upload Images"  />
                   
                    {/* onChange={e => setSelectedImage(e.target.files[0])} */}
                  </div>
                  <div className="row-container space-x-1 bg-gray-100 h-8 w-[130px] rounded-md relative">
                    <FaMusic className="w-3 h-3"/>
                    <span className="text-xs">Audio Upload</span>
                    <input accept="image/*" type="file" className="opacity-0 absolute top-0 right-o min-w-full min-h-full text-right bg-white block placeholder:opacity-100" placeholder="Upload Images"  />
                   
                    {/* onChange={e => setSelectedImage(e.target.files[0])} */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default HeaderMenuDropdown;
