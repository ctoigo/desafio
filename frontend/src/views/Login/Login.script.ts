import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { auth } from '../../firebaseConfig';
import router from '../../router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref('');

    const handleLogin = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        const token = await userCredential.user.getIdToken();
        localStorage.setItem("token", token);
        router.push('/dashboard');
      } catch (e) {
        error.value = "Erro ao fazer login. Verifique as credenciais.";
      }
    };

    return { email, password, error, handleLogin };
  },
};
