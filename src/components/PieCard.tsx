import { DotsHorizontalIcon } from '@heroicons/react/solid'
import { Pie } from 'react-chartjs-2'
import { motion } from 'framer-motion'

const labels = ['Screens', 'PCs', 'Phones', 'Tablets']

const dataPie = {
  labels,
  datasets: [
    {
      data: [4000, 3000, 2000, 1000],
      backgroundColor: ['#9013FE', '#007AFF', '#FB8832', '#E6E5E6'],
      borderWidth: 0,
    },
  ],
}

const PieCard = () => {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className='border-2  rounded-xl mt-5 py-7 px-10'>
        <div className='flex justify-between items-center'>
          <h2 className='text-3xl font-bold'>Conversion</h2>
          <div className='border-2  p-2 rounded-xl cursor-pointer hover:scale-110 duration-200'>
            <DotsHorizontalIcon className='h-5 w-5 text-primary' />
          </div>
        </div>
        <Pie
          data={dataPie}
          className='p-5'
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true,
                  padding: 30,
                  font: {
                    size: 15,
                  },
                },
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    return `${context.label} $${context.parsed}`
                  },
                },
                bodyFont: {
                  size: 20,
                },
                backgroundColor: '#fff',
                bodyColor: '#000',
                padding: 10,
              },
            },
          }}
        />
      </div>
    </motion.div>
  )
}

export default PieCard
