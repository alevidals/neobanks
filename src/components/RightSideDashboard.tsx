import LineCard from './LineCard'
import { motion } from 'framer-motion'

const RightSideDashboard = () => {
  return (
    <motion.div
      className='h-full w-full'
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <LineCard />
    </motion.div>
  )
}

export default RightSideDashboard
