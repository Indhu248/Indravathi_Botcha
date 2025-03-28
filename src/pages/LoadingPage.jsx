import React, { useEffect, useState } from 'react'
import Blocks from '../components/Blocks';
import AnimatedBlocks from '../components/AnimatesBlocks';
import { motion } from 'framer-motion';

const LoadingPage = ({setLoading}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 100){
      setLoading(false);
      return;
    }

    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 50);

    return () => clearInterval(intervalId); // Cleanup function
  }, [count]);


  return (
    <motion.div 
    className='h-screen flex items-center justify-center bg-slate-950 text-[3rem] p-4 overdlow-hidden'>
      {/* <h1 className='flex self-end justify-end text-slate-950 text-3xl font-semibold'>{count}</h1> */}
      <AnimatedBlocks />
    </motion.div>
  )
}
export default LoadingPage
                               