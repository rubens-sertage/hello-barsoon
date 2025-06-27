# Hello world JavaScript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `name`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `greeting`

A greeting message, for example `Hello World!`

## Example usage

```yaml
uses: actions/hello-barsoon@e76147da8e5c81eaf017dede5645551d4b94427b
with:
  name: Mona the Octocat
```
