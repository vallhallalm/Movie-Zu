import React from 'react';

export class Jumbotron extends React.Component {
    render() {
        return(
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Movie-Zu</h1>
                    <p className="lead">Une appli React dévellopé afin d'en apprendre plus sur la technologie</p>
                </div>
            </div>
        );
    }
}