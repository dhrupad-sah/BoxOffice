import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
import 'atropos/css';
import Atropos from 'atropos/react';

const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div id="app">
      <Atropos className="my-atropos" shadow={false}>
        <SearchCard>
          <SearchImgWrapper>
            <img src={image} alt={name} />
          </SearchImgWrapper>

          <h1>
            {name} {!!gender && `(${gender})`}
          </h1>

          <p>{country ? `Comes from ${country}` : 'No country known'}</p>

          {!!birthday && <p>Born {birthday}</p>}

          <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
        </SearchCard>
      </Atropos>
    </div>
  );
};

export default ActorCard;
