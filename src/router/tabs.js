import Trainings from "../components/Trainings/Trainings";
import Discover from "../components/Discover/Discover";
import Exercises from "../components/Exercises/Exercises";
import Settings from "../components/Settings/Settings";
import History from "../components/History/History";

const tabs = [
    {
        key: 'trainings',
        icon: 'dumbbell',
        label: 'Trainings',
        barColor: '#388E3C',
        pressColor: 'rgba(255, 255, 255, 0.16)',
        component: <Trainings />
      },
      {
        key: 'history',
        icon: 'history',
        label: 'History',
        barColor: '#B71C1C',
        pressColor: 'rgba(255, 255, 255, 0.16)',
        component: <History />
      },
      {
        key: 'discover',
        icon: 'map',
        label: 'Discover',
        barColor: '#E64A19',
        pressColor: 'rgba(255, 255, 255, 0.16)',
        component: <Discover />
      },
      {
        key: 'exercises',
        icon: 'list',
        label: 'Exercises',
        barColor: '#1949e6',
        pressColor: 'rgba(255, 255, 255, 0.16)',
        component: <Exercises />
      },
      {
        key: 'settings',
        icon: 'gear',
        label: 'Settings',
        barColor: '#34e619',
        pressColor: 'rgba(255, 255, 255, 0.16)',
        component: <Settings />
      }
]

export default tabs