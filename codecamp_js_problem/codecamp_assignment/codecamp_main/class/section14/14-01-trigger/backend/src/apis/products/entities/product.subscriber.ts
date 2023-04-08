// subscriber - 엔티티를 구독하다가 트리거 함수를 실행하는 역할

import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';

@EventSubscriber() // 트리거임을 nestjs에 알려주는 데코레이터 -> EntitySubscriberInterface - 엔티티 구독 인터페이스 타입
export class ProductSubscriber implements EntitySubscriberInterface {
  constructor(
    dataSource: DataSource, // TypeORM 연결
  ) {
    dataSource.subscribers.push(this); // this - 클래스 내부에서 클래스 자기 자신ㅇ르 가리킴
  }

  listenTo() {
    return Product;
  }

  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    console.log(event);

    const id = event.entity.id; // 이벤트 - 엔티티 - id 값
    const name = event.entity.name; // 이벤트 - 엔티티 - name 값
    const description = event.entity.description; // 이벤트 - 엔티티 - description 값
    const price = event.entity.price; // 이벤트 - 엔티티 - price 값
    const isSoldout = event.entity.isSoldout; // 이벤트 - 엔티티 - isSoldout 값

    console.log(id, name, description, price, isSoldout); // 빅쿼리, 엘라스틱서치에 담기

    // 1. 트리거를 사용하면 안되는 경우
    // -> 트랜잭션으로 연결된 중요한 내용들

    // 2. 트리거를 사용할 수 있는 경우
    // -> 메인 로직에 큰 피해를 끼치지 않는 로직들 -> 통계 계산, 로그 기록하기 등 -> 통계 관련 summary 테이블 관리!
  }
}
