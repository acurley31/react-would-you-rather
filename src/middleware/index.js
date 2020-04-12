import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from './logger';


// Export the middleware
export default applyMiddleware(
    thunk,
    logger,
)
