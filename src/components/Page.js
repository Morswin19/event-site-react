import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home'
import Archive from '../pages/Archive'
import Programme from '../pages/Programme'
import About from '../pages/About'
import Gallery from '../pages/Gallery'
// import Staff from '../pages/Staff'
import ArtistInfo from '../pages/ArtistInfo'
import loader from "../../src/img/loader.png"

const Staff = lazy(() => import('../pages/Staff'))
const renderStaffLoader = () => <div className="staffaLoader">
  <img src={loader} alt="" />
</div>

// import React, { lazy, Suspense } from 'react';

// const AvatarComponent = lazy(() => import('./AvatarComponent'));

// const renderLoader = () => <p>Loading</p>;

// const DetailsComponent = () => (
//   <Suspense fallback={renderLoader()}>
//     <AvatarComponent />
//   </Suspense>
// )

const Page = () => {
  return (
    <>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/artists">
        <ArtistInfo />
      </Route>
      <Route path="/staff">
        <Suspense fallback={renderStaffLoader()}>
          <Staff />
        </Suspense>
      </Route>
      <Route path="/gallery">
        <Gallery />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/programme">
        <Programme />
      </Route>
      <Route path="/archive">
        <Archive />
      </Route>
    </>
  )
}

export default Page;