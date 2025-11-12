const { deepMerge, normalizarAlumno } = require('./deepMerge');

describe('Igualdad profunda', () => {
    test('Happy path: deepMerge combina objetos anidados por valor', () => {
        const a = {
            user: 
            { nombre: 'Ana', rol: 'estudiante' },
            activo: true
        }
        const b = {
            user: 
            { rol: 'tutor' },
            activo: true,
            extra: 1
        }
        const response = deepMerge(a, b);
        expect(response).toEqual(
            {
                user: 
                { nombre: 'Ana', rol: 'tutor' },
                activo: true,
                extra: 1
            }
        );
    });
    
    test('Happy path: normalizarAlumno retorna estructura con promedio', () => {
        const alumno = { nombre: 'Ana', notas: [8, 9, 7] }
        const response = normalizarAlumno(alumno);
        expect(response).toEqual(
            { nombre: 'Ana', notas: [8, 9, 7], promedio: 8 }
        );
    });
    
    test('Sad path: deep merge con parametros inválidos', () => {
        expect(() => deepMerge(null, {})).toThrow('objeto1 debe ser objeto');
        expect(() => deepMerge({}, null)).toThrow('objeto2 debe ser objeto');
        expect(() => deepMerge([], {})).toThrow('objeto1 debe ser objeto');
        expect(() => deepMerge({}, [])).toThrow('objeto2 debe ser objeto');
    });

    test('Sad path: normalizarAlumno con parametros inválidos', () => {
        expect(() => normalizarAlumno(null)).toThrow('alumno debe ser objeto');
        expect(() => normalizarAlumno({ nombre: 123, notas: [8] })).toThrow();
        expect(() => normalizarAlumno({ nombre: 'Ana', notas: [8, 'a'] })).toThrow('notas debe contener números válidos');
    });
});