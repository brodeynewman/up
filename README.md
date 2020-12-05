# Lambda API's using [Apex Up](https://apex.sh/up/)

## Why?

Serverless is kind of shit... Testing some alternatives.


## Understanding the codebase

The reason why Up is so powerful (in my opinion), is that it works as a proxy in front of your API. This allows you to do... whatever you want in your API codebase.

In this example, I'm starting a simple Express server via the [proxy command](https://apex.sh/docs/up/configuration/#reverse_proxy).

## Getting started

### Setup

Up requires a [up.json](./up.json) file to get started.

Up also assumes you have the AWS CLI installed.

### Create your `~./aws/credential` profile

```
[default]
aws_access_key_id = **YOUR KEY ID**
aws_secret_access_key = **YOUR ACCESS KEY**
```

Once you have your AWS profile created, supply the `profile` in your `up.json` file. In my case, I'm using profile name `default`. You can name yours whatever you want.

Further configuration is pretty straightforward.
Up allows for environment-based lambda configuration as well.

In my example, I'm simply changing the memory allocation -- but you can modify any of the [lambda](https://apex.sh/docs/up/configuration/#lambda_settings) settings based on your environments.

## todo:

1. Add CI with actions
