import { connect } from 'react-redux';
import { selectors as FetchSelector } from '@/redux/Fetch';
import * as EventsActions from '@/redux/Events';
import * as UserActions from '@/redux/User';
import Home from './Home';

const mapStateToProps = state => ({
  loading: FetchSelector.getFetching('GET_ALL_EVENTS', state),
  location: state.user.location,
  events: state.events.data,
});

const mapDispatchToProps = dispatch => ({
  getLocation: data => dispatch(UserActions.getLocationRequest(data)),
  getAll: () => dispatch(EventsActions.getAllEventsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
