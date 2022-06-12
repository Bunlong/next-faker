import type { NextPage } from 'next'
import { useFaker } from 'next-faker'

const Home: NextPage = () => {
  const { animal } = useFaker();

  console.log(animal.bear());

  return (
    <>
      Next Faker
    </>
  )
}

export default Home
