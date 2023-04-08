// // ======================================================================
// // graphql-API 문제
// // ======================================================================
// // http://example.codebootcamp.co.kr/graphql 에서 제공하는 API를 사용하세요.
// // ======================================================================

// 1) 철수의 나이는 몇살인가요?(나이만 조회해 주세요.)
12


// 2) 영희의 학교는 어디인가요?(학교만 조회해 주세요.)
"다람쥐초등학교"


// 3) 3번 게시글의 내용과 작성일이 무엇인가요?(내용과 작성일만 조회해 주세요.)
"number": 6;
"contents": "내용입니다!";
"createdAt": "2023-01-11T03:37:29.910Z";


// 4) 본인의 이름으로 프로필을 작성해 보세요.
mutation {
    createProfile(
      name : "예림"
      age : 28
      school : "코드캠프"
    ){message 
  }
  }

  =====
  {
    "data": {
      "createProfile": {
        "message": "프로필이 정상적으로 등록되었습니다."
      }
    }
  }



// 5) 본인의 이름으로 게시글을 작성해 보세요.
mutation{
    createBoard(
      writer:"예림"
      title:"인사"
      contents:"안녕하세요.배가 고픕니다."
    ){message,number}
  }
  =====
  {
    "data": {
      "createBoard": {
        "message": "게시물이 정상적으로 등록되었습니다.",
        "number": 169
      }
    }
  }

// 6) 자신의 프로필을 조회해 보세요.
query{
    fetchProfile(name:"예림"){
      number
    }
  }
  ====
{
    "data": {
      "fetchProfile": {
        "number": 102
      }
    }
  }


// 7) 자신의 게시글을 조회해 보세요.
query{
    fetchBoard(number:169){
      contents
      title
      writer}
  }
=====
{
    "data": {
      "fetchBoard": {
        "contents": "안녕하세요.배가 고픕니다.",
        "title": "인사",
        "writer": "예림"
      }
    }
  }

// 8) 본인의 프로필에서, 학교를 자신이 졸업한 초등학교로 바꿔보세요.
{
    "data": {
      "fetchBoard": {
        "contents": "안녕하세요.배가 고픕니다.",
        "title": "인사",
        "writer": "예림"
      }
    }
  }
=====
{
    "data": {
      "updateProfile": {
        "message": "프로필이 정상적으로 수정되었습니다."
      }
    }
  }


// 9) 본인의 게시글에서, 제목과 내용을 바꿔보세요.
mutation{
    updateBoard(
      number:169
      writer:"예림"
      title: "집가는 인사"
      contents: "안녕히계세요. 배가 고픕니다."
    ){message}
  }
=====
{
    "data": {
      "updateBoard": {
        "message": "게시물이 정상적으로 수정되었습니다."
      }
    }
  }


// 10) 자신이 좋아하는 만화 주인공으로 프로필을 작성해 보세요.
mutation{
    createProfile(
      name:"짱구"
      age:5
      school:"떡잎유치원"
    ){message}
  }
=====
{
    "data": {
      "createProfile": {
        "message": "프로필이 정상적으로 등록되었습니다."
      }
    }
  }


// 11) 위 10번에서 작성한 프로필을 삭제해 보세요.
mutation{
    deleteProfile(name:"짱구"){
      message
    }
  }
=====
{
    "data": {
      "deleteProfile": {
        "message": "프로필이 정상적으로 삭제되었습니다."
      }
    }
  }

// 12) 상품을 하나 만들어 보세요.
mutation{
    createProduct(
      seller:"예림"
      createProductInput:{
        name:"베개"
        detail:"푹신한 베개"
        price:50000
      }){_id}
  }
=====
{
    "data": {
      "createProduct": {
        "_id": "dc62c73c-d555-4f69-afb2-347a805d8f98"
      }
    }
  }

// 13) 위 12번에서 만들었던 상품의 가격을 500원 인상해 보세요.
mutation{
    updateProduct(
      productId:"dc62c73c-d555-4f69-afb2-347a805d8f98"
      updateProductInput:{price:50500}){
      message
    }
  }
====
{
    "data": {
      "updateProduct": {
        "message": "상품이 정상적으로 수정되었습니다."
      }
    }
  }


// 14) 위에서 만든 상품을 조회하되, 가격만 조회해 보세요.
query {
    fetchProduct(productId:"dc62c73c-d555-4f69-afb2-347a805d8f98"){
      price
    }
  }
=====
{
    "data": {
      "fetchProduct": {
        "price": 50500
      }
    }
  }

// 15) 조회했던 상품을 삭제해 보세요.
mutation {
    deleteProduct(productId:"dc62c73c-d555-4f69-afb2-347a805d8f98"){message}
  }
=====
{
    "data": {
      "deleteProduct": {
        "message": "상품이 정상적으로 삭제되었습니다."
      }
    }
  }


// 16) 삭제한 상품이 정말로 삭제되었는지 다시 한번 조회해 보세요.
query{
    fetchProduct(productId:"dc62c73c-d555-4f69-afb2-347a805d8f98"){
      name
    }
  }
=====
{
    "data": {
      "fetchProduct": null
    }
  }


// 17) 게시물 목록 중, 2페이지를 조회해 보세요.
query {
    fetchBoards(page:2){
      title
    }
  }
====
{
    "data": {
      "fetchBoards": [
        {
          "title": "코드캠프"
        },
        {
          "title": "코드캠프 인사"
        },
        {
          "title": "집에"
        },
        {
          "title": "코드캠프 인사"
        },
        {
          "title": "butter-fly"
        },
        {
          "title": "바꿨당"
        },
        {
          "title": "나의 게시판"
        },
        {
          "title": "수고했어 오늘도"
        },
        {
          "title": "안녕하세요"
        },
        {
          "title": "코드캠프"
        }
      ]
    }
  }


// 18) 게시물 목록을 조회할 때, 인수를 전달하지 않으면(page를 입력하지 않으면),
// 		어떤 결과가 발생하는지 확인해 보세요. (Hint : syntax error는 아닙니다.
field error가 발생해 응답하지 않는다.
page는 null로 둘 수 없는 타입(Non-null type)이므로 필드 에러가 발생한다.
하나의 에러도 전체 필드의 에러를 초래하는데, 필드 에러가 발생하면 실행기는 계속 실행하려 시도하지만 부분적인 결과만 생성되기 때문이다.
(https://spec.graphql.org/draft/#sec-Response - 3.11 List 와 6.4.4Handling)
If a list’s item type is non-null, a field error occurring at an individual item in the list must result in a field error for the entire list.
If a field error is raised, execution attempts to continue and a partial result is produced.


// 19) 프로필이 전체 몇 개가 있는지 확인해 보세요.
query{
    fetchProfilesCount
  }
====
{
    "data": {
      "fetchProfilesCount": 128
    }
  }

// 20) 게시물은 몇 개가 있는지 조회해보세요.
query {
    fetchBoardsCount
  }
=====
{
    "data": {
      "fetchBoardsCount": 169
    }
  }

