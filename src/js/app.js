import CallbackChat from './callbackChat';
import Collapse from './collapse';
import Liker from './liker';

// eslint-disable-next-line no-console
console.log('app started');

const collapse = new Collapse();
const callbackChat = new CallbackChat();
const liker = new Liker();

collapse.events();
callbackChat.events();
liker.events();
