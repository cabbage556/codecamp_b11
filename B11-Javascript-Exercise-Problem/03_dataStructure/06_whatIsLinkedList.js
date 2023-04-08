/* 

    Linked List 는 어떠한 데이터를 연속적으로 저장할 때
    서로 연결되어 있는 형태를 가지는 저장소 형태를 가집니다.

    Linked List 는 데이터의 가장 첫번째 요소인 head 과
    데이터의 가장 마지막 요소인 tail 요소를 필수로 가지고 있으며
    각각의 요소는 다음 데이터를 가리킵니다.



    예를 들어볼까요?
    {                                       }
    객체 형태의 빈 저장소가 있다고 가정해봅시다.

    이 빈 저장소에 데이터를 하나 추가하면
    {
      Junny : { value : "Junny", next : null }
    }
    과 같은 형태로 데이터가 적용됩니다.


    데이터의 값을 나타내는 value 값과
    다음 데이터의 위치를 나타내는 next 값이 함께 설정되는데
    다음 데이터가 없을 경우에는 next 를 null 값으로 설정합니다.

    다시, 다른 데이터를 하나 추가해보면
    {
      Junny : { value : "Junny", next : "Hoony" },
      Hoony : { value : "Hoony", next : null }
    }
    
    다음과 같이 Hoony 이름을 가지는 데이터가 추가되면
    첫번째 데이터에서는 다음 데이터를 가리키는 next 의 값으로
    Hoony 데이터가 있는 객체의 value 값을 넣어줍니다.

    다시, 또 다른 데이터를 하나 추가해봅시다.
    {
      Junny : { value : "Junny", next : "Hoony" },
      Hoony : { value : "Hoony", next : "Woony" },
      Woony : { value : "Woony", next : null }
    }
    
    이번에는 Woony 이름을 가지는 데이터를 추가했으며,
    이전에 있던 Hoony 데이터의 next 는 Woony 데이터의 value 값을
    그 앞에 있는 Junny 는 다시 Hoony 데이터의 valu 값을 가리킵니다.

    이때 가장 첫번째 데이터인 Junny 가 head 부분이 되고
    가장 마지막에 추가된 데이터인 Woony 가 tail 부분이 됩니다.

    이처럼, Linked List 에서 이전 데이터가 다음 데이터를
    연속적으로 가리키는 자료구조를 Linked List 라고 합니다.

    

    Linked List 에서 데이터를 조회해본다면
    tail 데이터부터 head 부분까지 전체를 검색해 데이터를 조회합니다.

    {
      Junny : { value : "Junny", next : "Hoony" },
      Hoony : { value : "Hoony", next : "Woony" },
      Woony : { value : "Woony", next : null }
    }

    이 객체에서 value 값이 Woony 인 데이터를 찾으려고 한다면
    head 부분에 해당되는 Junny 객체부터 가져와 데이터를 비교합니다.
    
    이때, next 값이 "Woony" 인지를 확인했을 때
    Woony 가 아니라면 next 로 이어져있는 "Hoony" 객체로 다시 이동합니다.

    이동한 Hoony 객체의 next 값이 "Woony" 가 맞는지 확인하고
    "Woony" 와 일치한다면 다음 객체의 Woony 데이터에 접근할 수 있습니다.



    삭제하는 방법도 함께 알아봅시다.
    Hoony 데이터를 삭제하면 아래와 같이 적용됩니다.
    {
      Junny : { value : "Junny", next : "Woony" },
      Woony : { value : "Woony", next : null }
    }

    Hoony 데이터가 제거됨으로써, Hoony 를 가리키고 있던 Junny 의 next 는
    다시 다음 데이터인 Woony 를 가리킵니다.

    이처럼 데이터를 삭제하거나 추가하게 되면
    다음과 이전 데이터의 next 를 그에 맞게 수정해야줘야 하는 과정이 필요합니다.


    Linked List 는 기본적으로 다음 데이터를 가리키는 단방향성 특성을 띄지만
    이전 데이터까지 가리키는 양방향성 특성을 띌 수도 있습니다.

    {
      Junny : { value : "Junny", next : "Hoony", prev : null },
      Hoony : { value : "Hoony", next : "Woony", prev : "Junny" },
      Woony : { value : "Woony", next : null, prev : "Hoony" }
    }

    양방향성의 장점은 해당 데이터를 삭제했을 때
    삭제한 데이터를 기준으로 앞에 있는 데이터에 쉽게 접근할 수 있습니다.

    {
      Junny : { value : "Junny", next : "Hoony" },
      Hoony : { value : "Hoony", next : "Woony" }, // 삭제한다면?
      Woony : { value : "Woony", next : null }
    }

    단방향성 Linked List 에서 Hoony 라는 데이터를 삭제한다면
    앞에 있는 데이터인 Junny 데이터의 next 값을 다시 수정해야 하는데
    앞의 데이터를 지칭하는 데이터를 따로 저장해놓지 않았기 때문에
    이런 경우에는 직접 앞에 있는 데이터를 다시 찾아야 합니다.

    하지만 앞에 있는 데이터를 지칭하는 prev 가 있다면
    데이터를 삭제할 때 prev 에 저장하고 있는 value 값으로 
    쉽게 데이터에 접근할 수 있습니다.

*/