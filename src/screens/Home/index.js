import { connect } from 'react-redux';
import { selectors as FetchSelector } from '@/redux/Fetch';
import * as EventsActions from '@/redux/Events';
import Home from './Home';

const mapStateToProps = state => ({
  loading: FetchSelector.getFetching('GET_ALL_EVENTS', state),
  events: state.events.data,
});

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(EventsActions.getAllEventsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
