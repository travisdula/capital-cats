import './index.css';

export function Home(props: any) {
    //need to pass savings n such
    const savings = 124;
    const oldSavings = 123;
    const accounts: Array<BankAccountSimple> = [
        {
            name: "Visa",
            lastFour: "1234",
            amount: savings / 2,
        },
        {
            name: "Capital One",
            lastFour: "1223",
            amount: savings / 2,
        },
    ];
    return (
        <div className="grid place-items-center h-screen bg-gradient-to-b from-blue-200 to-purple-200">
            <body className="w-96">
                <div className="text-center bg-opacity-25 bg-pink-500 rounded-md m-2">
                    <div>
                        <span>
                            You saved&nbsp;
                        </span>
                        <b>{moneyFormatUSD(savings)}</b>
                        <span>
                            &nbsp;this month
                        </span>
                    </div>
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
                <div>
                    { accounts.map(account => (
                        <BankAccountSimpleCard
                            key={account.name + account.lastFour}
                            account={account}
                        />
                    ))}
                </div>
                <div>
                    Cats bro
                </div>
            </body>
        </div>
    );
}

interface BankAccountSimple {
    name: string;
    lastFour: string;
    amount: number;
}

function BankAccountSimpleCard(props: any) {
    const account = props.account;
    return (
        <div className="flex flex-row flex-auto bg-opacity-25 bg-pink-400 m-2 rounded-md text-indigo-900">
            <span className="m-2 w-1/2">
                <div className="text-xl font-bold">
                    {account.name}
                </div>
                <div className="text-sm">
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
