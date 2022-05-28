import { CalendarIcon } from '@heroicons/react/outline'
import { ArrowNarrowUpIcon } from '@heroicons/react/solid'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import CountUp from 'react-countup'

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const dataArea = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 40000 })),
    },
  ],
}

const LineCard = () => {
  return (
    <div className='border-2  flex-grow rounded-xl py-7 px-10'>
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:items-center md:justify-between'>
        <h2 className='text-2xl md:text-3xl font-bold text-center md:text-left'>
          Weekly expenses
        </h2>
        <div className='border-2  rounded-xl flex py-1 px-4 space-x-3 cursor-pointer hover:scale-110 duration-200 item-center justify-center text-primary'>
          <p className='font-medium'>Oct - Nov 2019</p>
          <CalendarIcon className='h-5 w-5 ' />
        </div>
      </div>
      <div className='flex flex-col mt-3'>
        <Line
          options={{
            datasets: {
              line: {
                tension: 0.2,
                borderColor: 'rgba(45, 20, 196, 0.5)',
                fill: 'start',
                backgroundColor: 'rgba(45, 20, 196, 0.5)',
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                backgroundColor: '#fff',
                bodyColor: '#000',
                titleColor: '#000',
                displayColors: false,
                callbacks: {
                  label: function (context) {
                    return `$${context.formattedValue}`
                  },
                },
              },
            },
            scales: {
              y: {
                min: 0,
                max: 40000,
                ticks: {
                  stepSize: 10000,
                  callback: (value, index, values) => {
                    return new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      notation: 'compact',
                      compactDisplay: 'short',
                    }).format(Number(value))
                  },
                  font: {
                    size: 18,
                  },
                },
                grid: {
                  display: false,
                },
              },
              x: {
                ticks: {
                  font: {
                    size: 18,
                  },
                },
              },
            },
          }}
          data={dataArea}
        />
        <div className='mt-2'>
          <p className='text-[#9C9C9C] font-medium text-lg'>Total revenue</p>
          <h3 className='text-xl md:text-2xl font-bold'>
            $ <CountUp end={76685.41} decimal='.' decimals={2} />
          </h3>
          <div className='text-[#4AAF05] flex items-center'>
            <ArrowNarrowUpIcon className='h-4 w-4' />
            <span className='font-bold'>
              <CountUp end={7.0} decimal='.' decimals={2} /> %
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LineCard
