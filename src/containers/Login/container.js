import Login from './Login';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
const mapStateToProps = state => ({
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
});

const mapDispatchToProps = dispatch => ({
    authenticateUser: (email, password) => dispatch(actions.authenticateUser(email, password)),
    setAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
