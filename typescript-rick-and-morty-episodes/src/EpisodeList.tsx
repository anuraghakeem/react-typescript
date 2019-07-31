import React from "react";

import { IEpisode } from "./interfaces";

export default function EpisodeList(props: any): JSX.Element[] {
  const { episodes, toggleFavAction, favourites, store } = props;
  const {state,dispatch}= store

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="epsiode-box">
        <img
          src={episode.image && episode.image.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button type="button" onClick={() => toggleFavAction(state,dispatch,episode)}>
            {favourites.find((fav: IEpisode) => fav.id === episode.id)
              ? `Unfavourite`
              : `Fav`}
          </button>
        </section>
      </section>
    );
  });
}
