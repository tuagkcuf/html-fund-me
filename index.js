async function connect() {
    if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        document.getElementById("connect-btn").innerHTML =
            "Connected";
    } else {
        document.getElementById("connect-btn").innerHTML =
            "Install metamask";
    }
}

async function fund(ethAmount) {
    console.log(first)
}