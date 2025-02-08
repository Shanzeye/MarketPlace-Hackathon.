// // schemas/user.ts

// export default {
//     name: 'user',
//     title: 'User',
//     type: 'document',
//     fields: [
//       {
//         name: 'name',
//         title: 'Name',
//         type: 'string',
//       },
//       {
//         name: 'email',
//         title: 'Email',
//         type: 'string',
//       },
//       {
//         name: 'password',
//         title: 'Password',
//         type: 'string', // In a real-world scenario, you should hash the password.
//       },
//     ],
//   };





// schemas/user.ts

export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The full name of the user.',
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(3).max(50),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'The user\'s email address.',
      validation: (Rule: { required: () => { (): any; new(): any; email: { (): any; new(): any; }; }; }) => Rule.required().email(),
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      description: 'The user\'s password (hashed).',
      hidden: true, // Password field should be hidden for security reasons
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      readOnly: true,
    },
  ],
};

  