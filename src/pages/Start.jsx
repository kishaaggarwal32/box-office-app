import { useStarredShows } from '../lib/useStarredShows';

const Start = () => {
  const [starredShows] = useStarredShows();
  return <div>Starred page , starred {starredShows.length} </div>;
};

export default Start;
