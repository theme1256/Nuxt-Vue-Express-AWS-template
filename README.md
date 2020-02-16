# Nuxt-Vue-Express on AWS-Lambda

> SSR Frontend on Serverless
> Sample: https://aws.folkmann.it/

## Setup AWS and serverless

1. Head to the AWS Certificate Manager, and create and verify the domain
2. Update the `secrets.json`
3. Deploy the project, it will fail on GetBasemap
4. Go to "API Gateway/Custom Domain Names", and add the domainname you just created a certificate for
5. Go to your DNS-registra and create a CNAME that points to the XXXXXXXXXXXX.execute-api.[region].amazonaws.com domain you were given in 2.
6. Deploy the project again
7. You might have to wait 40 minutes before the domain works
8. Start development

## Build and Deploy Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and upload to AWS-Lambda (update config in serverless.yml first!)
$ npm run deploy
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
