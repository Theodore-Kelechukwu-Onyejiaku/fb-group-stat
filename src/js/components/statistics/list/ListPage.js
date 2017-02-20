import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import StatCards from '../../common/cards/statistics/StatCards';

const ListPage = ({ stats, refreshPage }) => {
   return (
     <div className="stats-index">
       <div className="settings">
         <button
           className="btn btn-success"
           onClick={refreshPage} >
           Refresh
         </button>
       </div>
       <StatCards stats={stats} />
     </div>
   );
 }

 ListPage.propTypes = {
   stats: PropTypes.object.isRequired,
   refreshPage: PropTypes.func.isRequired
 }

 export default ListPage;
