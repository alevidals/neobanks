import CountUp from 'react-countup'
import { motion } from 'framer-motion'

interface Props {
  title: string
  subtitle: string
  number: number
}

const NumberCard = ({ title, subtitle, number }: Props) => {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='w-full'
    >
      <div className='flex flex-col py-7 px-10 border-2  items-center space-y-5 rounded-xl hover:scale-110 duration-200'>
        <h3 className='font-extrabold text-lg'>{title}</h3>
        <p className='text-primary text-5xl font-semibold'>
          <CountUp end={number} duration={0.9} />
        </p>
        <p className='text-gray-900 font-light uppercase'>{subtitle}</p>
      </div>
    </motion.div>
  )
}

export default NumberCard
