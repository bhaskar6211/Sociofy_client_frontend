import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const MyListings = () => {
  const {userListings, balance }= useSelector((state)=>state.listing)
  const currency = import.meta.env.VITE_CURRENCY || '$';
  const navigate = useNavigate(); 

  const totalValues = userListings.reduce((sum,listing) => sum + (listing.price || 0), 0);
  const activeListings = userListings.filter((listing) => listing.status === 'active').length;
  const soldListings = userListings.filter((listing) => listing.status === 'sold').length;

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 pt-8'>
      
    </div>
  )
}

export default MyListings
