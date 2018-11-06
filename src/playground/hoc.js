import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is : {props.info}</p>
    </div>
);


const withAdminWarning = (WarppedComponent) => {
    return (props) =>(
        <div>
        {props.isAdmin && <p>This is privat info please don't share</p>}
        <WarppedComponent {...props} />
        </div>
    )
}
const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WarppedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
            <WarppedComponent {...props} />)
            : (
            <p>please log in and autherize it</p>
            )}
        </div>
    )
}
const AuthInfo = requireAuthentication (Info)
// ReactDOM.render(<AdminInfo info ='some details' isAdmin = {true} />, document.getElementById('app'));
ReactDOM.render(<AuthInfo info ='some details' isAuthenticated= {true} />, document.getElementById('app'));