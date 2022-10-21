import React from 'react';
import classes from './Category.module.css';
import { VscDebugBreakpointFunction, VscDebugBreakpointData } from 'react-icons/vsc'

const Category = ({ tagHandler, paginate }) => {

    const tags = ['mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social', 'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller', 'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action', 'military', 'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts'];


  return (
    <aside className={classes.category}>
      <h3>Tags</h3>
              {tags.map((tag, index) => {
                return <div className={classes.tags} key={index}>
                  {index % 2 ? <VscDebugBreakpointFunction style={{color: "#FF4E02"}} /> : <VscDebugBreakpointData style={{color: "#FFDD00"}}/>}
                <button value={tag} onClick={(btn) => {tagHandler(btn.target.value); paginate(1)}}>{tag.toUpperCase()}</button>
                </div>
              })}
    </aside>
  )
}

export default Category