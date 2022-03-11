import type { NextPage, GetServerSideProps } from 'next'
import type { UserType } from '../types/UserType';
import UserList from "../components/Users/UserList"
import Head from 'next/head'

export const getServerSideProps: GetServerSideProps = async () => {
  // Promises weren't working, so I had to use async/await. 
  // const user = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => { return data })
  // Didnt have the time to look into the details of the error, but it would surely later.
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const user: UserType = await res.json()
  if(!user)
    return {
      notFound: true,
    }
  return {
    props: {
      user,
    }
  }
}

type Props = {
  user: UserType[]
}


const Users: NextPage<Props> = ({ user }) => {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserList users={user} />
    </>
  )
}

export default Users;