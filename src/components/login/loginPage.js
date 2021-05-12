import { useSelector, useDispatch} from 'react-redux';
import { loggingIn, loggingOut } from '../../actions/index'
import isLogged from '../../reducers/isLogged';
import './loginPage.css';

function Login () {
    const loggedInCheck = useSelector( state => state.isLogged);
    const dispatch = useDispatch();

    return (
            <div className="login-wrapper">
                <button className="login-bttn">Log in</button>
                <div className="dropdown-users">
                    <a href="#" onClick={() => dispatch(isLogged())}>Person 1</a>
                    <a href="#" onClick={() => dispatch(isLogged())}>Person 2</a>
                    <a href="#" onClick={() => dispatch(isLogged())}>Person 3</a>
                </div>
            </div>
    )  
}

export default Login;