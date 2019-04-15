class Publisher {
  constructor(props) {
    this.subscribers = {any: []};
  }

  subscribe(callbackFunction, type) {
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
