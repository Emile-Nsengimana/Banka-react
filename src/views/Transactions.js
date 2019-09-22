/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import moment from 'moment';
import Navbar from '../components/NavBar';
import { getTransactionHistory, getUserAccounts } from '../redux/actions/accountsAction';

class TransactionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const menuButton = document.getElementById('btn-my-account');
    menuButton.classList.remove('active');
    document.getElementById('btn-transaction').classList.add('active');

    const token = sessionStorage.getItem('token');
    if (!token) location.href = '/';
    const email = sessionStorage.getItem('email');
    this.props.getUserAccounts(email);
    this.props.getTransactionHistory('B20DA8AC-F8E0-4992-9761-1D4690A3E194');
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="aside">
            <a id="btn-my-account" className="active btn-default" href="/home">
              <i className="fas fa-money-check-alt" />
              My account
            </a>
            <a id="btn-transaction" className="btn-default" href="/transaction">
              <i className="fas fa-history" />
              Transaction
            </a>
          </div>
          <div className="content">
            <div className="transaction-history">
              <table>
                <caption>
                Transaction History
                </caption>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Type</th>
                    <th>Previous balance</th>
                    <th>Current balance</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>By</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.accounts.transactions !== undefined ? (
                    this.props.accounts.transactions.map((transaction) => (
                      <tr key={transaction.transactionid}>
                        <td>{transaction.transactionid}</td>
                        <td>{transaction.type}</td>
                        <td>{transaction.oldbalance}</td>
                        <td>{transaction.newbalance}</td>
                        <td>{transaction.amount}</td>
                        <td>
                          {moment(transaction.createdon).format('LLLL')}
                        </td>
                        <td>{transaction.cashier}</td>
                      </tr>
                    ))
                  ) : null}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

TransactionPage.propTypes = {
  getUserAccounts: propTypes.func.isRequired,
  getTransactionHistory: propTypes.func.isRequired,
  accounts: propTypes.any.isRequired,
};

const mapStateToProps = (state) => ({
  ...state,
});


export default connect(
  mapStateToProps,
  { getTransactionHistory, getUserAccounts },
)(TransactionPage);
