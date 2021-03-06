import React from 'react';
import PropTypes from 'prop-types';
import { convertEthHelper } from '../lib/helpers';

/**
 * Shows the statistics on DACs, Campaigns and milestonesCount
 *
 * TODO: Check the properties that are passed, sometimes they are number, sometimes strings...
 */
const CardStats = ({ peopleCount, maxAmount, totalDonated, currentBalance, type, status }) => (
  <div className="row card-stats">
    <div className="col-4 text-left">
      <span>
        <i className="fa fa-male" />
        {peopleCount}
      </span>
      <p>Giver(s)</p>
    </div>

    <div className="col-4 text-center card-center">
      {maxAmount && <p>Amount requested:{convertEthHelper(maxAmount)} ETH</p>}

      {totalDonated && <p>Donated: {convertEthHelper(totalDonated, !maxAmount && 2)} ETH</p>}
    </div>

    <div className="col-4 text-right">
      {(type === 'dac' || type === 'campaign') && (
        <div>
          <p>Balance: {convertEthHelper(currentBalance, 2)} ETH</p>
        </div>
      )}

      {type === 'milestone' && (
        <div>
          <span>
            <i className="fa fa-check-circle" />
            {status}
          </span>
          <p>status</p>
        </div>
      )}
    </div>
  </div>
);

CardStats.propTypes = {
  type: PropTypes.string.isRequired,
  peopleCount: PropTypes.number.isRequired,
  status: PropTypes.string,
  maxAmount: PropTypes.string,
  totalDonated: PropTypes.string,
  currentBalance: PropTypes.string,
};

CardStats.defaultProps = {
  status: 'In Progress',
  maxAmount: undefined,
  totalDonated: undefined,
  currentBalance: undefined,
};

export default CardStats;
