import React from 'react';

const Category = ({ tagHandler }) => {

    const tags = ['mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social', 'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller', 'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action', 'military', 'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts']

  return (
    <div>
              {tags.map((tag, index) => {
                return <button value={tag} onClick={(btn) => tagHandler(btn.target.value)} key={index}>{tag.toUpperCase()}</button>
              })}
    </div>
  )
}

export default Category