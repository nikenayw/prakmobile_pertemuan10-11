// src/stores/auth.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import router from '@/router';
import { auth } from '@/utils/firebase';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut, User } from 'firebase/auth';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { alertController } from '@ionic/vue';

// Initialize GoogleAuth once in the application lifecycle (e.g., in main.ts)
export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const isAuth = computed(() => user.value !== null);

  // Google Login
  const loginWithGoogle = async () => {
    try {
      // Inisialisasi GoogleAuth hanya sekali ketika login
      await GoogleAuth.initialize({
        clientId: '807086740181-ih7fsrh9nebcs04qofgmj4fegn7h8gfp.apps.googleusercontent.com', // Pastikan clientId benar
        scopes: ['profile', 'email'],
        grantOfflineAccess: true,
      });

      const googleUser = await GoogleAuth.signIn();
      const idToken = googleUser.authentication.idToken;
      const credential = GoogleAuthProvider.credential(idToken);

      const result = await signInWithCredential(auth, credential);
      user.value = result.user;

      // Navigasi ke halaman home setelah login sukses
      router.push("/home");
    } catch (error) {
      console.error("Google sign-in error:", error);
      const alert = await alertController.create({
        header: 'Login Gagal!',
        message: 'Terjadi kesalahan saat login dengan Google. Coba lagi.',
        buttons: ['OK'],
      });
      await alert.present();
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
      await GoogleAuth.signOut();
      user.value = null;
      router.replace("/login");
    } catch (error) {
      console.error("Sign-out error:", error);
      throw error;
    }
  };

  // Mengatur state pengguna yang sudah login (jika ada)
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  });

  return { user, isAuth, loginWithGoogle, logout };
});
