import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home'
import Archive from '../pages/Archive'
import Programme from '../pages/Programme'
import About from '../pages/About'
import Gallery from '../pages/Gallery'
import Staff from '../pages/Staff'
import ArtistInfo from '../pages/ArtistInfo'

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
        <Staff />
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