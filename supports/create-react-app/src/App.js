import { useEffect } from 'react';
import { useFaker } from 'next-faker';

function App() {
  const { address } = useFaker();

  useEffect(() => {
    console.log(address.buildingNumber());
  });

  return (
    <>
      next-faker
    </>
  );
}

export default App;
