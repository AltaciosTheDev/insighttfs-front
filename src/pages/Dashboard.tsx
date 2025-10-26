import Title from '../components/Title'
import Header from '../components/Header'
import TaskList from '../components/TaskList'
import { Sidebar } from '../components/Sidebar'

function Dashboard() {
  return (
    <div className="flex justify-center items-center font-sans min-h-screen bg-[#f1d4b3]">
      <Title/>
      {/* b/c child does not leave room for the border, so we hide it  */}
      <main className="w-[972px] h-[636px] bg-white rounded-2xl shadow-2xs grid grid-cols-[70%_30%] grid-rows-[60px_1fr] overflow-hidden">
        <Header/>
        <TaskList/>
        <Sidebar/>
      </main>
    </div>
  )
}

export default Dashboard