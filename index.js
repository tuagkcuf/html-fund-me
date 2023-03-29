import {ethers} from "./ethers-5.6.esm.min.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
connectButton.onclick = connect
fundButton.onclick = fund

console.log(ethers)

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({
            method: "eth_requestAccounts",
        })
        connectButton.innerHTML = "Connected"
    } else {
        connectButton.innerHTML = "Install metamask"
    }
}

async function fund(ethAmount) {
    console.log(`Funding with ${ethAmount}`)
    if (typeof window.ethereum !== "undefined") {

    }
}
