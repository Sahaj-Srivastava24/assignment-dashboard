import { useState, useEffect } from "react"
import type { NextPage } from 'next'
import Head from 'next/head'
import TopUserList from '../components/TopUserList'
import type { UserType } from "../types/UserType"

type TopUserType = {
  id: number,
  isTop: boolean,
  user: UserType
}

const TopUsers: NextPage = () => {
  const [ topUsers, setTopUsers ] = useState<UserType[]>([])
  useEffect(() => {
    const userIds: TopUserType[] = JSON.parse(window.localStorage.getItem("topUser")!)
    if(userIds) {
    userIds.map( user => {
      setTopUsers(prev => [...prev, user.user])
    })}
  }, [])
  console.log(topUsers)

  return (
    <>
      <Head>
        <title>Top Users</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { topUsers.length > 0 ? <TopUserList users={topUsers} /> : <h1>No Top Users</h1> }
    </>
  )
}

export default TopUsers;