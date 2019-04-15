const publisher = {
  subscribers: {
    any: []
  },
  on(type, callbackFunction, context) {
    type = type || 'any';
    callbackFunction = typeof callbackFunction === 'function' ? callbackFunction : context[callbackFunction];
    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = [];
    }

    this.subscribers[type].push(
      {callbackFunction: callbackFunction, context: context || this}
    );
  },
  remove(type, callbackFunction, context) {
    this.visitSubscribers('unsubscribe', type, callbackFunction, context);
  },
  fire(type, publication) {
    this.visitSubscribers('publish', type, publication);
  },
  visitSubscribers(action, type, arg, context) {
    const publishType = type || 'any';
    const subscribers = this.subscribers[publishType];
    subscribers.forEach((subscriber, index) => {
      if (action === 'publish') {
        subscriber.callbackFunction.call(subscriber.context, arg);
      } else if (subscriber.callbackFunction === arg
        && subscriber.context === context) {
        subscribers.splice(index, 1);
      }
    })
  }
};
