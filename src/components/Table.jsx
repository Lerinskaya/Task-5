import InfiniteScroll from 'react-infinite-scroll-component';

const Table = ({loadData, data}) => {

  return (
    <InfiniteScroll
          dataLength={data.length}
          next={loadData}
          hasMore={true}
          scrollableTarget="scrollableDiv"
          style={{ overflow: 'visible' }} 
           loader={
            <div className="spinner-border text-primary">
              <span className="visually-hidden">Loading...</span>
            </div>
          }
         >
           <table className='w-100'>
             <thead className='mb-4'>
               <tr>
                 <th>Number</th>
                 <th>Random Identifier</th>
                 <th>Full Name</th>
                 <th>Address</th>
                 <th>Phone Number</th>
               </tr>
             </thead>
             <tbody className='fs-5'>
               {data.map((item, index) => (
                 <tr key={item.id}>
                   <td>{index + 1}</td>
                   <td>{item.id}</td>
                   <td>{item.name}</td>
                   <td>{item.address}</td>
                   <td>{item.phoneNumber}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         </InfiniteScroll>
  )
}

export default Table
