import { Cache } from './cache';
import { Event } from './event';
import { Message } from './message';
/**

    @class Command-

    Copyright 2019 Unvired Inc. All Rights Reserved.
    For commercial license details, please contact Unvired
*/
declare class Command extends Event {
    /**
        @constructor - initialise the cache
    */
    constructor(cache: Cache);
    /**
        @method reply - this method is used to reply back to the user
    */
    reply(message: Message): boolean | void;
}
export { Command };
