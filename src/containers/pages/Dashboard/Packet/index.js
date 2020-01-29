import React, { useState, useEffect, Component } from "react";
import MaterialTable from "material-table";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Packet.scss';
// import axios from "axios";
import {database} from '../../../../config/firebase';


class Packet extends Component {
  constructor(props) {
    super(props);
    this.ref = database.collection('packet_laundry');
    this.unsubscribe = null;
    this.state = {
      packet: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const packet = [];
    querySnapshot.forEach((doc) => {
      const { name_packet, price_packet } = doc.data();
      packet.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name_packet,
        price_packet,
      });
    });
    this.setState({
      packet
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div>
        <div className="atas-table">
        <Button variant="contained" color="primary" float="right">
          Add Packet
        </Button>
        </div>
        <MaterialTable
          columns={[
            { title: "Packet Name", field: "name_packet" },
            { title: "Packet Price", field: "price_packet" }
          ]}
          data={this.state.packet}
          title="Laundry Packet"
        />
      </div>
    );
  }
}

export default Packet