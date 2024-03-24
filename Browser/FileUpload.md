# File Upload to Blockchain

1. Begin by uploading a [contract for fileuploads](https://github.com/SavAct/SavWeb/tree/main/Smart%20Contract/site) or utilize one already uploaded by another user, such as [savactsavact](https://bloks.io/account/savactsavact?loadContract=true&tab=Actions&account=savactsavact&scope=savactsavact). Alternatively, you can create your own custom contract with different rules, but ensure that the defined action names and parameter names remain consistent.

2. Access the [SavAct app](https://savact.app/), navigate to the menu located in the upper left corner, and log in to your Antelope account, for example, via the Anchor Wallet.
   <img src="/Browser/OpenMenu_Labeled.png" alt="Menu of SavAct app" title="Menu of SavAct app" style="max-height: 400px; padding: 10px 5px 10px 5px">

3. Proceed to the [file upload section](https://savact.app/#/_fileupload_/).

4. Input the contract details:

- `Scope`: Follows the Antelope account name format, akin to a folder for a list of files. If using the mentioned [contract for file uploads](https://github.com/SavAct/SavWeb/tree/main/Smart%20Contract/site) the scope corresponds to the account name of the file uploader.
- `Contract`: Refers to the account name of the contract.
- `Chain`: Indicates the Antelope blockchain where the contract was deployed. This can be the blockchain's ID or a short name.
- `Index`: Specifies the primary key. The default file, indexed as `0`, will be loaded by default if no index is defined. Alternatively, you can click the `(!)` button to switch the index from a numeric type to an Antelope account name type.
  <img src="/Browser/TbEntryData.png" alt="Data that defines an table entry" title="Data that defines an table entry" style="max-height: 400px; padding: 10px 5px 10px 5px">

5. Choose the file you wish to upload.
6. Utilize the toggle buttons to select optional compression methods. Depending on your preferences, you can strike a balance between a smaller file size and reduced Antelope NET bandwidth usage.
7. The `Name` parameter denotes the file name, while `Type` indicates the [mime type](https://en.wikipedia.org/wiki/Media_type). `Attributes` are optional parameters that may be employed in a custom contract.
8. Optionally, provide information for `Originators` and `Resale fee` to handle the uploaded file as NFTs (Non-Fungible Tokens) in the future.
9. Decide whether to upload the file with a single transaction or split it by checking the box for `Split file`. If the file size exceeds the limit for a single transaction, splitting is necessary. Upon checking `Split file`, a slider and input field appear to specify the byte size for each transaction. Below, you'll see the number of transactions required to upload the entire file.

10. Initiate the uploading process by clicking the `UPLOAD` button and confirm the transaction in your Antelope wallet. The transaction ID and the estimated block number will appear in the input fields below.

::: warning
The block number might be inaccurate. Verify and correct it by entering the transaction ID on [bloks.io](https://bloks.io).
:::

11. If the file was split, click the button again to continue the upload process until the entire file is on the blockchain. Remember to verify and adjust the block number after each transaction.

::: info
The last transaction ID and block number contain all the necessary information to retrieve the file from the blockchain, as outlined in the [naming scheme](/Browser/NamingScheme). Optionally, proceed to the next step to store this information in the contract RAM table, facilitating file retrieval using human-readable strings.
:::

12. Once the entire file is uploaded, finalize the process by clicking the `FINISH UPLOAD` button.

Use the [SavAct Browser](https://savact.app/#/_browser_) to request files from the blockchain, adhering to the [naming scheme](/Browser/NamingScheme) guidelines.
