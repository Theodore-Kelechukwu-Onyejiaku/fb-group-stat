import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router';

const StatCard = ({ stat }) => {
  return (
    <div className="stat-card">
      <div className="card">
        <div className="card-header">
          <i className="fa fa-comment-o" />
          {stat.id}
          <Link to={`stats/${stat.id}`} className="pull-xs-right">
            View user
          </Link>
        </div>
        <div className="card-block">
          {stat.message}
        </div>
        <div className="card-footer">
          {stat.comments && <div className="tags">
            Comments
            <span className="chip">
              Total count: {stat.comments.summary.total_count}
            </span>
            <span className="chip">
              Order: {stat.comments.summary.order}
            </span>
          </div>}
          {stat.likes && <div className="tags">
            Likes
            <span className="chip">
              Total count: {stat.likes.summary.total_count}
            </span>
            <span className="chip">
              You like this: {stat.likes.summary.has_liked ? 'Yes!': 'Not yet'}
            </span>
          </div>}
          <div className="fav-buttons">
            <span className="chip">
              <i className="fa fa-heart" aria-hidden="true" />
            </span>
            <span className="chip">
              <i className="fa fa-share" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
 }

StatCard.propTypes = {
  stat: PropTypes.object
}

export default StatCard;
