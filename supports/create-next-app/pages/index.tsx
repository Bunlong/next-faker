import type { NextPage } from 'next'
import { useFaker } from 'next-faker'

const Home: NextPage = () => {
  const { address } = useFaker();

  console.log(address.buildingNumber());

  return (
    <>
      Next Faker
    </>
  )
}

export default Home
