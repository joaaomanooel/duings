import { connect } from 'react-redux';
import * as UserActions from '@/redux/User';
import Settings from './Settings';

const mapStateToProps = state => ({ user: state.user.data });

const mapDispatchToProps = dispatch => ({ update: data => dispatch(UserActions.setUser(data)) });

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
