// =====================================================================
// graphql-API 문제
// =====================================================================
// http://backendclass.codebootcamp.co.kr/graphql 에서 제공하는 API를 사용하세요.
// =====================================================================

1) createBoard를 활용해, 게시물을 하나 등록해 주세요.
mutation{
    createBoard(createBoardInput:{
      writer:"예림"
      password: "비번"
      title:"집보내줘"
      contents:"시간이언제이렇게빨리"
      youtubeUrl:"https://www.youtube.com/"
      boardAddress:{
        zipcode:"12345"
        address:"경기도"
        addressDetail:"경기도 구리시 ~~~"
      }
      images:"이미지"    
    }){
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress:boardAddress{
        zipcode
        address
        addressDetail
      }
      createdAt
    }
  }
====
{
    "data": {
      "createBoard": {
        "_id": "63bea25f12e1f50028229533",
        "writer": "예림",
        "title": "집보내줘",
        "contents": "시간이언제이렇게빨리",
        "youtubeUrl": "https://www.youtube.com/",
        "likeCount": 0,
        "dislikeCount": 0,
        "images": [
          "이미지"
        ],
        "boardAddress": {
          "zipcode": "12345",
          "address": "경기도",
          "addressDetail": "경기도 구리시 ~~~"
        },
        "createdAt": "2023-01-11T11:49:51.656Z"
      }
    }
  }


2) 등록한 게시글의 제목과 내용은 무엇인가요?
query{
    fetchBoard(boardId:"63bea25f12e1f50028229533"){
      title
      contents
    }
  }
=====
{
    "data": {
      "fetchBoard": {
        "title": "집보내줘",
        "contents": "시간이언제이렇게빨리"
      }
    }
  }

3) 등록한 게시글에 좋아요를 1 올려주세요.
mutation{
    likeBoard(boardId:"63bea25f12e1f50028229533")
  }
=====
{
    "data": {
      "likeBoard": 1
    }
  }


4) 등록한 게시글에 싫어요도 1 올려주세요.
mutation{
    dislikeBoard(boardId:"63bea25f12e1f50028229533")
  }
=====
{
    "data": {
      "dislikeBoard": 1
    }
  }

5) 등록한 게시글의 좋아요와 싫어요는 각각 몇 개 인가요? 
	(fetchBoard를 활용해서 확인해 보세요.)'
query{
  fetchBoard(boardId:"63bea25f12e1f50028229533"){
    likeCount
    dislikeCount
  }
}
=====
{
    "data": {
      "fetchBoard": {
        "likeCount": 1,
        "dislikeCount": 1
      }
    }
  }


6) 현재 등록된 게시글의 총 갯수는 몇 개 인가요? 
	(어떤 API를 활용하면 좋을지 찾아보세요!)
query{
  fetchBoardsCount
}
=====
{
    "data": {
      "fetchBoardsCount": 68
    }
  }


7) 등록한 게시글의 제목을 수정해 보세요!
mutation{
    updateBoard(
      updateBoardInput:{
        title: "진짜로집보내줘"
      }
        password:"비번"
        boardId:"63bea25f12e1f50028229533"){
      title
    }
  }
====
{
    "data": {
      "updateBoard": {
        "title": "진짜로집보내줘"
      }
    }
  }

8) fetchBoards 전체 게시물 조회를 활용하여 방금 쓴 게시물을 검색해 보세요.
	(search 변수를 활용해요!)
    query{
        fetchBoards(search:"진짜로집보내줘"){
          writer
          contents
          likeCount
        }
      }
=====
      {
        "data": {
          "fetchBoards": [
            {
              "writer": "예림",
              "contents": "시간이언제이렇게빨리",
              "likeCount": 1
            }
          ]
        }
      }


9) 등록한 게시글에 댓글을 3개 추가해 보세요.
mutation{
    createBoardComment(
      createBoardCommentInput:{
        writer:"예림"
        password:"비번"
        contents:"시간이언제이렇게빨리"
        rating:3
      }
      boardId:"63bea25f12e1f50028229533"
    ){
      writer
      _id
    }
  }

  mutation{
    createBoardComment(
      createBoardCommentInput:{
        writer:"예림"
        password:"비번"
        contents:"나만두고가"
        rating:4
      }
      boardId:"63bea25f12e1f50028229533"
    ){
      writer
      _id
    }
  }

  mutation{
    createBoardComment(
      createBoardCommentInput:{
        writer:"예림"
        password:"비번"
        contents:"난글렀어먼저가"
        rating:5
      }
      boardId:"63bea25f12e1f50028229533"
    ){
      writer
      _id
    }
  }
=====
{
    "data": {
      "createBoardComment": {
        "writer": "예림"
        "_id": "63bea8f212e1f5002822956d"
      }
    }
  }

  {
    "data": {
      "createBoardComment": {
        "writer": "예림",
        "_id": "63bea9c612e1f50028229571"
      }
    }
  }

  {
    "data": {
      "createBoardComment": {
        "writer": "예림",
        "_id": "63bea9c912e1f50028229572"
      }
    }
  }



10) 첫번째 댓글의 내용을 수정해 보세요!
mutation{
    updateBoardComment(
      updateBoardCommentInput:{
        contents:"첫번째 덧글"
        rating:3.3}
    password:"비번"
    boardCommentId:"63bea8f212e1f5002822956d"){
      rating
      writer
    }
  }
=====
{
    "data": {
      "updateBoardComment": {
        "rating": 3.3,
        "writer": "예림"
      }
    }
  }


11) 두번째 댓글을 삭제해 보세요!
mutation{
    deleteBoardComment(
      password:"비번"
      boardCommentId: "63bea9c612e1f50028229571")
    }
=====
{
    "data": {
      "deleteBoardComment": "63bea9c612e1f50028229571"
    }
  }


12) 등록한 게시글에 달려있는 모든 댓글을 조회해 보세요.(작성자와 내용만 조회합니다.)
query{
    fetchBoardComments(
        boardId:"63bea25f12e1f50028229533"){
            writer, contents
        }
  }
=====
{
    "data": {
      "fetchBoardComments": [
        {
          "writer": "예림",
          "contents": "난글렀어먼저가"
        },
        {
          "writer": "예림",
          "contents": "첫번째 덧글"
        },
        {
          "writer": "예림",
          "contents": "시간이언제이렇게빨리"
        }
      ]
    }
  }



13) BEST 게시글을 조회해 보세요! (API 이름을 잘 찾아보세요!)
query {
    fetchBoardsOfTheBest{
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
    }
  }
====
{
    "data": {
      "fetchBoardsOfTheBest": [
        {
          "_id": "63be965e12e1f5002822951f",
          "writer": "김현준",
          "title": "반갑습니다",
          "contents": "오늘 가입했습니다. 잘부탁드립니다.",
          "youtubeUrl": null,
          "likeCount": 50,
          "dislikeCount": 50,
          "images": []
        }



14) 회원가입을 해보세요! 사용자, 즉 User를 만드는 API입니다!
mutation{
    createUser(createUserInput:{
      email:"aaa@asdfv.com"
      password:"pw1234"
      name:"가입자"
    }){
      _id
      email
      name
    }
  }
=====
{
    "data": {
      "createUser": {
        "_id": "63beab9f12e1f50028229573",
        "email": "aaa@asdfv.com",
        "name": "가입자"
      }
    }
  }