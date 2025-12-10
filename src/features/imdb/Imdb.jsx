// import React from 'react'
// import { useGetAllTitlesQuery } from '../../services/imdbApi'
// import { Link, Outlet } from 'react-router-dom';

// function Imdb() {
//   var { isLoading, data } = useGetAllTitlesQuery();

//   return (
//     <div>
//       <h1>Imdb</h1>

//       {isLoading && <h3>Loading....</h3>}

//       {!isLoading && (
//         <ul className='d-flex flex-wrap list-unstyled gap-3 justify-content-evenly'>
//           {
//             data?.titles?.map((title) => {
//               return (
//                 <Link key={title.id} to={`/showdetails/${title.id}`}>
//                   <li>
//                     <div className='card' style={{ width: "18rem" }}>
//                       <img
//                         src={title.primaryImage?.url}
//                         className='card-img-top'
//                         alt="poster"
//                       />
//                       <div className='card-body'>
//                         <h5>{title.plot?.slice(0, 40)}</h5>
//                       </div>
//                     </div>
//                   </li>
//                 </Link>
//               );
//             })
//           }
//         </ul>
//       )}
//     </div>
//   )
// }

// export default Imdb;


import React from 'react'
import { useGetAllTitlesQuery } from '../../services/imdbApi'
import { Link } from 'react-router-dom';

function Imdb() {
  const { isLoading, data } = useGetAllTitlesQuery();

  return (
    <div>
      <h1>Imdb</h1>

      {isLoading && <h3>Loading....</h3>}

      {!isLoading && (
        <ul className='d-flex flex-wrap list-unstyled gap-3 justify-content-evenly'>
          {data?.titles?.map((title) => (
            <li key={title.id}>
              <Link
                to={`/showdetails/${title.id}`}
                className="text-decoration-none text-dark"
              >
                <div className='card' style={{ width: "18rem" }}>
                  <img
                    src={title.primaryImage?.url}
                    className='card-img-top'
                    alt="poster"
                  />
                  <div className='card-body'>
                    <h5>{title.plot?.slice(0, 40)}</h5>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Imdb;
