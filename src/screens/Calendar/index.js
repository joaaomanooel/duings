import { connect } from 'react-redux';
import Calendar from './Calendar';

const mapStateToProps = state => ({ calendar: state.calendar.data });

export default connect(mapStateToProps)(Calendar);
