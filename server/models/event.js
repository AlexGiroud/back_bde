'use strict';

module.exports = function(Event) {

    Event.disableRemoteMethodByName("upsertWithWhere");
    Event.disableRemoteMethodByName("createChangeStream");
    Event.disableRemoteMethodByName("replaceOrCreate");
    Event.disableRemoteMethodByName("patchOrCreate");
    Event.disableRemoteMethodByName("patchAttributes");
};
