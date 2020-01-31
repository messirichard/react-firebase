import React, { Component } from "react";
import MaterialTable from "material-table";
import Button from '@material-ui/core/Button';
// import {MDCDataTable} from '@material/data-table';
// const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
import './ListPacket.scss';
import {database} from '../../../../../config/firebase';
// import RoutesPacket from '../routes.js'


class ListPacket extends Component {
  constructor(props) {
    super(props);
    this.ref = database.collection('packet_laundry');
    this.unsubscribe = null;
    this.state = {
      loading: false,
      packet: [],
      selection: false,
    };
  }

  handletoAddPacket = () => {
    const {history} = this.props
    history.push('/packet/create')
  }

  handleCellClick(){
    console.log("cell clicked")
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
        <Button variant="contained" color="primary" float="right" onClick={this.handletoAddPacket}>
          Add Packet
        </Button>
        </div>
        <MaterialTable onCellClick= {this.handleCellClick}
          title="Laundry Packet"
          columns={[
            { title: "Packet Name", field: "name_packet" },
            { title: "Packet Price", field: "price_packet" }
          ]}
          onRowClick={{
            
          }}
          data={this.state.packet}
          // data={state.data}
          options={{
            selection: false
          }}
        />
        
      </div>
    );
  }
}

export default ListPacket