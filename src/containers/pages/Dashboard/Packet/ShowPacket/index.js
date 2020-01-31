import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {database} from '../../../../../config/firebase';
import { Label, Input} from 'reactstrap';
import Button from '@material-ui/core/Button';
import './ShowPacket.scss'
class ShowPacket extends Component {

  constructor(props) {
    super(props);
    this.state = {
      packet: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = database.collection('packet_laundry').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          packet: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  handletoBack = () => {
    const {history} = this.props
    history.push('/packet')
  }

  handletoEdit = () => {
    const {history} = this.props
    history.push('/packet')
  }

  delete(id){
    database.collection('packet_laundry').doc(id).delete().then(() => {
        console.log("Packet successfully deleted!");
        this.props.history.push("/packet")
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
  }

  render() {
    return (
        <div class="panel panel-default">
            <Button variant="contained" color="primary" onClick={this.handletoBack}>
                Back
            </Button>
            <div class="panel-heading">
            <h4>Packet List</h4>
            </div>
            <Label>Name Packet</Label>
            <Input disabled value={this.state.packet.name_packet}/>
            <Label>Price Packet</Label>
            <Input disabled value={this.state.packet.price_packet}/>
            <div className="bawahdata">
                <Button variant="contained" color="primary" onClick={this.handletoEdit}>
                    Edit
                </Button>
                <Button className="delete" variant="contained" color="primary" onClick={this.delete.bind(this, this.state.key)}>
                    Delete
                </Button>
            </div>
        </div>
    );
  }
}

export default ShowPacket;