import NumberCard from './NumberCard'
import PieCard from './PieCard'

const LeftSideDashboard = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex space-y-5 md:space-y-0 md:space-x-10 flex-col md:flex-row xl:flex-row '>
        <NumberCard title='Transactions' number={35} subtitle='Last month' />
        <NumberCard title='Transactions' subtitle='Today' number={3} />
      </div>
      <PieCard />
    </div>
  )
}

export default LeftSideDashboard
