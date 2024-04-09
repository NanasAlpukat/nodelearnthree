import React from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
  const {user } = useSelector((state) => state.Auth);
  console.log(user?.nama)
  return (
    <div>{user?.nama}</div>
  )
}

export default Home