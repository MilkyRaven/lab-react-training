import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faStar} from '@fortawesome/free-regular-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as farStar} from '@fortawesome/free-regular-svg-icons';

export default function Rating(props) {
    let rating = Math.round(props.children);
    let starRating;
    if (rating === 0){
      starRating = <div><FontAwesomeIcon icon={farStar} /><FontAwesomeIcon icon={farStar} /><FontAwesomeIcon icon={farStar} /><FontAwesomeIcon icon={farStar} /><FontAwesomeIcon icon={farStar} /></div>
    } else if (rating === 1) {
      starRating = <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={farStar} /><FontAwesomeIcon icon={farStar} /><FontAwesomeIcon icon={farStar} /><FontAwesomeIcon icon={farStar} /></div>
    } else if (rating === 2){
      starRating = <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={farStar} /><FontAwesomeIcon icon={farStar} /><FontAwesomeIcon icon={farStar} /></div>
    } else if (rating === 3){
      starRating = <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={farStar} /><FontAwesomeIcon icon={farStar} /></div>
    } else if (rating === 4) {
      starRating = <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={farStar} /></div>
    } else if (rating === 5){
      starRating = <div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
    }
    console.log(rating);
    return (
    <div className='star rating'>
      {starRating}
    </div>
  )
}
