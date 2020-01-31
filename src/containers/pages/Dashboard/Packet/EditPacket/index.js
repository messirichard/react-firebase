import React, { Component } from 'react';
import {database} from '../../../../../config/firebase';
import { Link } from 'react-router-dom';

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

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({packet:state});
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
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT packet
            </h3>
          </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Name Packet</label>
                <input type="text" class="form-control" value={this.state.name_packet} onChange={this.onChange} placeholder={this.state.name_packet} />
              </div>
              <div class="form-group">
                <label for="author">Price Packet</label>
                <input type="text" class="form-control" value={this.state.price_packet} onChange={this.onChange} placeholder={this.state.price_packet} />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPacket;