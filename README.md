## Test

```bash
# pull localstack
$ docker pull localstack/localstack

# run localstack
$ docker run -p 4566:4566 localstack/localstack

# create bucket
$ yarn ts-node -e "import {createBucket} from './core/src/infrastructure/services/s3.service.ts';createBucket();"

# e2e tests
$ yarn run test:e2e
```
