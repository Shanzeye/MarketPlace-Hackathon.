// pages/profile.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/signin'); // Redirect to login page if no user data
    } else {
      setUser(JSON.parse(userData));
    }
  }, [router]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Joined on: {user.createdAt}</p>
    </div>
  );
}
