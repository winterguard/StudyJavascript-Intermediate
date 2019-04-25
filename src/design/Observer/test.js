class Publisher {
  constructor(props) {
    this.subscribers = {any: []};
  }

  subscribe(callbackFunction, type) {
    /** sex beem */
    /**
     * I am sex machine
     * but, never used..
     * and forever
     * fuck
     * 
     * 뭐 노티파이 같은거 갔냐?
     * 
     * 김도윤이 
     * 무슨 포커스??? 영어라서 모름 어케함
     * 한다고 노티 옴
     * 
     * 각자 일하다가
     * 노티 보내는 것도 되는구만
     * 왼쪽 위에
     * 세션 디테일즈 보면
     * 포커싱 하면
     * 확성기 아이콘 뜸
     * 왼쪽 라이브쉐어 클릭하고
     * 
     * 애ㅣ거? 갔냐?
     * you
     * 채팅창이 없는디?
     * 어디로 가야 보이지
     * 
     * 나는 처음에 켜질때 같이 켜졌음
     * 나는 없었음 아 그런가 쨌든 괜찮구만 ㅇㅇㅇㅇㅇㅇ
     * 이걸로 개발 협업 가면 되겠다 
     * 아항 ㅇㅇㅇㅇ그러네 각자 컴에서 켜놓고되지 않을까???
     * 
     * ~고~
     *듯
     * ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
     * 고 재밌을듯 ㅋㅋㅋㅋ 거의 옆에서 하는 느낌이네  훗
     * 훗 훗 훗 훗go sex 채팅방좀 찾아봄
     *
     * 근데 이러면
     * 소스코드가
     * 너한테 있는건가?
     * ㅇㅇ
     * 그거까지는 잘 모르겠네 .....
     * 너한테 혹시 
     * 옆에 뭐 폴더 그... 히에라키?? 폴더구조 같은거 보임?파일만 보임?
     * 약간
     * 템프폴더 처럼
     * 가상 폴더 만들어서
     * 클라우드처럼
     * 넣어 놓는 개념인듯
     * 
     * 탐색기 마냥 아 그렇구만 가상폴더냐 어떻게 되는지는 좀 찾아봐야하겠다;;;;
     
     * 처음 켤때
     * 근데 vs코드
     * 아닌데 그거랑 상관 없을거 같은데
     * 플러기인이라 
     * 함 찾아봄
     * 구글 독스 만한거 같은데
     * 쾌적하기도 하고
     * 그 웹같은 경우는
     * 웹팩을 데브 서버 켜놓고 많이 하잖아.
     * 그럼
     * 같이 수정하면서
     * 해도 
     * 되나
     * 오
     *  나 결혼하고 6월쯤
     * 이걸로
     * 짝코딩
     * 몇번 해보자
     * 벤딩머신 말고
     * 예제 많은데
     * 주말에 한 4,5시간 잡아서
     * 하루에 태스크 하나씩 해보자
     * 개 잼날거 같은데
     * ㅅㅂ 올만에 도움 되는구만
     * power sex
     * 4
     */
    /** Too much sex conversation.. */
    
    // power sex

    // good sex
    //
    type = type || 'any';
    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(callbackFunction);
  }

  unsubscribe(callbackFunction, type) {
    this.visitSubscribers('unsubscribe', callbackFunction, type);
  }

  publish(publication, type) {
    this.visitSubscribers('publish', publication, type);
  }

  visitSubscribers(action, callbackFunctionName, type) {
    const publicType = type || 'any';
    const subscribers = this.subscribers[publicType];
    subscribers.forEach((subscriber, index) => {
      if (action === 'publish') {
        subscriber(callbackFunctionName);
      } else if (subscriber === callbackFunctionName) {
        subscribers.splice(index, 1);
      }
    })
  }
}
