import React from 'react';

// import './FilteredRimi.css';
import { Emoji } from 'emoji-mart'

const FilteredRimi = (props) => {
  let className = "FilteredRimi"
  if (props.expandResults == true){
    className = "FilteredRimi FilteredRimi-expandResults"
  }
  return (
    <div className={className}>
      {
        props.filteredRimis.length > 0
        ?
          <div className="FilteredRimi-container">
            {props.filteredRimis.map(rimi =>
              <div
                onClick={()=>{props.selectSuggestedRimi(rimi)}}
                key={rimi.id}
                style={{ color: rimi.color}}
              >
                {rimi.title}
              </div>)
            }
          </div>
        :
          <div className="FilteredRimi-emptySearch-wrapper">
            <span className="FilteredRimi-emptySearch">
              you too, search something we have! mtchewww
              <Emoji
                emoji={'face_with_rolling_eyes'}
                set='apple'
                size={16}
              />
              <Emoji
                emoji={'unamused'}
                set='apple'
                size={16}
              />
            </span>
            <span className="FilteredRimi-emptySearch">or you can <span onClick={()=>{props.suggestSong()}} className="FilteredRimi-suggestText">suggest</span> a song to us</span>
          </div>
      }
    </div>
  )
}

export default FilteredRimi;
