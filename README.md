# Deno

A secure runtime for JavaScript and TypeScript.
Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.

Secure by default. No file, network, or environment access, unless explicitly enabled.
Supports TypeScript out of the box.
Ships only a single executable file.
Has built-in utilities like a dependency inspector (deno info) and a code formatter (deno fmt).
Has a set of reviewed (audited) standard modules that are guaranteed to work with Deno: deno.land/std

## Installation

### Deno Repository

Deno ships as a single executable with no dependencies. You can install it using the installers or download a release binary from the releases page.

[DENO](https://github.com/denoland/deno_install)

### Environment Variables Using Shell (Linux):

With Shell (/usr/local):

```bash
curl -fsSL https://deno.land/x/install/install.sh | sudo DENO_INSTALL=/usr/local sh
```

### Deno support for VSCode

axetroy.vscode-deno

### Run the server

```bash
deno run --allow-env --allow-net server.js
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
