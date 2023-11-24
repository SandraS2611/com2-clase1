const posts = [
  {
    id: Date.now(),
    title: "Angular",
    desc: "jdjdj",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FAngular_%2528framework%2529&psig=AOvVaw3ii10AX-ihZ0-8mKjmkj9B&ust=1700845258205000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNDrzLzM2oIDFQAAAAAdAAAAABAI",
  },
];

const createNewPost = ({ title, desc, image }) => {
  if (!title) return null;

  const newPost = { id: Date.now(), title, desc, image };

  posts.push(newPost);

  return newPost;
};

const getAllPosts = () => {
  return [...posts];
};

const getPostById = ({ id }) => {
  const post = posts.find((post) => post.id === id);

  return post;
};

export const postModel = {
  findAll: getAllPosts,
  create: createNewPost,
  findOne: getPostById,
}
