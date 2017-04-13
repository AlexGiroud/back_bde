'use strict';

module.exports = function(Participant) {

    Participant.disableRemoteMethodByName("upsertWithWhere");
    Participant.disableRemoteMethodByName("createChangeStream");
    Participant.disableRemoteMethodByName("replaceOrCreate");
    Participant.disableRemoteMethodByName("patchOrCreate");
    Participant.disableRemoteMethodByName("patchAttributes");
};
