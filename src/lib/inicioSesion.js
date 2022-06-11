import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./firebase";



export const auth = getAuth(app);

export const signIn = async (email, password) => {
    
  const user = await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log('se ha registrado exitosamente');
      
    
    })
    .catch((error) => {
      console.log(error.code)
      console.log(error.message)
      return error
    });

   return user
 
}


export const logOut = async() => {
    await signOut(auth).then(() => {
      console.log('Ha salido de sesión')
    }).catch((error) => {
      console.log(error)
    });
  }