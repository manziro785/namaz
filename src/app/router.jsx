import { createBrowserRouter } from 'react-router-dom';
import  {Comment}  from '../pages/comment.jsx';
import  {Communities}  from '../pages/communities.jsx';
import  {CreateComment}  from '../pages/createComment.jsx';
import  {CreateCommunity}  from '../pages/createCommunity.jsx';
import {Login}  from '../pages/login.jsx';
import  {PrayerTimings } from '../pages/prayerTimings.jsx';
import  {Profile } from '../pages/profile.jsx';
import {Register}  from '../pages/register.jsx';
import  {ShowPrayerTiming } from '../pages/showPrayerTiming.jsx';
import  {Tutorial } from '../pages/tutorial.jsx';
import {Tutorials} from '../pages/tutorials.jsx';
import {NoPage} from '../pages/noPage.jsx';



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Comment/>
  }
 , {
    path: '/communities',
    element: <Communities />
    
  },
  {
    path: '/create_comment',
    element: <CreateComment />
  },
  {
    path: '/create_community',
    element: <CreateCommunity />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/prayer_timings',
    element: <PrayerTimings />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/show_prayer_timing',
    element: <ShowPrayerTiming />
  },
  {
    path: '/tutorial',
    element: <Tutorial />
  },
  {
    path: '/tutorials',
    element: <Tutorials />
  },
  {
    path: '/*',
    element: <NoPage />
  }
])