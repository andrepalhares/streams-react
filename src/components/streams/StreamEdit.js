import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {
  //console.log("my props", this.props);
  //se tentar acessar pelo proprio link, o state nao teria sido
  //inicializado
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    //console.log('form values', formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if(!this.props.stream) {
      return (
        <div>
          Loading...
        </div>
      );
    } else {
      return (
        <div>
          <h3>Edit a Stream</h3>
          <hr />
          <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit} />
        </div>
      );
    }
  }
}

//ownProps é usado para usar infos, que estão como props, no state
const mapStateToProps = (state, ownProps) => {
  //console.log("my props", ownProps);
  return {stream: state.streams[ownProps.match.params.id]};
};

export default connect(
  mapStateToProps,
  {fetchStream, editStream}
)(StreamEdit);
