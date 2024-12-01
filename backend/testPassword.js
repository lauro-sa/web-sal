import bcrypt from 'bcrypt';

async function hashPassword() {
    const password = '123456'; // Asegúrate de que es la misma contraseña que quieres verificar
    const saltRounds = 10; // Esto debería coincidir con el número de rondas usado en tu aplicación

    try {
        const hash = await bcrypt.hash(password, saltRounds);
        console.log('Nuevo hash generado:', hash);
        return hash;
    } catch (error) {
        console.error('Error generando el hash:', error);
    }
}

async function comparePassword() {
    const password = '123456';
    const storedHash = await hashPassword(); // Genera un nuevo hash para comparar

    try {
        const result = await bcrypt.compare(password, storedHash);
        console.log('Resultado de la comparación con nuevo hash:', result);
        if (result) {
            console.log('¡La contraseña es correcta con nuevo hash!');
        } else {
            console.log('Contraseña incorrecta con nuevo hash.');
        }
    } catch (error) {
        console.error('Error comparando la contraseña:', error);
    }
}

comparePassword();
