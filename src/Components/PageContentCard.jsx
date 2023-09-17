import React, { useContext } from 'react';

const PageContentCard = () => {
    const[data,setData] = useContext(mycontext)
    return (
    <div>
          {data.map((item, index) => {
              return (
                  <div className="card" key={item.id}>
                   <h2>{item.title}</h2>
                    <p>{item.text}</p>
                   </div>                     
              )
          })}
     </div>  
  );
};

export default PageContentCard;
