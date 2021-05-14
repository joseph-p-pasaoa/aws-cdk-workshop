import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export interface HitCounterProps {
  /** the function that counts url hits **/
  downstream: lambda.IFunction;
}

export class HitCounter extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: HitCounterProps) {
    super(scope, id);

    // TODO
  }
}
