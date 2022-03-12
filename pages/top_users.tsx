import { useState, useEffect } from "react"
import type { NextPage } from 'next'
import Head from 'next/head'
import TopUserList from '../components/TopUserList'
import type { UserType } from "../types/UserType"
import getTopUsers from "../helpers/getTopUsers"

const TopUsers: NextPage = () => {
  const [ topUsers, setTopUsers ] = useState<UserType[]>([])
  useEffect(() => {
    const userIds: UserType[] = getTopUsers();
    setTopUsers(userIds)
  }, [])  
  return (
    <>
      <Head>
        <title>Top Users</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopUserList users={topUsers} setUsers={setTopUsers} />
    </>
  )
}

export default TopUsers;