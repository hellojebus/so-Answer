import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

  renderField(field) {
    console.log('input changed');
    return(
      <div>
        <label>{field.label}</label>
        <input
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return(
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Content"
          name="content"
          component={this.renderField}
        />
      </form>
    )
  }
}


export default reduxForm({
  form: 'PostsNewForm' // form property is the name of the form
})(PostNew);