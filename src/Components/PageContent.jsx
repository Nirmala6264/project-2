import React, { useState } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const PageContant = () => {
  const [data, setData] = useState([]);
  // const jsonData = [
  //     {
  //     id: 1,
  //     title: "Feedback",
  //     text :"Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. ."
  //   },{
  //   id: 2,
  //     title: "Weekly Task",
  //     text:"Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. ."
  //   }, {
  //     id: 3,
  //     title: "Lyrics",
  //     text:"Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. ."
  //   }
      
    
  // ]
  
  return (
    <div>
      <p className='mynotes'>My Notes</p>
      <p className='Recent'>Recently viewed</p>

      
      {/* <mycontext.Provider value={[data,setData]}>
      <PageContantCard />
      </mycontext.Provider> */}
      <div className='card-container'>
      <div className='card'>
        <div><h2>Feedbacks      <EditOutlinedIcon/> <DeleteOutlineOutlinedIcon/></h2>
        <p>"Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. ."</p></div>
      </div>
      <div className='card'>
        <div><h2>Weekly Task    <EditOutlinedIcon/> <DeleteOutlineOutlinedIcon/></h2>
        <p>"Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. ."</p></div>
      </div>
      <div className='card'>
        <div><h2>Workouts     <EditOutlinedIcon/> <DeleteOutlineOutlinedIcon/></h2>
        <p>"Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. ."</p></div>
        </div>
      </div>
      
          </div>
      
  );
};

export default PageContant;
