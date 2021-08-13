import React from 'react';
import './Account.css';

interface BankAccountSimple {
  name: string;
  lastFour: string;
  amount: number;
}

function BankAccountSimpleCard(props: any) {
  const account = props.account;
  return (
    <div className="row">
      <div className="column1">
        <p>{account.name}</p>
      </div>
      <div className="column2">
        <p>{"..." + account.lastFour}</p>
      </div>
      <div className="column3">
        <p>{moneyFormatUSD(account.amount)}</p>
      </div>
    </div>
  )
}

function moneyFormatUSD(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })
}

interface accountProps {
  showAccount: boolean;
  handleShowAccount: () => void;
}

export const Account = ({ showAccount, handleShowAccount }: accountProps) => {
  const accounts: Array<BankAccountSimple> = [
    {
      name: "Visa",
      lastFour: "1234",
      amount: 1234,
    },
    {
      name: "Capital One",
      lastFour: "1223",
      amount: 53442.23,
    },
  ];

  const savings = accounts.map(acc => acc.amount).reduce((acc, cur) => acc + cur);
  const oldSavings = 12314;

  return (
    <div className="section full-height">
      <input className="modal-btn" style={{ paddingLeft: "500px" }} type="checkbox" id="account-btn" name="modal-btn" />

      <label className="text-center" htmlFor="account-btn" style={{ marginBottom: "400px", marginLeft: "300px", width: "80px" }}>Account</label>

      <div className="modal">
        <div className="modal-wrap">
          <div className="summary">
            <h3> You saved <b>{moneyFormatUSD(savings)}</b> this month!</h3>
            <p>That's a change of <b>{moneyFormatUSD(savings - oldSavings)}</b> from last month!</p>
            <p>Your savings gained you <i>42 kibble koins</i> for your cats!</p>
          </div>

          <h5>View your savings in detail</h5>
          {accounts.map(acc => (<BankAccountSimpleCard account={acc} />))}
        </div>
      </div>
    </div>
  );
};
