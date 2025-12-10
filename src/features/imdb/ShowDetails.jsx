import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCreditsByTitleIdQuery } from '../../services/imdbApi';

function ShowDetails() {
  const { id } = useParams();
  const { isLoading, data } = useGetCreditsByTitleIdQuery(id);

  return (
    <div>
      <h1>Show Details</h1>

      {isLoading && <h4>Loading....</h4>}

      {!isLoading && (
        <ul className='d-flex flex-wrap list-unstyled gap-4'>
          {data?.credits?.map((credit) => {
            return (
              <li key={credit.id} style={{textAlign:"center"}}>
                <img
                  src={credit?.name?.primaryImage?.url}
                    style={{
                             width: "180px",
                             height: "180px",
                             objectFit: "cover",
                             borderRadius: "50%"
                           }}
                  alt="actor"
                />
                <h5>{credit?.name?.displayName}</h5>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ShowDetails;
