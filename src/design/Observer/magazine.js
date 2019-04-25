const publisher = {
  subscribers: {any: []},
  subscribe(callbackFunction, type) {
    type = type || `any`;
    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(callbackFunction);
  },
  unsubscribe(callbackFunction, type) {
    this.visitSubscribers(`unsubscribe`, callbackFunction, type);
  }, // 야ㅐ 이게 보니깐 내가 방장이라 그런가? share server 도 있는데 먼지 모르겠네 
  publish(publication, type) {
    this.visitSubscribers(`publish`, publication, type);
  },
  // 배쉬 공유하기가 있어서 해봄
  // 배쉬 공유한거냐?
  //  터미널?
  // 나도 쉐어 서버가 있음.
  // 데브서버 기동이 된다는 뜻인가
  
  
  // 모르겠음................. 몬가 ... 몬가 일어나고 있음
  // 니 안의 흑욤룡이 깨어나고 있다.
  // ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ룡이 /
  // 다인도 되네
  // 채팅방만 좀 찾고 싶은데
  // 혹시 왼쪽에 오픈 에디터스?? 에 없냐 나는 거기에 있음
  // 맥은 없나 
  // 그럴리가
  // 일렉트론이고 플러그인인데
  // 지금 윈도우임?
  // 나는 윈도우임 
  // 사실 잘모름 ㅋㅋㅋㅋㅋ
  // 근데
  // vs코드가 점점 파워풀 해지고
  // 넘 기능이 많아지니까
  // 툴도 공부해야되는 시대가 되어버린 느낌임.
  // 해야지 .. ㅜㅜ 섹스.....
  visitSubscribers(action, arg, type) {
    const pubtype = type || `any`;
    const subscribers = this.subscribers[pubtype];
    subscribers.forEach((subscriber, index) => {
      if (action === `publish`) {
        subscriber(arg);
      } else if (subscriber === arg) {
        subscribers.splice(index, 1);
      }
    })
  }
};

function makePublisher(clientPublisher) {
  for (let key in publisher) {
    if (publisher.hasOwnProperty(key)
        && typeof publisher[key] === 'function') {
        clientPublisher[key] = publisher[key];
    }
  }
  clientPublisher.subscribers = {any: []};
}

const paper = {
  daily() {
    this.publish(`big news today`);
  },
  monthly() {
    this.publish(`interesting analysis`, `monthly`);
  }
};

makePublisher(paper);


var joe = {
  drinkCoffee(paper) {
    console.log(`${paper}를 읽었습니다.`);
  },
  sundayPreNap(monthly) {
    console.log(`잠들기 전에 ${monthly}를 읽고 있습니다.`);
  }
};

paper.subscribe(joe.drinkCoffee);
paper.subscribe(joe.sundayPreNap, `monthly`);


paper.daily();
paper.daily();
paper.daily();
paper.daily();
paper.monthly();

makePublisher(joe);
joe.tweet = function (msg) {
  this.publish(msg);
};

paper.readTweets = function (tweet) {
  console.log(`Call big meeting! Someone ${tweet}`);
};
joe.subscribe(paper.readTweets);

joe.tweet(`hate the paper today`);
