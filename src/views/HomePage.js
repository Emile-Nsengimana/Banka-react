/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import moment from 'moment';
import Navbar from '../components/NavBar';
import { getTransactionHistory, getUserAccounts } from '../redux/actions/accountsAction';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const token = sessionStorage.getItem('token');
    if (!token) location.href = '/';
    const email = sessionStorage.getItem('email');
    this.props.getUserAccounts(email);
    this.props.getTransactionHistory('B20DA8AC-F8E0-4992-9761-1D4690A3E194');
  }

  handleTransaction = () => {
    document.getElementById('btn-my-account').classList.remove('active');
    document.getElementById('btn-transaction').classList.add('active');

    document.getElementById('accounts').style.display = 'none';
    document.getElementById('transaction').style.display = 'block';
  }


  handleAccounts = () => {
    document.getElementById('btn-my-account').classList.add('active');
    document.getElementById('btn-transaction').classList.remove('active');

    document.getElementById('accounts').style.display = 'block';
    document.getElementById('transaction').style.display = 'none';
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="aside">
            <button id="btn-my-account" className="active btn-default" type="button" onClick={this.handleAccounts}>
              <i className="fas fa-money-check-alt" />
              My account
            </button>
            <button id="btn-transaction" className="btn-default" type="button" onClick={this.handleTransaction}>
              <i className="fas fa-history" />
              Transaction
            </button>
          </div>
          <div className="content">
            <div id="accounts">
              <div className="transaction-history">
                {this.props.accounts.userAccounts !== undefined ? (
                  <table>
                    <caption>
               User accounts
                    </caption>
                    <tr>
                      <th>No.</th>
                      <th>Account No.</th>
                      <th>Status</th>
                      <th>Balance</th>
                      <th>Date</th>
                    </tr>
                    {this.props.accounts.userAccounts.map((account) => (
                      <tbody>
                        <tr key={account.accountid}>
                          <td>{account.accountid}</td>
                          <td>{account.accountnumber}</td>
                          <td>{account.status}</td>
                          <td>{account.balance}</td>
                          <td>
                            {moment(account.createdon).format('LLLL')}
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                ) : (
                  <div>
                    <h4>No accounts found!</h4>
                  </div>
                )}
              </div>
            </div>
            <div id="transaction">
              <div className="transaction-history">
                {this.props.accounts.transactions !== undefined ? (
                  <table>
                    <caption>
                  Transaction History
                    </caption>
                    <tr>
                      <th>No.</th>
                      <th>Type</th>
                      <th>Previous balance</th>
                      <th>Current balance</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>By</th>
                    </tr>
                    { this.props.accounts.transactions.map((transaction) => (
                      <tbody>
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
                      </tbody>
                    ))}
                  </table>
                ) : (
                  <div>
                    <h4>No transactions has been made yet</h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

HomePage.propTypes = {
  getUserAccounts: propTypes.func.isRequired,
  getTransactionHistory: propTypes.func.isRequired,
  accounts: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ...state,
});


export default connect(
  mapStateToProps,
  { getTransactionHistory, getUserAccounts },
)(HomePage);
