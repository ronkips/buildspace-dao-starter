import { useAddress, useMetamask } from '@thirdweb-dev/react';

const App = () => {
  //use the hooks thirdweb give us,
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("Address:", address);
  //this is the case the user hasn't connected their wallet
  //to your web app. let them call connectwallet
  if (!address ) {
  return(
    <div className='landing'>
      <h1>Welcome to KipDAO</h1>
      <button onClick={connectWithMetamask} className="btn-hero">
        Connect your wallet
      </button>
    </div>);
    }
    //This is the case we have the users address
    //which means they connected their wallet to our site

  return (
    <div className="landing">
      <h1> 👀 wallet connected, let's now move on</h1>
    </div>
  );
};

export default App;
