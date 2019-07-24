import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchStreams} from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if(stream.userId && this.props.currentUserId && this.props.currentUserId.userId === stream.userId.userId) {
    //if(this.props.currentUserId === stream.userId) {
      return(
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui inverted green button">
            Edit
          </Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui inverted red button">
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
          </div>
          <div className="description">
            {stream.description}
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return(
        <div className="right floated content">
          <Link to="/streams/new" className="ui inverted blue button">
            Create Content
          </Link>
        </div>
      );
    }
  }

  render(){
    //console.log("aquii", this.props.streams);
    return (
      <div>
        <h2>Streams</h2>
        <hr />
        <div className="ui celled list">
          {this.renderList()}
        </div>
        <div className="right floated content">
          {this.renderCreate()}
        </div>
      </div>
    );
  }
}

//send information into our component
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, {
  fetchStreams
})(StreamList);
