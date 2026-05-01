export default function ({ $auth, redirect, route }) {
    // If the user is not authenticated
    if ($auth.user.role != 1) {
        if ($auth.user.role == 2) {
            return redirect('/'+new Date().getFullYear()+'/')
        }
        if ($auth.user.role == 3) {
            return redirect('/'+new Date().getFullYear()+'/se')
        }
        const path = encodeURIComponent(route.path);
        return window.history.back();
    }
  }