<<<<<<< HEAD
export default function ProfilePage() {
  return (
    <div>
      <h1>Profil</h1>
    </div>
  );
}
=======
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function ProfilePage() {
    const user = {
      _id: '67489e12f4cff587c4eae238',
      createdAt: '2024-11-28T16:45:06.790+00:00',
      email: 'gege@gmail.com',
      name: 'Mehdi',
    };
  
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-lg w-full p-6 bg-white rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Profil de {user.name}</h1>
          <div className="space-y-4">
            <div>
              <span className="font-medium text-gray-700">Date de création :</span>{' '}
              {new Date(user.createdAt).toLocaleDateString('fr-FR')}
            </div>
            <div>
              <span className="font-medium text-gray-700">Email :</span> {user.email}
            </div>
          </div>
        </div>
      </div>
        <Footer />
      </div>
    );
  }
>>>>>>> 9921e56791f295046394212f689cf08f0dfe9e45
