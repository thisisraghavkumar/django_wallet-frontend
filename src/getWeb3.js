import Web3 from 'web3';

const getWeb3 = ()=>
    new Promise((resolve, reject) => {
        window.addEventListener("load", async () => {
            // Modern dapp browser
            if(window.ethereum){
                console.log("Modern dapp broser detected!");
                const web3 = new Web3(window.ethereum);
                //console.log(web3);
                try{
                    await window.ethereum.enable();
                    resolve(web3);
                }catch(error){
                    reject(error);
                }
            } else if(window.web3){
                console.log("Legacy dapp browser, injected web3 detected!");
                const web3 = window.web3;
                resolve(web3);
            } else{
                console.log("No web3 provider detected, connecting to local web3 provider!");
                const web3Provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
                const web3 = new Web3(web3Provider);
                resolve(web3);
            }
        })
    });

export default getWeb3;
