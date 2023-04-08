import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export class GqlAuthAccessGuard extends AuthGuard('myAuth') {
  // 반드시 이름이 getRequest 여야함(오버라이딩)
  getRequest(context: ExecutionContext) {
    const gqlContext = GqlExecutionContext.create(context); // gql이 context를 사용할 수 있게 만들어줌

    // gql의 정상적인 req
    return gqlContext.getContext().req;
  }
}
