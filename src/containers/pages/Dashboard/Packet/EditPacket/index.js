import React, { Component } from 'react';
import {database} from '../../../../../config/firebase';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class EditPacket extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      name_packet: '',
      price_packet: ''
    };
  }

  componentDidMount() {
    const ref = database.collection('packet_laundry').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const packet = doc.data();
        this.setState({
          key: doc.id,
          name_packet: packet.name_packet,
          price_packet: packet.price_packet
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChanges = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name_packet, price_packet } = this.state;
    console.log("sukses")


    const updateRef = database.collection('packet_laundry').doc(this.state.key);
    console.log("sukses2")
    updateRef.set({
        name_packet,
        price_packet
    }).then((docRef) => {
      this.setState({
        key: '',
        name_packet: '',
        price_packet: ''
      });
      this.props.history.push("/packet/")
      console.log("sukses3")

    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="panel panel-default">
        <Button variant="contained" color="primary" onClick={this.handletoBack}>
            Back
        </Button>
        <div class="panel-heading">
        <h4>Edit Packet</h4>
        </div>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="title">Name Packet</Label>
            <Input type="text" id="name_packet" class="form-control" name={this.state.name_packet} value={this.state.name_packet} onChange={this.onChanges} placeholder={this.state.name_packet} />
          </FormGroup>
          <FormGroup>
            <Label for="author">Price Packet</Label>
            <Input type="text" id="price_packet" class="form-control" name={this.state.price_packet} value={this.state.price_packet} onChange={this.onChanges} placeholder={this.state.price_packet} />
          </FormGroup>
          <Button>Edit Packet</Button>
        </Form>
      </div>
    );
  }
}

export default EditPacket;