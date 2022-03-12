import type { NextPage } from 'next'
import Head from 'next/head'
import UserList from '../components/Users/UserList'
import getTopUsers from '../helpers/getTopUsers'


const TopUsers: NextPage = () => {
  // console.log(window.localStorage)
  // const topUsers = getTopUsers()
  return (
    <>
      <Head>
        <title>Top Users</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {topUsers ? <UserList users={topUsers} /> : <div>No Top Users</div>} */}
    </>
  )
}

export default TopUsers;