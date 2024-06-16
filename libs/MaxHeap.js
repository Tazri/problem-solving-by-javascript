import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

const pq = new MaxPriorityQueue();

pq.enqueue(4);

console.log(pq.isEmpty());
console.log(pq.size());
console.log(pq.front());
console.log(pq.dequeue());
