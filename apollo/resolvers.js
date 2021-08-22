const users = [
    { 
        id: 1, 
        username: 'Nham', 
        email: 'nham@gmail.com',
        password: '123'
    },
    { 
        id: 2, 
        username: 'Kin', 
        email: 'kin@gmail.com',
        password: '123'
    },
];

const posts = [
    { 
        id: 1, 
        title: 'Post 1', 
        description: 'Post 1 description', 
        status: 'publish', 
        date_created: '22-08-2021', 
        author: {
            id: 1,
            username: 'Nham'
        }
    },
    {
        id: 2, 
        title: 'Post 2', 
        description: 'Post 2 description', 
        status: 'publish', 
        date_created: '22-08-2021',
        author: {
            id: 1,
            username: 'Nham'
        }
    }
];

export const resolvers = {
  Query: {
    users() {
        return users;
    },
    posts() { 
        return posts;
    },
    post(_parent, _args, _context, _info) { 
        return posts.find(post => post.id === _args.id);
    }
  },
}
