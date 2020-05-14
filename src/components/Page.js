import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
            {/* <Switch> */}
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
            {/* </Switch > */}
        </>
    )
}

export default Page;

{/* <div className="App">
    <Switch>
      <Route path="/60s">
        <AlbumList albums={this.state.albums} time='1960' />
      </Route>
      <Route path='/70s'>
        <AlbumList albums={this.state.albums} time='1970' />
      </Route>
      <Route path='/80s'>
        <AlbumList albums={this.state.albums} time='1980' />
      </Route>
      <Route path='/90s'>
        <AlbumList albums={this.state.albums} time='1990' />
      </Route>
      <Route path='/00s'>
        <AlbumList albums={this.state.albums} time='2000' />
      </Route>
      <Route path='/10s'>
        <AlbumList albums={this.state.albums} time='2010' />
      </Route>
      <Route path='/today'>
        <AlbumList albums={this.state.albums} time='today' />
      </Route>
      <Route path='/' exact>
        <AlbumList albums={this.state.albums} time='all' />
      </Route>
      <Route>
        <AlbumList albums={this.state.albums} time='all' />
      </Route>
    </Switch>
 */}
