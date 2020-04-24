import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SportsID } from 'vdoc/libs/domain/models/Sports';
import { sportsListSelectors } from 'vdoc/modules/sportsList';

type IProps = {
  sportsID: SportsID
};

const SportsTag: React.FC<IProps> = props => {

  const sportsID = props.sportsID;
  const sportsListState = useSelector(sportsListSelectors.selectAll);
  const sports = useSelector(sportsListSelectors.select(sportsID));
  if (sportsListState.isLoading || !sports) {
    return <div />
  }

  return (
    <ul className="profile-tag">
      <li className="tag">
        <Link to={'/sports/' + sports.id.value}>
          <span></span>
          {sports.name}
        </Link>
      </li>
    </ul>
  )

}

export { SportsTag };
