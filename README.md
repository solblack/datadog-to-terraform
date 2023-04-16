# Datadog to Terraform Converter

Converts Datadog monitor and dashboard JSON into Terraform code.

## How to Use

1. Create your monitor or dashboard in the Datadog UI and copy the JSON.
1. Open the converter.html file in a browser, paste the JSON in the input section and click on the button to convert and copy the result.
1. Paste the resulting code into your terraform file and run `terraform fmt` to format.

And that's it.

---

## Contributing

We'd love for folks to contribute! Feel free to add your own ideas or take a look at the issues for inspiration. The [Contributing Guide](CONTRIBUTING.md) explains development setup and the release process.

## Original repo
This repo is a fork of [this repository](https://github.com/laurmurclar/datadog-to-terraform). It was forked to adapt it, add fixes and use it as a web UI converter.
You can refer to the original repo which will work as a browser extension.
