class EventEmitter {
  constructor() {
    this.eventCallbacks = {};
  }
  /**
   *
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (callback === undefined) {
      return {};
    }

    let callbackIndex = 0;
    if (this.eventCallbacks.hasOwnProperty(eventName)) {
      this.eventCallbacks[eventName].push(callback);
      callbackIndex = this.eventCallbacks[eventName].length - 1;
    } else {
      this.eventCallbacks[eventName] = [callback];
    }

    return {
      unsubscribe: () => {
        this.eventCallbacks[eventName].splice(callbackIndex, callbackIndex + 1);
      },
    };
  }

  /**
   *
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   *
   */
  emit(eventName, args = []) {
    // if event dose not exist
    if (!this.eventCallbacks.hasOwnProperty(eventName)) {
      return [];
    }

    const results = [];

    for (let cb of this.eventCallbacks[eventName]) {
      results.push(cb(...args));
    }

    return results;
  }
}

const emitter = new EventEmitter();
const sub = emitter.subscribe("firstEvent", (...args) => args.join(","));
console.log(emitter.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
sub.unsubscribe(); // undefined
console.log(emitter.emit("firstEvent", [4, 5, 6])); // [], there are no subscriptions
