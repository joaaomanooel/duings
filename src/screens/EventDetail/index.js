import { connect } from 'react-redux';
import EventDetail from './EventDetail';

const mapStateToProps = state => ({ calendar: state.calendar.data });

export default connect(mapStateToProps)(EventDetail);
