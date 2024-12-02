import React, { Fragment } from 'react';
import { Dialog, Transition } from "@headlessui/react";
import {XCircleIcon} from "@heroicons/react/outline"


const ModalComponent=(props)=> {
    const { onClose, show, title, children } = props;
  return (
    <Transition appear show={show} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={onClose}>
      <div className="fixed inset-0 bg-back-drop" aria-hidden="true" />
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel
              className="w-full max-w-lg h-full
                       lg:max-w-2xl xl:max-w-4xl 
                       mx-auto transform overflow-hidden 
                       rounded-2xl bg-white p-6 
                       text-left align-middle 
                       shadow-xl transition-all"
            >
              <Dialog.Title
                as="h3"
                className="text-lg flex justify-between font-medium leading-6 text-gray-900"
              >
                <span className="text-primary text-xl">{title}</span>
                <span>
                  <XCircleIcon
                    onClick={onClose}
                    className="w-8 h-8 cursor-pointer bg-white"
                  />
                </span>
              </Dialog.Title>
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
  )
}


export default ModalComponent;
