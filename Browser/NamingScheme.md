# Naming Scheme

There are two different types of addresses. One directly references the uploaded file on the blockchain, while the other points to an Antelope RAM table entry. Many parameters can be omitted, in which case default values are automatically used.

Full scheme for an immutable file:

`#{transaction id}@{block number}:{blockchain network}`

Full scheme for a RAM table entry with uint64 primary key:

`#{scope}@{scontract}:{blockchain network}/{table name}!{primary key number}`

Full scheme for a RAM table entry with a name as the primary key:

`#{scope}@{scontract}:{blockchain network}/{table name}/!{primary key name}`

Additional symbols like `#` or `&` can still be appended to this scheme, and they will be forwarded to the displayed immutable website.

## Default values

Ultimately, `#{contract name}` is sufficient to define a link; all other parameters have default values.

| Description        | Default Value         |
| ------------------ | --------------------- |
| Blockchain Network | `eos`                 |
| Table Name         | `index`               |
| Primary Key Number | `0`                   |
| Scope              | Same as Contract Name |

## Why this Scheme

### Beginning with a Hash

As mentioned earlier, the browser should be accessible as a simple HTML file, but you should also be able to share links to your immutable web app. Therefore, each address must start with the hash sign `#`. This is the only symbol used to set parameters, which does not reload the entire page when changed and also works with local files.

For example, the address for #`#savact:eos` opened via a local HTML file would appear like this in your browser:

`file:///C:/SavActApp/index.html#savact:eos`

And like this on the web:

`https://savact.app/#savact:eos`

### Colon `:`

The contract name and scope can contain a dot. Therefore, the colon `:` is used to select the blockchain network. This choice is not far-fetched; for instance, if you own the contract account name `example.com`, you could share a link with `#exapmle.com:kylin`

### At sign `@`

If a contract hosts multiple user websites, each user can have its own scope without needing to upload their own contract. The contract may include extra features for online shops, forums, or similar functionalities. The link could then look like this for several users:

`#seller123@shop`,

`#sportshouse@shop`,

When you already know the contract, it's convenient to recognize the user directly by `seller123` "at" the contract `shop`.

### Slash sign `/`

Following typical URL patterns, different tables are defined with the slash.

### Exclamation mark `!`

For numbers, the exclamation mark seems suitable, as the hash sign is already in use for anchors.

### Slash sign with exclamation mark `/!`

When using a primary key, you delve deeper into the hierarchy. Therefore, it's logical to use the slash. However, if you omit the table name, it might be misinterpreted. Hence, it is followed by the exclamation mark, similar to the public key number.
