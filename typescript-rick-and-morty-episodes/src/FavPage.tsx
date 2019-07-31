import React from 'react'

import {Store} from './Store'
import {toggleFavAction} from './Actions'
import {IEpisodeProps} from './interfaces'
const EpisodeList= React.lazy<any>(()=>import('./EpisodeList'))

export default function FavPage():JSX.Element {
    const {state,dispatch}= React.useContext(Store)
    
    const props:IEpisodeProps={
        episodes:state.favourites,
        store:{state,dispatch},
        toggleFavAction,
        favourites:state.favourites
    }
    return (
        <React.Fragment>
        <React.Suspense fallback={<div>loading...</div>}>
          <div className="episode-layout">
            <EpisodeList {...props} />    
          </div>
        </React.Suspense>
      </React.Fragment>
    )
}
