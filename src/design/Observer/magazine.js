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
  },
  publish(publication, type) {
    this.visitSubscribers(`publish`, publication, type);
  },
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
