import DashboardHeader from "./dashboard-header";
import Calendar from "./Calendar";
import DaySelector from "./Day-Selector";
import StudyPlanner from "./Study-Planner";

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-50">
            <div className="flex-1 overflow-y-auto">
                <div className="container mx-auto p-6">
                    <DashboardHeader />


                    <div className="flex flex-col lg:flex-row gap-6 mt-6">
                        <div className="w-full lg:basis-[60%]">
                            <DaySelector />
                            <StudyPlanner />
                        </div>
                        <div className="w-full lg:basis-[40%]">
                            <Calendar />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;

{/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6"> */ }
// <div className="lg:col-span-2">
//     <DaySelector />
//     {/* <StudyPlanner /> */}
// </div>
// <div className="space-y-6">
//     <Calendar />
//     {/* <RecentActivity /> */}
// </div>
{/* </div> */ }