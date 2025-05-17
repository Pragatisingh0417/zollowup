const DashboardPage = ({ user }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold mb-4">Hello, {user?.name || 'Guest'}!</h1>
    <p className="text-gray-600">Welcome to your dashboard.</p>
  </div>
);

export default DashboardPage;
