import React from 'react';
import Sidebar from '../Layout/Sidebar/index';
import Header from '../Layout/Header/index';


const Hoc = (BaseComponent) => {
 return function EnhancedComponent(props) {
   return (
    <>
    <Header/>
    <span className='flex'>
     <Sidebar />
     <BaseComponent {...props} />
     </span>
     </>
   );
 };
};

export default Hoc