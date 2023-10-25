

const updateRole = async () => {
    try {
        await setDoc(doc(db, 'empleados', employee.id), employee);
    } catch (error) {
      
    }
}