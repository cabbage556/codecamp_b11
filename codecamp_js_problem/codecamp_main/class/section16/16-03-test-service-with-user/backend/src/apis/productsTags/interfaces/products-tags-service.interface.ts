export interface IProductsTagsServiceFindByNames {
  tagNames: string[];
}

export interface IProductsTagsServiceBulkInsert {
  names: {
    name: string;
  }[]; // 객체를 요소로 갖는 배열 타입
}
