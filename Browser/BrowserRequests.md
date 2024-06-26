# Requests of decentralized website

A file stored on the blockchain can take the form of an HTML file containing JavaScript, which will be rendered as a website. This website operates within an [iframe](https://www.w3schools.com/tags/tag_iframe.ASP) and can communicate with the SavWeb browser via [PostMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) to request other files, sites, or interact with the blockchain in a simplified manner.

To handle all available requests, you can integrate the latest class, SavWeb, from [SavWeb.ts](https://github.com/SavAct/SavWeb-Pages/blob/main/Shop/src/Components/SavWeb.ts).

For examples and templates, you can explore existing [open source decentralized websites](https://github.com/SavAct/SavWeb-Pages/tree/main) or begin with a Vue Quasar template [here](https://github.com/SavAct/SavWeb/tree/main/Dev%20Page).

## Identification Token

For security purposes, most interactions between a decentralized website and the browser require an identification token (`idToken`). This identification token is a random `string` generated by the browser during initialization.

## Initialization

Upon loading, the necessary data for website initialization is transmitted by the browser.

```typescript
interface PageIni extends RouteLocation {
  f: "ini";
  link: string;
  idToken: string;
  darkstyle: boolean;
}
```

It includes the `idToken` (identification token) and the user style `darkstyle`, which is set to true for dark mode.

## Verifying the Identification Token

The website can check at any time if the identification token is still valid by sending a `verifyId` request. An optional parameter `alt` can be added to redirect to a specified page if the identification token is invalid.

```typescript
interface VerifiyId {
  f: "verifyId";
  idToken: string;
  alt?: string;
}
```

## Fetch User

Retrieve the user currently logged in. Optionally, specify a particular user by defining the `user` parameter.

```typescript
interface GetUser {
  f: "getUser";
  id: string;
  idToken: string;
  user?: PublicAccount;
}

interface GetUserResult {
  f: "getUserResult";
  id: string;
  user: PublicAccount | undefined;
}

interface PublicAccount {
  name?: string;
  chain?: string;
  permission?: string;
  publicKeys?: Array<string>;
}
```

## Payment Processing

The SavWeb browser provides a user interface for managing payments on the blockchain. The website can request standard cryptocurrency payments or utilize the decentralized [SavAct fraud protection](https://savact.app/#/_trx_/) mechanism. Through this interface, users can make payments using their crypto wallets, directly from a cryptocurrency exchange, or in fiat currency.

```typescript
export interface PayParams {
  chain: string;
  from?: string;
  to: string;
  pay: string;
  memo?: string;
  t?: string | number;
  dt?: string | number;
}

export interface Payment extends PayParams {
  f: "pay";
  id: string;
  idToken: string;
}
```

The `chain` parameter identifies the blockchain, which can be specified either by the chain ID or the short name of the chain, such as "eos" or "wax".

The `to` parameter specifies the recipient account, which can be a contract account. Optionally, the `memo` parameter can be included to attach data to the transaction, which can be evaluated within the contract.

The `from` parameter is optional and is used if the user account needs to be predefined.

The `pay` parameter defines the asset, comprising the amount, token symbol, and token contract.

::: info
It's essential to include the decimal places even if they are zero, as they determine the token precision. For example, the EOS token has a precision of 4, requiring 4 decimal places.
:::

The `t` and `dt` parameters are optional and are used to implement the fraud protection mechanism. They specify the time until which a service should be received and the transaction finalized, respectively. Time is measured in seconds. Use only one of them: `t` for an absolute Unix timestamp and `dt` for a time span beginning at the execution of the payment.

```typescript
interface PaymentResult {
  f: "payResult";
  id: string;
  result: false | (PayParams & { index?: string });
  data: unknown;
}
```

Upon completion of the transaction, the browser sends a payment result. Successful payments may include an `index` number, represented as a string. This index corresponds to the Antelope RAM table entry of the fraud protection payment.

## Custom Antelope Transaction

Another available request option is to send a custom Antelope transaction. This transaction encompasses all typical Antelope transaction data, similar to eosjs.

```typescript
interface Transaction {
  f: "trx";
  id: string;
  chain?: string; // Chain id or chain short name
  actor?: string;
  contract: string;
  action: string;
  data: unknown;
  permission?: string;
  idToken: string;
}

interface TransactionResult {
  f: "trxResult";
  id: string;
  success: boolean;
}
```

## EosioChainApi

Leverage functionalities similar to eosjs without directly incorporating it into your codebase.

```typescript
interface EosioChainApi {
  f: "eosioChainApi";
  id: string;
  chain: string;
  post:
    | "get_account"
    | "get_table_rows"
    | "get_table_by_scope"
    | "get_currency_balance";
  params: unknown;
  idToken: string;
}

interface EosioChainApiResult {
  f: "eosioChainApiResult";
  id: string;
  post:
    | "get_account"
    | "get_table_rows"
    | "get_table_by_scope"
    | "get_currency_balance";
  result: unknown;
}
```

## Requesting a File from the Blockchain

To retrieve a file stored on the blockchain, you can utilize the same strings as defined in the [naming scheme](/Browser/NamingScheme) for the get parameter.

```typescript
interface GetFile {
  f: "getFile";
  id: string;
  get: string; // Link to a file
  idToken: string;
}

interface GetFileResult {
  f: "getFileResult";
  id: string;
  file: File;
}
```

## Navigate to a Page

Switch the current page to another one specified by the `to` parameter. Utilize the [naming scheme](/Browser/NamingScheme) for decentralized websites.
The `target` parameter determines whether the page should be loaded in a new window or replace the current one. Set it to `null` if you intend to stay on the same page file and only modify additional parameters such as the following query and hash.

```typescript
interface GoTo {
  f: "go";
  to: string;
  target?: "_blank" | "_self" | null;
}
```

## Set Location

Modify the displayed path in the browser's address bar.

```typescript
interface SetLocation {
  f: "setLocation";
  idToken: string;
  fullPath?: string;
  path?: string;
  query?: Query;
  hash?: string;
}

type Query = {
  [k: string]: string | null | Array<string | null>;
};
```

## View Payment History

Access the history of payments with fraud protection, optionally for a specific user.

```typescript
interface OpenHistory {
  f: "openHistory";
  idToken: string;
  user?: string;
  to?: string;
  chain?: string;
}
```

Utilize the `to` parameter as a filter for payments to a specific recipient.

## Additional Options

Additional options may be introduced in future updates. Please feel free to suggest any further features or enhancements.
