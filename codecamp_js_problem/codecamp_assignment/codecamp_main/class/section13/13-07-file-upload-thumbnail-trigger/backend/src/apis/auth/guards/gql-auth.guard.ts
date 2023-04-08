import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export const gqlAuthGuard = (name) => {
  return class GqlAuthGuard extends AuthGuard(name) {
    // 반드시 이름이 getRequest 여야함(오버라이딩)
    getRequest(context: ExecutionContext) {
      const gqlContext = GqlExecutionContext.create(context); // gql이 context를 사용할 수 있게 만들어줌
      console.log(name);

      return gqlContext.getContext().req; // gql의 정상적인 req 리턴
    }
  };
};
