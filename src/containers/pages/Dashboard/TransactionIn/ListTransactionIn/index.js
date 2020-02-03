import React, { Component } from "react";
import MaterialTable from "material-table";
import Button from '@material-ui/core/Button';
// import {MDCDataTable} from '@material/data-table';
// const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
import './ListTransactionIn.scss';
import {database} from '../../../../../config/firebase';
// import RoutesPacket from '../routes.js'
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class ListTransactionIn extends Component {
  constructor(props) {
    super(props);
    this.ref = database.collection('transactionin_laundry');
    this.unsubscribe = null;
    this.state = {
      loading: false,
      transactionin: [],
      isLoading:false,
    };
  }

  handletoAddPacket = () => {
    const {history} = this.props
    history.push('/transactionin/create')
  }

  onCollectionUpdate = (querySnapshot) => {
    const transactionin = [];
    querySnapshot.forEach((doc) => {
      const { name_user, total_trans,name_packet_trans,quantity_trans,price_total_trans  } = doc.data();
      transactionin.push({
        isLoading:true,
        key: doc.id,
        doc,
        name_user,
        total_trans,
        name_packet_trans,
        quantity_trans,
        price_total_trans
      });
      // console.log(packet.doc.id)
    });
    this.setState({
      transactionin,
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
          Add Transacton
        </Button>
        </div>
        <MaterialTable
          title="Transaction"
          columns={[
            { title: "Name User", field: "name_user" },
            { title: "Total Baju", field: "total_trans" },
            { title: "Quantity", field: "quantity_trans" },
            { title: "Pembayaran", field: "price_total_trans" },
          ]}
          data={this.state.transactionin}
          actions={[
            {
              icon: EditIcon,
              tooltip: 'Edit Transaction',
              onClick: (event, rowData) => {
                const {history} = this.props
                history.push(`/transactionin/edit/${rowData.key}`)
              }
            },
            {
              icon: VisibilityIcon,
              tooltip: 'Show Transaction',
              onClick: (event, rowData) => {
                const {history} = this.props
                history.push(`/transactionin/show/${rowData.key}`)
              }
            },
            {
              icon: DeleteIcon,
              tooltip: 'Delete Transaction',
              onClick: (event, rowData) => {
                alert("Packet successfully deleted!")
                database.collection('transactionin_laundry').doc(rowData.key).delete().then(() => {
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

export default ListTransactionIn