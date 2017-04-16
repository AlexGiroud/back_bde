// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

module.exports = function(app) {
    var User = app.models.student;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;
    var Event = app.models.Event;

    User.create([
        {
            "lastname": "string",
            "firstname": "string",
            "email": "tutu@tutu.tutu",
            "birthdate": "2017-04-14T09:21:20.045Z",
            "studentId": "string",
            "cardStatus": "string",
            "Ycoin": 0,
            "picture": "string",
            "formation": "string",
            "phone": 0,
            "realm": "string",
            "username": "tutu",
            "emailVerified": true,
            "password": "tutu"
        }
    ], function(err, users) {
        if (err) throw err;

        console.log('Created users:', users);

        //create the admin role
        Role.create({
            name: 'admin'
        }, function(err, role) {
            if (err) throw err;

            console.log('Created role:', role);

            //make bob an admin
            role.principals.create({
                principalType: RoleMapping.USER,
                principalId: users[0].id
            }, function(err, principal) {
                if (err) throw err;

                console.log('Created principal:', principal);
            });
        });
    });

    Event.create([
          {
            "Nom": "Degustation de vin",
            "Description": "string",
            "Prix": 50,
            "DateEvent": "2017-04-14T18:29:11.511Z",
            "DateDebutInscription": "2017-04-14T18:29:11.511Z",
            "DateFinInscription": "2017-04-14T18:29:11.511Z",
            "Photo": "public/img/degustation_vin.jpg",
            "Adresse": "string",
            "DateCreation": "2017-04-14T18:29:11.511Z",
          }
        ], function(err, events) {
        if (err) throw err;

        console.log('Created events:', events);

    });

    Event.create([
      {
        "Nom": "Soirée Erasmus - Crazy Rabbit",
        "Description": "string",
        "Prix": 50,
        "DateEvent": "2017-04-14T18:29:11.511Z",
        "DateDebutInscription": "2017-04-14T18:29:11.511Z",
        "DateFinInscription": "2017-04-14T18:29:11.511Z",
        "Photo": "public/img/erasmus_crazy_rabbit.jpg",
        "Adresse": "string",
        "DateCreation": "2017-04-14T18:29:11.511Z",
      }
    ], function(err, events) {
    if (err) throw err;

    console.log('Created events:', events);

    });

    Event.create([
      {
        "Nom": "Soirée Erasmus - Flower Power",
        "Description": "string",
        "Prix": 50,
        "DateEvent": "2017-04-14T18:29:11.511Z",
        "DateDebutInscription": "2017-04-14T18:29:11.511Z",
        "DateFinInscription": "2017-04-14T18:29:11.511Z",
        "Photo": "public/img/erasmus_flower_power.jpg",
        "Adresse": "string",
        "DateCreation": "2017-04-14T18:29:11.511Z",
      }
    ], function(err, events) {
    if (err) throw err;

    console.log('Created events:', events);

    });
};


