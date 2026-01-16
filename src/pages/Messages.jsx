import React, { useEffect, useState } from 'react'
import { dummyChats } from '../assets/assets';

const Messages = () => {

const user = {id: 'user_1'};

const [chats, setChats] = useState([]);
const [searchQuery, setSearchQuery] = useState("");
const [loading, setLoading] = useState(true);

const fetchUserChats = async () => {
  setChats(dummyChats);
  setLoading(false);
}

useEffect(()=> {
  fetchUserChats()
  const interval = setInterval(()=> {
    fetchUserChats();
  },10 * 1000);
  return () => clearInterval(interval);
}, [])

  return (
    <div>
      
    </div>
  )
}

export default Messages
