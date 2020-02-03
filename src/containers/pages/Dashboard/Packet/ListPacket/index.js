import React, { Component } from "react";
import MaterialTable from "material-table";
import Button from '@material-ui/core/Button';
// import {MDCDataTable} from '@material/data-table';
// const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
import './ListPacket.scss';
import {database} from '../../../../../config/firebase';
// import RoutesPacket from '../routes.js'
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class ListPacket extends Component {
  constructor(props) {
    super(props);
    this.ref = database.collection('packet_laundry');
    this.unsubscribe = null;
    this.state = {
      loading: false,
      packet: [],
      isLoading:false,
    };
  }

  handletoAddPacket = () => {
    const {history} = this.props
    history.push('/packet/create')
  }

  onCollectionUpdate = (querySnapshot) => {
    const packet = [];
    querySnapshot.forEach((doc) => {
      const { name_packet, price_packet } = doc.data();
      packet.push({
        isLoading:true,
        key: doc.id,
        doc,
        name_packet,
        price_packet,
      });
      // console.log(packet.doc.id)
    });
    this.setState({
      packet,
      isLoading:false
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
        <MaterialTable
          title="Laundry Packet"
          columns={[
            { title: "Packet Name", field: "name_packet" },
            { title: "Packet Price", field: "price_packet" }
          ]}
          data={this.state.packet}
          actions={[
            {
              icon: EditIcon,
              tooltip: 'Edit Packet',
              onClick: (event, rowData) => {
                const {history} = this.props
                history.push(`/packet/edit/${rowData.key}`)
              }
            },
            {
              icon: VisibilityIcon,
              tooltip: 'Show Packet',
              onClick: (event, rowData) => {
                const {history} = this.props
                history.push(`/packet/show/${rowData.key}`)
              }
            },
            {
              icon: DeleteIcon,
              tooltip: 'Delete Packet',
              onClick: (event, rowData) => {
                alert("Packet successfully deleted!")
                database.collection('packet_laundry').doc(rowData.key).delete().then(() => {
                }).catch((error) => {
                  console.error("Error removing document: ", error);
                });
              }
            }
          ]}
        />
        
      </div>
    );
  }
}

export default ListPacket