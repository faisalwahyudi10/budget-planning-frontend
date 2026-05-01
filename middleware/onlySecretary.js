export default function ({ $auth, redirect, route }) {
    // If the user is not authenticated
    if ($auth.user.role != 3) {
        if ($auth.user.role == 1) {
            return redirect('/')
        }
        if ($auth.user.role == 2) {
            return redirect('/'+new Date().getFullYear())
        }
        const path = encodeURIComponent(route.path);
        return window.history.back();
    }
  }