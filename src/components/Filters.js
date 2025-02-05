import React from 'react'

export const Filters = ({filterData}) => {
  return (
    <div>{filterData.map((data) =>{
        return(

        <button key = {data.id}>
            {data.title};
        </button>
        )
    })}</div>
  )
}
export default Filters;
