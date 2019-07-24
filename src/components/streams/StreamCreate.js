import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    //event.preventDefault(); //redux-form ja chama a função no handler
    //console.log(formValues);
    this.props.createStream(formValues);
  }

  render() {
    return(
      <div>
        <h3>Create a Stream</h3>
        <hr />
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if(!formValues.title) {
    //console.log("titulo invalido");
    errors.title = 'You must enter a valid title!';
  }
  if(!formValues.description) {
    //console.log("descricao invalida");
    errors.description = 'You must enter a valid description!';
  }

  return errors;
};

export default connect(null, {
  createStream: createStream
})(StreamCreate);
