import store from '@/store';

export default function (to, from, next) {
  console.log(to, from, next, 'to, from, next');
  console.log(store, 'store');
}
