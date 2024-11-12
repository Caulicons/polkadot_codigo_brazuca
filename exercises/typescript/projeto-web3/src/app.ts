import { ethers } from "ethers";

const provider = ethers.getDefaultProvider("mainnet");

export function initApp() {
  const walletInput = document.getElementById(
    "wallet-address"
  ) as HTMLInputElement;
  const balanceDisplay = document.getElementById(
    "balance"
  ) as HTMLParagraphElement;
  const transactionsDisplay = document.getElementById(
    "transactions"
  ) as HTMLDivElement;
  const checkBalanceButton = document.getElementById(
    "check-balance"
  ) as HTMLButtonElement;
  const checkTransactionsButton = document.getElementById(
    "check-transactions"
  ) as HTMLButtonElement;

  checkBalanceButton.addEventListener("click", async () => {
    const address = walletInput.value.trim();
    if (!ethers.isAddress(address)) {
      balanceDisplay.textContent = "Endereço inválido!";
      return;
    }

    try {
      const balance = await provider.getBalance(address);
      balanceDisplay.textContent = `Saldo: 
            ${ethers.formatEther(balance)} ETH`;
    } catch (error) {
      balanceDisplay.textContent = "Erro ao buscar o saldo.";
      console.error(error);
    }
  });

  checkTransactionsButton.addEventListener("click", async () => {
    const address = walletInput.value.trim();
    if (!ethers.isAddress(address)) {
      transactionsDisplay.textContent = "Endereço inválido!";
      return;
    }

    try {
      const history = await provider.getLogs({
        address,
        fromBlock: "0x0",
        toBlock: "latest",
      });
      transactionsDisplay.innerHTML = "<h3>Últimas Transações:</h3>";
      history.slice(0, 5).forEach((log: { address: string; data: string }) => {
        const txElement = document.createElement("p");
        txElement.textContent = `Endereço: ${log.address} - Dados: ${log.data}`;
        transactionsDisplay.appendChild(txElement);
      });
    } catch (error) {
      transactionsDisplay.textContent = "Erro ao buscar as transações.";
      console.error(error);
    }
  });
}
