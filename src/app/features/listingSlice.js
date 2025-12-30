import {createSlice} from '@reduxjs/toolkit'
import { dummyListings } from '../../assets/assets'
import { use } from 'react'

const listingSlice = createSlice({
  name: 'listing',
  initialState: {
    listings: dummyListings,
    userListings: dummyListings,
    balance:{
        earned: 0,
        withdrawn: 0,
        available: 0
    }
  }
})