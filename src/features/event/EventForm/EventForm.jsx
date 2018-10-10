import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {

  state={
    event:{
      title: '',
      date: '',
      city: '',
      venue: '',
      hostedBy: ''
    }
  }

  onFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.createEvent(this.state.event);
  }

  onInputChange = (evt) =>{
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value
    this.setState({
      event: newEvent
      
    })
  }

  render() {

const {handleCancel} = this.props;
const {event} = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input name='title' value={event.title} onChange={this.onInputChange} placeholder="Events Title" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input name='date' value={event.date} onChange={this.onInputChange} placeholder="Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name='city' value={event.city} onChange={this.onInputChange} placeholder="City" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name='venue' value={event.venue} onChange={this.onInputChange} placeholder="Venue" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name='hostedBy' value={event.hostedBy} onChange={this.onInputChange} placeholder="Hosted By" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} type="button">Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
