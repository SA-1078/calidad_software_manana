const {filterActiveUsers} = require('./filterActiveUsers');

describe('Filtrar Usuarios Activos',()=>{
    test('Happy path: Usuarios filtrados Correctamente',()=>{
        const users = [
            {id: 1,username: "higueraf",active: true},
            {id: 2,username: "lopezp",active: false},
            {id: 3,username: "hernandezt",active: true}
        ]
        const response = filterActiveUsers(users);
        const expectedUsers = [
            {id: 1,username: "higueraf",active: true},
            {id: 3,username: "hernandezt",active: true}
        ]
        expect(response).toStrictEqual(expectedUsers);
    });
    test('Sad path: diferencia tipos en objetos',()=>{
        const users = [
            {id: 1,username: "higueraf",active: true},
            {id: 2,username: "lopezp",active: false},
        ]
        const response = filterActiveUsers(users);
        const expectedUsers = [
            {id: 1,username: "higueraf",active: "true"},
        ]
        expect(response).not.toStrictEqual(expectedUsers);
    });
});