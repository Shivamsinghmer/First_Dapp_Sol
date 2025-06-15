async function main() {
    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy();

    console.log("Lock deployed to:", lock.address);

     
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
});