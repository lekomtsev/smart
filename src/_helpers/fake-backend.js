export default function configureFakeBackend() {
  const user = [
    {
      id: 1,
      username: 'test',
      password: 'test',
      firstName: 'Test',
      lastName: 'User',
    },
  ];

  const realFetch = window.fetch;

  console.log(realFetch, 'realFetch');
}
