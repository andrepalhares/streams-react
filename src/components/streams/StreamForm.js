import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderError({error, touched}) {
    if(touched && error) {
      return (
        <div className="ui error message">
          <div className="header">Erro!</div>
          <p>{error}</p>
        </div>
      );
    }
  }

  renderInput = ({input, label, type, meta}) => {
    //console.log(formProps);
    //console.log(meta);
    const className = `field ${meta.error && meta.touched ? 'error' : ''} `;
    return (
      <div className={className}>
        <label>{label}</label>

        <input
        type={type}
        name="" placeholder=""
        autoComplete="off"
        {...input} />

        {this.renderError(meta)}

      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    //console.log(this.props);
    return(
      //com redux form precisamos passar a função helper como parametro
      //para a função handleSubmit do redux form
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title"
        component={this.renderInput}
        label="Enter title"
        type="text" />

        <Field name="description"
        component={this.renderInput}
        label="Description"
        type="text" />

        <button className="ui button primary">
          Enviar
        </button>
      </form>
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

export default reduxForm({
  form: 'streamForm',
  validate: validate
})(StreamForm);
