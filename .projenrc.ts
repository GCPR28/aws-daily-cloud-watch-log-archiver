import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'GCPR28',
  authorAddress: 'GCPR28@users.noreply.github.com',
  cdkVersion: '2.66.0',
  defaultReleaseBranch: 'main',
  name: '@gcpr28/aws-daily-cloud-watch-log-archiver',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/GCPR28/aws-daily-cloud-watch-log-archiver.git',
  description: 'AWS CloudWatch Logs daily archive to s3 bucket',
  keywords: ['aws', 'cdk', 'aws-cdk', 'scheduler', 's3', 'bucket', 'archive', 'lambda'],
  deps: [
    '@yicr/secure-log-bucket',
  ],
  devDeps: [
    'aws-sdk-client-mock',
    'aws-sdk-client-mock-jest',
    '@aws-sdk/client-cloudwatch-logs',
    '@types/aws-lambda',
    '@yicr/jest-serializer-cdk-asset',
  ],
  peerDeps: [
    '@yicr/secure-log-bucket',
  ],
  jestOptions: {
    jestConfig: {
      snapshotSerializers: ['<rootDir>/node_modules/@yicr/jest-serializer-cdk-asset'],
    },
    extraCliOptions: ['--silent'],
  },
  lambdaOptions: {
    // target node.js runtime
    runtime: awscdk.LambdaRuntime.NODEJS_18_X,
    bundlingOptions: {
      // list of node modules to exclude from the bundle
      externals: ['@aws-sdk/client-cloudwatch-logs'],
      sourcemap: true,
    },
  },
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '16.19.1',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 19 * * *']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();