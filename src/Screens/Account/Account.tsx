import React from 'react';
import './Account.css';

interface accountProps {
  showAccount : boolean;
  handleShowAccount : () => void;
}

export const Account = ({showAccount, handleShowAccount} : accountProps) => {
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
      <input className="modal-btn" style={{paddingLeft: "500px"}} type="checkbox" id="account-btn" name="modal-btn"/>

      <label className="text-center" htmlFor="account-btn" style={{marginBottom:"400px", marginLeft:"300px", width:"80px"}}>
          Account
          {/*<i className="uil uil-expand-arrows"></i>*/}
      </label>

      <div className="modal flex-col">
            <div className="text-center bg-opacity-75 bg-red-200 rounded-md m-4">
                <div>
                    <span>
                        You saved&nbsp;
                    </span>
                    <b>{moneyFormatUSD(savings)}</b>
                    <span>
                        &nbsp;this month
                    </span>
                </div>
                <hr className="rounded-md"/>
                <div>
                    <span>
                        That's a change of&nbsp;
                    </span>
                    <b>{moneyFormatUSD(savings - oldSavings)}</b>
                    <span>
                        &nbsp;from last month
                    </span>
                </div>
            </div>
        <div className="bg-opacity-50 m-4 bg-gray-500 rounded-md">
            {accounts.map(acc => 
                (<BankAccountSimpleCard account={acc}/>)
            )}
        </div>
      </div>
    </div>
  );
};

interface BankAccountSimple {
    name: string;
    lastFour: string;
    amount: number;
}

function BankAccountSimpleCard(props: any) {
    const account = props.account;
    return (
        <div className="flex flex-row flex-auto bg-opacity-75 bg-pink-400 m-2 rounded-md text-indigo-900">
            <span className="m-2 w-1/2">
                <div className="text-xl font-bold text-left">
                    {account.name}
                </div>
                <div className="text-sm text-left">
                    {"..."+account.lastFour}
                </div>
            </span>
            <span className="text-right flex-grow m-1 self-center text-xl">
                {moneyFormatUSD(account.amount)}
            </span>
        </div>
    )
}

function moneyFormatUSD(amount: number) {
    return amount.toLocaleString("en-US", {
		            style: "currency",
                    currency: "USD"
                })
}