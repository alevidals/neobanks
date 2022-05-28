import Header from './components/Header'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from 'chart.js'
import LeftSideDashboard from './components/LeftSideDashboard'
import RightSideDashboard from './components/RightSideDashboard'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler
)

function App() {
  return (
    <div className='min-h-screen'>
      <Header />
      <div className='bg-[#F5F5F5]'>
        <div className='container mx-auto py-4 font-light px-5 lg:px-0'>
          <span>Dashboard</span>
        </div>
      </div>
      <div className='px-5 lg:px-0 py-5'>
        <div className='flex flex-col container mx-auto mt-5 space-y-5 xl:space-y-0 xl:flex-row xl:space-x-5'>
          <LeftSideDashboard />
          <RightSideDashboard />
        </div>
      </div>
    </div>
  )
}

export default App
