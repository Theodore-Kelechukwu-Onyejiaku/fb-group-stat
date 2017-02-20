import React, { PropTypes, Component } from 'react';
import { isEmpty, findIndex, isUndefined } from 'underscore';
import TextInput from '../../common/textinput/Index.js';
import SelectInput from '../../common/select/Index.js';
import TextArea from '../../common/textarea/Index';

class StatForm extends Component {
  constructor(props) {
    super(props);

    const { stat } = this.props;

    this.state = { stat };

    this.handleAddForm = this.handleAddForm.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { stat } = nextProps;
    this.setState({ stat });
  }

  handleChange(field, value) {
    let { stat } = this.state;
    stat[field] = value;
    return this.setState({ stat });
  }

  handleAddForm(e) {
    e.preventDefault();
    let { stat } = this.state;

    stat = Object.assign({}, stat);
    this.setState({ stat });
  }

  handleRemove() {
    let { stat } = this.state;

    stat = Object.assign({}, stat);
    
    this.setState({ stat });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { stat } = this.state;
    this.props.handleSubmit(stat);
  }

  renderQuote() {
    const { body="" } = this.state.stat;
    return (
      <TextArea
        name="body"
        label="Quote"
        value={body}
        onChange={this.handleChange} />      
    );
  }

  renderTags() {
   const { tags } = this.state.stat;
    return (
      <SelectInput
        name="tags"
        label="Tags"
        hint="Enter a value that's NOT in the list, then hit enter"
        options={tags}
        onChange={this.handleChange} />      
    );
  }

  renderFormControl() {
    const { loading } = this.props;
    return (
      <div className="row form-group stat-form-control">
        <div className="pull-xs-left">
          <input
            type="button"
            disabled={loading}
            value={loading ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={this.handleSubmit} />           
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="stat-form">
        <form>
          {this.renderQuote()}
          {this.renderTags()}
          {this.renderFormControl()}
        </form>
      </div>
    );
  }
}

StatForm.propTypes = {
  loading     : PropTypes.bool,
  stat     : PropTypes.object.isRequired,
  handleSubmit: PropTypes.func
};

export default StatForm;
