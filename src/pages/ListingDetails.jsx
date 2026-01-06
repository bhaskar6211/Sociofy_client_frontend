import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProfileLink } from '../assets/assets';

const ListingDetails = () => {

  const navigate = useNavigate()
  const currency = import.meta.env.VITE_CURRENCY || '$';
  
  const [listing, setListing] = useState(null);
  const profileLink = listing && getProfileLink(listing.platform, listing.username)

  return (
    <div>
      
    </div>
  )
}

export default ListingDetails
